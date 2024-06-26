// backend/routes/userRoutes.js
const express = require('express');
const { submitBranchChangeRequest } = require('../controllers/userController');
const router = express.Router();

router.post('/branch-change', submitBranchChangeRequest);

module.exports = router;
