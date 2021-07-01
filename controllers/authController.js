/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
const User = require('./../Models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});
