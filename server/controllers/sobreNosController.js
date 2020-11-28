const keystone = require('keystone');
const SobreNos = keystone.list('SobreNos');

const handler = {
    getData: function (req, res) {
        SobreNos.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;