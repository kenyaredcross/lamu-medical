# InternMatch - Full Stack Application Setup

## 🚀 Project Overview
InternMatch is a full-stack web application that connects students with companies for internship opportunities. The application features real-time messaging, job matching, and comprehensive management tools.

---

## 📁 Project Structure

```
internship-connect/
├── frontend/                  # React + TypeScript frontend
│   ├── src/
│   │   ├── pages/            # Page components
│   │   ├── components/       # Reusable components
│   │   ├── services/         # API and Socket.io services
│   │   ├── store/            # Zustand state management
│   │   ├── lib/              # Utilities and types
│   │   └── App.tsx           # Main app with routing
│   ├── .env.local            # Frontend environment variables
│   └── package.json
│
└── backend/                   # Node.js + Express backend
    ├── src/
    │   ├── routes/           # API route handlers
    │   ├── controllers/       # Business logic
    │   ├── models/           # MongoDB schemas
    │   ├── middleware/       # Auth & validation
    │   ├── config/           # Database & Socket.io config
    │   └── server.js         # Main server file
    ├── seed.js               # Database seeding script
    ├── .env                  # Backend environment variables
    └── package.json
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Axios** - HTTP client
- **Socket.io Client** - Real-time communication
- **React Router** - Routing

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.io** - Real-time events
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

---

## 📋 Features Implemented

### Authentication & Users
- ✅ User registration (Student/Company)
- ✅ User login with JWT
- ✅ Protected routes (student/company specific)
- ✅ User profiles with bio and location
- ✅ Password hashing with bcryptjs

### Internship Management
- ✅ Create internship postings (companies)
- ✅ Browse internships (students)
- ✅ Search and filter internships
- ✅ View internship details
- ✅ Internship CRUD operations

### Application Management
- ✅ Apply for internships
- ✅ View applications (students)
- ✅ Manage applications (companies)
- ✅ Update application status

### Real-time Features
- ✅ Direct messaging between users
- ✅ Typing indicators
- ✅ Unread message count
- ✅ Active user list
- ✅ Socket.io integration

### Data Validation
- ✅ Input validation on all endpoints
- ✅ Email validation
- ✅ Password strength requirements
- ✅ MongoDB ID validation
- ✅ Comprehensive error messages

### Database
- ✅ MongoDB Atlas integration
- ✅ Mock data seeding (3 students, 3 companies, 6 internships)
- ✅ Proper schema relationships
- ✅ Timestamps on all models

---

## 🚀 Getting Started

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Create `.env` file (already exists)
   - Update `MONGODB_URI` with your MongoDB Atlas connection string
   - Update `JWT_SECRET` for production

3. **Seed the database:**
   ```bash
   npm run seed
   ```

4. **Start the server:**
   ```bash
   npm run dev    # Development with nodemon
   npm start      # Production mode
   ```
   
   Server runs on: `http://localhost:5000`

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install axios socket.io-client zustand
   ```

2. **Configure environment variables:**
   - `.env.local` file is already configured
   - `VITE_API_URL=http://localhost:5000/api`
   - `VITE_SOCKET_URL=http://localhost:5000`

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   App runs on: `http://localhost:5173`

---

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Internship Endpoints
- `GET /api/internships` - Get all internships
- `GET /api/internships/:id` - Get internship details
- `POST /api/internships` - Create internship (auth required)
- `PUT /api/internships/:id` - Update internship (auth required)
- `DELETE /api/internships/:id` - Delete internship (auth required)

### Application Endpoints
- `GET /api/applications` - Get user's applications (auth required)
- `GET /api/applications/:id` - Get application details (auth required)
- `POST /api/applications` - Apply for internship (auth required)
- `PUT /api/applications/:id` - Update application (auth required)
- `DELETE /api/applications/:id` - Delete application (auth required)

### User Endpoints
- `GET /api/users` - Get current user profile (auth required)
- `GET /api/users/:id` - Get user by ID (auth required)
- `PUT /api/users/:id` - Update user profile (auth required)

### Message Endpoints
- `GET /api/messages/:userId` - Get messages with user (auth required)
- `GET /api/messages` - Get all conversations (auth required)
- `PUT /api/messages/:userId/read` - Mark messages as read (auth required)
- `DELETE /api/messages/:messageId` - Delete message (auth required)

---

## 🔐 Authentication Flow

1. **Register/Login**: User submits credentials
2. **JWT Token**: Backend issues JWT token
3. **Storage**: Token stored in localStorage
4. **API Calls**: Token included in Authorization header
5. **Validation**: Middleware verifies token on protected routes
6. **Auto-redirect**: Invalid token redirects to login

---

## 💬 Socket.io Events

### Client → Server
- `sendMessage` - Send message to user
- `getMessages` - Fetch messages with specific user
- `markAsRead` - Mark messages as read
- `getUnreadCount` - Get unread message count
- `typing` - Emit typing indicator
- `stopTyping` - Stop typing indicator

### Server → Client
- `receiveMessage` - New message received
- `messagesLoaded` - Messages loaded
- `messagesMarkedAsRead` - Messages marked as read
- `unreadCount` - Unread message count
- `userTyping` - User is typing
- `userStoppedTyping` - User stopped typing
- `activeUsers` - List of active users

---

## 📊 Database Models

### User
```
{
  name: String,
  email: String (unique),
  password: String (hashed),
  userType: 'student' | 'company',
  profile: {
    bio: String,
    avatar: String,
    location: String,
    phone: String
  },
  timestamps
}
```

### Internship
```
{
  title: String,
  company: ObjectId (ref: User),
  description: String,
  location: String,
  duration: String,
  stipend: Number,
  skills: [String],
  requirements: [String],
  category: String,
  applications: Number,
  timestamps
}
```

### Application
```
{
  student: ObjectId (ref: User),
  internship: ObjectId (ref: Internship),
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn',
  coverLetter: String,
  appliedAt: Date,
  timestamps
}
```

### Message
```
{
  sender: ObjectId (ref: User),
  recipient: ObjectId (ref: User),
  content: String,
  read: Boolean,
  timestamps
}
```

---

## 🧪 Testing

### Test Credentials (After Seeding)

**Students:**
- Email: `alice@example.com`, Password: `password123`
- Email: `bob@example.com`, Password: `password123`
- Email: `carol@example.com`, Password: `password123`

**Companies:**
- Email: `hr@techstartup.com`, Password: `password123`
- Email: `careers@digitalsolutions.com`, Password: `password123`
- Email: `jobs@creativeagency.com`, Password: `password123`

### Seeded Data
- 3 Students
- 3 Companies
- 6 Internships (with various categories: Frontend, Backend, Data Science, Mobile, Design)
- 5 Sample Applications

---

## 🚀 Deployment Checklist

### Backend
- [ ] Update `JWT_SECRET` in `.env` (strong, random value)
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas (or production DB)
- [ ] Set up proper CORS origins
- [ ] Configure rate limiting
- [ ] Set up error logging/monitoring
- [ ] Use HTTPS in production

### Frontend
- [ ] Update API URLs to production backend
- [ ] Build for production: `npm run build`
- [ ] Set up CDN for static assets
- [ ] Configure environment-specific configs
- [ ] Enable gzip compression
- [ ] Set up analytics

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Verify MongoDB Atlas connection string
- Check IP whitelist in MongoDB Atlas
- Ensure database name in URI matches your database

**Socket.io Connection Failed**
- Check CORS configuration
- Verify Socket.io client is connecting to correct URL
- Check browser console for errors

**JWT Token Invalid**
- Ensure JWT_SECRET is same on frontend/backend
- Check token is being sent in Authorization header
- Verify token hasn't expired

### Frontend Issues

**API Calls Return 401**
- Check if token is stored in localStorage
- Verify token is valid (not expired)
- Check if backend is running

**Real-time Messages Not Working**
- Verify Socket.io connection: check browser Network tab
- Ensure user is authenticated before connecting
- Check backend Socket.io logs

---

## 📝 Next Steps / Future Features

- [ ] Email verification on registration
- [ ] Password reset functionality
- [ ] File uploads (resume, company logo)
- [ ] Advanced search with filters
- [ ] Notifications system
- [ ] Company reviews and ratings
- [ ] Interview scheduling
- [ ] Payment integration (for premium features)
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

---

## 🔗 Useful Links

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Socket.io Documentation](https://socket.io/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review API documentation
3. Check browser console and backend logs
4. Verify environment variables are correct

---

**Application Ready for Development! 🎉**
