const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/forms', authController.register);
router.post('/pizza', authController.registerpizza);

module.exports = router;