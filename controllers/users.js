const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Get all users
// @route     Get /api/v1/auth/users
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  const data = await User.findAll();
  res.status(200).json({
    success: true,
    data: data,
  });
});
