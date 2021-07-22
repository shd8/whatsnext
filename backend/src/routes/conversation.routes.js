const express = require('express');
const conversationsController = require('../controllers/conversationsController')();

const routes = express.Router();

routes
  .route('/')
  .post(conversationsController.updateConversation);

routes
  .route('/:conversationId/')
  .get(conversationsController.getConversationById)
  .post(conversationsController.updateConversationById)
  .delete(conversationsController.deleteConversationById);

module.exports = routes;
