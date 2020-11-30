const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const depoimentos_controller = require('../controllers/depoimentosController');
const servicos_controller = require('../controllers/servicosController');
const sobreNos_controller = require('../controllers/sobreNosController');
const valores_controller = require('../controllers/valoresController');
const banner_controller = require('../controllers/bannerController');
const footer_controller = require('../controllers/footerController');

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
  app.get('/api/footer', footer_controller.getData);

  app.get('*', (req, res) => {
		res.redirect('/');
  });
  
};