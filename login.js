
var path = require('path');
var Sequelize = require('sequelize');
//var User = require('./UserModel');

exports.login = function(req,res){
	
		res.sendFile(path.join(__dirname + '/login.html'));
}

exports.authenticate = function(req, res) {
	//console.log(User);
	var Sequelize = require('sequelize');

	var options = {
		host: 'localhost',
		dialect: 'mysql',
		logging : true
	};

	// Db connection initiate
	var sequelize =  new Sequelize('test', 'root', '', options);

	//Model for user table
	var User = sequelize.define('users',
			{
				user_id: {
					type: Sequelize.BIGINT,
					primaryKey: true,
					autoIncrement: true
				},

				user_name: {
					type: Sequelize.STRING(),
					allowNull: false,
				},
				password: {
					type: Sequelize.STRING(),
					allowNull: false,
				},
			},
			{
				timestamps: false
			});
			
	User.findAll({
		where: { user_name: req.query.user, password: req.query.pwd}
		}).then(function (user) {
			console.log("RESPONSE ::"+JSON.stringify(user));
			if (user.length == 0) {	
				console.log('User Not Found error in authorize function for username: ');
				res.status(200).send('Username and password combination is wrong');
			}
			else {
				console.log("Sending Success response of authorize function");
				res.status(200).send('You are authorize to use access this application');
			}
	}).catch(function (error) {
		console.log('Error in authorize function for username: '+error);
		res.status(200).send('Database Error');
		//callback(error, null);
	})
	
}