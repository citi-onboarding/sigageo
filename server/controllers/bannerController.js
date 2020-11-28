const keystone = require('keystone');
const Banner = keystone.list('Banner');

const handler = {
    getData: function (req, res) {
        Banner.model.find((err, data) => {
          if (err) {
            res.status(500).send('DB Error');
          } else {
            res.send(data);
          }
        });
    }
};

module.exports = handler;