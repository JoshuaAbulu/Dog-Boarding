// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route for fetching user accounts
router.get('/user-accounts', adminController.getUserAccounts);

// Route for managing user roles and permissions
router.post('/manage-roles-permissions/:userId', adminController.manageRolesPermissions);

// Route for resolving account issues
router.post('/resolve-account-issue/:userId', adminController.resolveAccountIssue);

module.exports = router;
