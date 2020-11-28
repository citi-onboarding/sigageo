const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Depoimentos = keystone.list('Depoimentos');
const Servicos = keystone.list('Servicos');
const SobreNos = keystone.list('SobreNos');
const Valores = keystone.list('Valores');
const Banner = keystone.list('Banner');
const Footer = keystone.list('Footer');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/depoimentos', (req, res) => {
    Depoimentos.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/servicos', (req, res) => {
    Servicos.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/banner', (req, res) => {
    Banner.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });
  
  app.get('/api/sobrenos', (req, res) => {
    SobreNos.model.find((err, data) => {
      if (err) {
        res.status(500).send(('DB Error'));
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/valores', (req, res) => {
    Valores.model.find((err, data) => {
      if (err) {
        res.status(500).send(('DB Error'));
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/footer', (req, res) => {
    Footer.model.find((err, data) => {
      if (err) {
        res.status(500).send(('DB Error'));
      } else {
        res.send(data);
      }
    });
  });

  app.get('*', (req, res) => {
		res.redirect('/');
  });
  
};