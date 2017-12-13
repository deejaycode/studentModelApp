var jwt = require("jsonwebtoken"),
	userModel = require("../user/user-model.js");



exports.verifyUser = function(req, res, next){

	var username = req.body.username,
		password = req.body.password;

	if(!username || !password){
		return next(new Error("please enter your username and password"))
	}

	userModel.findOne({username: username}, function(err, data){

		if(err) {
			return next(new Error("cannot find user"))
		}

		if(!data.authenticate(password)) {
			return next(new Error("invalid username and/or password"))
		}

		req.user = data;
		next();

	})
}


exports.signToken = function(id) {

	return jwt.sign(

		{_id: id},
		"jsonToken",
		{expiresIn: 60 * 60 * 24 * 7}

	);

}