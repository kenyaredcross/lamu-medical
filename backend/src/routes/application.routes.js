const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');
const authMiddleware = require('../middleware/auth');
const { validateCreateApplication, validateUpdateApplication, validateApplicationId } = require('../middleware/validation');

router.get('/', authMiddleware, applicationController.getApplications);
router.get('/:id', authMiddleware, validateApplicationId, applicationController.getApplicationById);
router.post('/', authMiddleware, validateCreateApplication, applicationController.createApplication);
router.put('/:id', authMiddleware, validateApplicationId, validateUpdateApplication, applicationController.updateApplication);
router.delete('/:id', authMiddleware, validateApplicationId, applicationController.deleteApplication);

module.exports = router;
