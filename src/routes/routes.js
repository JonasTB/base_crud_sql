const routes = require('express').Router();
const userController = require('../controller/User');
const addressController = require('../controller/Address');

//user routes
routes.post('/users', userController.createUser);
routes.get('/list', userController.getMany);
routes.get('/users/:id', userController.getOne);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

// address routes
routes.post('/users/:id/addresses', addressController.create);
routes.get('/list_address', addressController.getMany);
routes.get('/users/:id/addresses', addressController.getOne);
routes.delete('/users/:id/addresses', addressController.delete);

module.exports = routes;