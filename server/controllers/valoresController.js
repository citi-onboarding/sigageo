const keystone = require('keystone');
const Valores = keystone.list('Valores');

const handler = {
    getData: function (req, res) {
        Valores.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;