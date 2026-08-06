const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.showHome);
router.post('/search', indexController.searchEmployee);
router.post('/checkin', indexController.recordTimeLog);

module.exports = router;
