const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/index');

const indexController = new IndexController();

router.get('/', indexController.getIndex);

module.exports = router;