const keystone = require('keystone');
const Servicos = keystone.list('Servicos');

const handler = {
    getData: function (req, res) {
        Servicos.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;