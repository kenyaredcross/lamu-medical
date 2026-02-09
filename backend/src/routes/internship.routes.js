const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internship.controller');
const authMiddleware = require('../middleware/auth');
const { validateCreateInternship, validateUpdateInternship, validateInternshipId } = require('../middleware/validation');

router.get('/', internshipController.getAllInternships);
router.get('/:id', validateInternshipId, internshipController.getInternshipById);
router.post('/', authMiddleware, validateCreateInternship, internshipController.createInternship);
router.put('/:id', authMiddleware, validateInternshipId, validateUpdateInternship, internshipController.updateInternship);
router.delete('/:id', authMiddleware, validateInternshipId, internshipController.deleteInternship);

module.exports = router;
