const express = require('express');

const routes = express.Router();

const fazendaController = require('../controllers/fazendaController');

routes.get('/fazenda', fazendaController.mostra);
routes.post('/fazenda', fazendaController.store);
routes.delete('/fazenda/:id', fazendaController.delete);


routes.post('/total/:id', fazendaController.total);


module.exports = routes;



