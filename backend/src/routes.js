const express = require('express'); 

const OngController = require('./controllers/OngController');
const casoController = require('./controllers/casoController');
const perfilController = require('./controllers/perfilController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/casos', casoController.create);
routes.get('/casos', casoController.list);
routes.delete('/casos/:id', casoController.delete);

routes.get('/perfil', perfilController.index);

module.exports = routes;

