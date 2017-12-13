var studentModel =  require("./student-model.js");

exports.interceptIds = function(req, res, next, id) {
	//var id = req.params.id;
	studentModel.findById(id, function(err, data) {
		if(err){
			return next(new Error("...."))
		}
		req.student = data;

		next();
	})
}

exports.addStudent =  function(req, res, next) {
	var student = req.body;

	var pupil = new studentModel(student)
	pupil.save(function(err, data) {
		if(err) {
			return next(new new Error("Cannot add Student"))
		}

		res.status(200).json(data)
	})
}

exports.getStudents = function(req, res, next) {
	studentModel.find(function(err, data){
		if(err) {
			return next(new new Error("could not get students"))
		}

		res.status(200).json(data);
	})
}

exports.getStudent =  function(req, res, next) {
	if(!req.student) {
		return next(new new Error("could not find student"))
	}
	res.status(200).json(req.student);
}

exports.deleteStudent = function(req, res, next) {
	studentModel.remove({_id: req.student_id}, (err, res) => {
		if(err) {
			return next(new Error("Student could not be deleted"))
		}

	})

	res.status(200).json(req.student);
}

exports.updateStudent =  function(req, res, next) {
	studentModel.update({_id: req.student._id}, req.body, (err, res) => {
		if (err) {
			return next(new new Error("could not update student"))
		}
	})

	res.status(200).json(req.student);
}