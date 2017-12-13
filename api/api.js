var express = require("express"),
	api 	= express.Router(),
	studentRouter = require("./v1/student/student-router.js");
	userRouter = require("./v1/user/user-router.js");


api.use("/students", studentRouter)
api.use("/users", userRouter)


module.exports = api;