var express = require("express"),
	app 	= express(),
	bps		= require("body-parser"),
	morgan	= require("morgan"),
	api		= require("../api/api.js");

app.use(bps.json())
app.use(bps.urlencoded({estended: true}))

app.use(morgan("dev"))

app.use("/api/v1", api);

app.use(function(err, req, res, next){
	res.status(500).json(err.message)
	next()
})

module.exports = app;