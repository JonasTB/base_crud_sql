const routes = require('express').Router();
const controller = require('./controller/User');

routes.get('/', (req, res) => {
    return res.json({ hello: "Tamo on" });
});

routes.post('/users', controller.createUser);
routes.get('/list', controller.listUsers);

module.exports = routes;