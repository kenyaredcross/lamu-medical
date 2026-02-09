const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const Message = require('../models/Message');

// Store active users
const activeUsers = new Map();

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:5173'],
      credentials: true,
    },
  });

  // Middleware to verify JWT on connection
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Invalid token'));
    }
  });

  // Connection event
  io.on('connection', (socket) => {
    console.log(`User ${socket.userId} connected with socket ${socket.id}`);

    // Add user to active users
    activeUsers.set(socket.userId, socket.id);
    io.emit('activeUsers', Array.from(activeUsers.keys()));

    // Send message event
    socket.on('sendMessage', async (data) => {
      try {
        const { recipientId, content } = data;

        // Save message to database
        const message = new Message({
          sender: socket.userId,
          recipient: recipientId,
          content,
        });

        await message.save();
        await message.populate('sender', 'name email');

        // Send to recipient if online
        const recipientSocketId = activeUsers.get(recipientId);
        if (recipientSocketId) {
          io.to(recipientSocketId).emit('receiveMessage', {
            _id: message._id,
            sender: message.sender,
            content: message.content,
            createdAt: message.createdAt,
          });
        }

        // Acknowledge to sender
        socket.emit('messageSent', {
          _id: message._id,
          recipientId,
          content,
          createdAt: message.createdAt,
        });
      } catch (error) {
        socket.emit('error', { message: error.message });
      }
    });

    // Get messages between two users
    socket.on('getMessages', async (data) => {
      try {
        const { userId } = data;

        const messages = await Message.find({
          $or: [
            { sender: socket.userId, recipient: userId },
            { sender: userId, recipient: socket.userId },
          ],
        })
          .populate('sender', 'name email avatar')
          .sort({ createdAt: 1 });

        socket.emit('messagesLoaded', messages);
      } catch (error) {
        socket.emit('error', { message: error.message });
      }
    });

    // Mark messages as read
    socket.on('markAsRead', async (data) => {
      try {
        const { messageIds } = data;

        await Message.updateMany(
          { _id: { $in: messageIds } },
          { read: true }
        );

        io.emit('messagesMarkedAsRead', messageIds);
      } catch (error) {
        socket.emit('error', { message: error.message });
      }
    });

    // Get unread message count
    socket.on('getUnreadCount', async () => {
      try {
        const count = await Message.countDocuments({
          recipient: socket.userId,
          read: false,
        });

        socket.emit('unreadCount', count);
      } catch (error) {
        socket.emit('error', { message: error.message });
      }
    });

    // Typing indicator
    socket.on('typing', (data) => {
      const { recipientId } = data;
      const recipientSocketId = activeUsers.get(recipientId);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('userTyping', {
          userId: socket.userId,
        });
      }
    });

    socket.on('stopTyping', (data) => {
      const { recipientId } = data;
      const recipientSocketId = activeUsers.get(recipientId);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('userStoppedTyping', {
          userId: socket.userId,
        });
      }
    });

    // Disconnection event
    socket.on('disconnect', () => {
      console.log(`User ${socket.userId} disconnected`);
      activeUsers.delete(socket.userId);
      io.emit('activeUsers', Array.from(activeUsers.keys()));
    });
  });

  return io;
};

module.exports = initializeSocket;
