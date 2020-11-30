const keystone = require('keystone');
const Contatos = keystone.list('Contatos');

const handler = {
    getData: function (req, res) {
        Contatos.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;