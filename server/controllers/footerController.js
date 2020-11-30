const keystone = require('keystone');
const Footer = keystone.list('Footer');

const handler = {
    getData: function (req, res) {
        Footer.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;