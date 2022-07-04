const express = require('express');

const router = express.Router();
const taskController = require('../controllers/task');

router.post('/', taskController.createTask);

router.get('/', taskController.getAll);

module.exports = router;
