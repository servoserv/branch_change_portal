const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.use('/api/admin', adminController);

module.exports = router;