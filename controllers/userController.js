/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

const User = require('../Models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.getUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.updateUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.deleteUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
