const express = require(`express`);
const routes = express.Router();
const controllerXmen = require(`../controllers/x-men.controller`);

routes.get(`/xmen/todos-xmen`, controllerXmen.findControllerAllXmen);
routes.get(`/xmen/:id`, controllerXmen.findControllerIdXmen);
routes.post(`/xmen/create`, controllerXmen.createControllerXmen);
routes.put(`/xmen/update/:id`, controllerXmen.updateControllerXmen);
routes.delete(`/xmen/delete/:id`, controllerXmen.deleteControllerXmen);

module.exports = routes;
