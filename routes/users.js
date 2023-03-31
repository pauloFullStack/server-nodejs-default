const express = require('express');
const router = express.Router({ mergeParams: true });
const { getUsers } = require('../controllers/users');

router.route('/').get(getUsers);

module.exports = router;
