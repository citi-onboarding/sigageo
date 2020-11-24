const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'sigaGeo',
		email: 'sigageodev@gmail.com',
		password: 'SigageoAlysson',
		canAccessKeystone: true,
	}).save(done);
};
