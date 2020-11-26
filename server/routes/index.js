const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const Depoimentos = keystone.list('Depoimentos');
const SobreNos = keystone.list('SobreNos');
const Valores = keystone.list('Valores');

module.exports = (app) => {
  app.use(cors());

  app.get('/api/depoimentos', (req, res) => {
    Depoimentos.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', (req, res) => {
    Post.model.find((err, data) => {
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
        res.status(500).send(('Erro no Servidor'));
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/valores', (req, res) => {
    Valores.model.find((err, data) => {
      if (err) {
        res.status(500).send(('Erro no Servidor'));
      } else {
        res.send(data);
      }
    });
  });

  app.get('*', (req, res) => {
		res.redirect('/');
  });
  
 
};