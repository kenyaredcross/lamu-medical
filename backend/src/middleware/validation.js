const { body, param, validationResult } = require('express-validator');

// Validation error handler middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Auth validations
const validateRegister = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('userType').isIn(['student', 'company']).withMessage('User type must be either "student" or "company"'),
  handleValidationErrors,
];

const validateLogin = [
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

// Internship validations
const validateCreateInternship = [
  body('title').trim().notEmpty().withMessage('Title is required').isLength({ min: 5 }).withMessage('Title must be at least 5 characters'),
  body('description').trim().notEmpty().withMessage('Description is required').isLength({ min: 20 }).withMessage('Description must be at least 20 characters'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('duration').trim().notEmpty().withMessage('Duration is required'),
  body('stipend').optional().isInt({ min: 0 }).withMessage('Stipend must be a positive number'),
  body('skills').optional().isArray().withMessage('Skills must be an array'),
  body('requirements').optional().isArray().withMessage('Requirements must be an array'),
  body('category').optional().trim(),
  handleValidationErrors,
];

const validateUpdateInternship = [
  body('title').optional().trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters'),
  body('description').optional().trim().isLength({ min: 20 }).withMessage('Description must be at least 20 characters'),
  body('location').optional().trim(),
  body('duration').optional().trim(),
  body('stipend').optional().isInt({ min: 0 }).withMessage('Stipend must be a positive number'),
  body('skills').optional().isArray().withMessage('Skills must be an array'),
  body('requirements').optional().isArray().withMessage('Requirements must be an array'),
  body('category').optional().trim(),
  handleValidationErrors,
];

const validateInternshipId = [
  param('id').isMongoId().withMessage('Invalid internship ID'),
  handleValidationErrors,
];

// Application validations
const validateCreateApplication = [
  body('internshipId').isMongoId().withMessage('Invalid internship ID'),
  body('coverLetter').optional().trim().isLength({ min: 20, max: 2000 }).withMessage('Cover letter must be between 20 and 2000 characters'),
  handleValidationErrors,
];

const validateUpdateApplication = [
  param('id').isMongoId().withMessage('Invalid application ID'),
  body('status').optional().isIn(['pending', 'accepted', 'rejected', 'withdrawn']).withMessage('Invalid status'),
  handleValidationErrors,
];

const validateApplicationId = [
  param('id').isMongoId().withMessage('Invalid application ID'),
  handleValidationErrors,
];

// User validations
const validateUpdateUser = [
  param('id').isMongoId().withMessage('Invalid user ID'),
  body('name').optional().trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('profile').optional().isObject().withMessage('Profile must be an object'),
  body('profile.bio').optional().trim().isLength({ max: 500 }).withMessage('Bio must not exceed 500 characters'),
  body('profile.location').optional().trim(),
  body('profile.phone').optional().trim().matches(/^[0-9\-\+\(\)]+$/).withMessage('Invalid phone number'),
  handleValidationErrors,
];

const validateUserId = [
  param('id').isMongoId().withMessage('Invalid user ID'),
  handleValidationErrors,
];

module.exports = {
  validateRegister,
  validateLogin,
  validateCreateInternship,
  validateUpdateInternship,
  validateInternshipId,
  validateCreateApplication,
  validateUpdateApplication,
  validateApplicationId,
  validateUpdateUser,
  validateUserId,
};
