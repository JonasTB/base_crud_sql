const routes = require('express').Router();
const userController = require('../controller/User');
const addressController = require('../controller/Address');

routes.post('/users', userController.createUser);
routes.get('/list', userController.getMany);
routes.delete('/users/:id', userController.delete);

routes.post('/users/:user_id/addresses', addressController.create);
routes.get('/list_address', addressController.getMany);

module.exports = routes;