const path = require('path');
const cors = require('cors');

const depoimentos_controller = require('../controllers/depoimentosController');
const servicos_controller = require('../controllers/servicosController');
const sobreNos_controller = require('../controllers/sobreNosController');
const valores_controller = require('../controllers/valoresController');
const banner_controller = require('../controllers/bannerController');
const contatos_controller = require('../controllers/contatosController');

const mail_controller = require('../controllers/mailController');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/depoimentos', depoimentos_controller.getData);
  app.get('/api/servicos', servicos_controller.getData);
  app.get('/api/sobrenos', sobreNos_controller.getData);
  app.get('/api/valores', valores_controller.getData);
  app.get('/api/banner', banner_controller.getData);
  app.get('/api/contatos', contatos_controller.getData);

  app.post('/send', mail_controller) 

  app.get('*', (req, res) => {
		res.redirect('/');
  });
  
};
