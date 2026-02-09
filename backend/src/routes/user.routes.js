const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth');
const { validateUpdateUser, validateUserId } = require('../middleware/validation');

router.get('/:id', authMiddleware, validateUserId, userController.getUserById);
router.put('/:id', authMiddleware, validateUserId, validateUpdateUser, userController.updateUser);
router.get('/', authMiddleware, userController.getProfile);

module.exports = router;
