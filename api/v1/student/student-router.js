var express =  require("express"),
	router = express.Router(),
	controller = require("./student-controller.js");

	router.param("id", controller.interceptIds)

	router.route("/")
		.post(controller.addStudent)
		.get(controller.getStudents)

	router.route("/:id")
		.get(controller.getStudent)
		.delete(controller.deleteStudent)
		.put(controller.updateStudent)


module.exports = router;