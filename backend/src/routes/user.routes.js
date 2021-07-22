const express = require('express');
const userController = require('../controllers/usersController')();

const routes = express.Router();

routes
  .route('/')
  .post(userController.updateUser);

routes
  .route('/:userId/')
  .get(userController.getUserById)
  .post(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = routes;
