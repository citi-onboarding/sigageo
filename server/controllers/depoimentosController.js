const keystone = require('keystone');
const Depoimentos = keystone.list('Depoimentos');

const handler = {
    getData: function (req, res) {
        Depoimentos.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;