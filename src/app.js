const path				= require("path");
const express			= require("express");
const morgan			= require("morgan");
const mongoose			= require("mongoose");
const postRouter 		= require("./routes/post_router");
const commentRouter		= require("./routes/comment_router");
const templateRouter	= require("./routes/template_router");
const port				= 3000;
const app				= express();

function setup_mongoose(m) {
	m.connection.on("open", () => console.log("Connected"));
	m.connection.on("close", () => console.log("Disconnected"));
	m.connection.on("error", (e) => console.log(`Error:${e}`));
	return (m.connect(require("process").env["DB_CONN"], {
		autoIndex: false,
		maxPoolSize: 10,
		serverSelectionTimeoutMS: 5000,
		socketTimeoutMS: 30000,
		family: 4
	}));
}

setup_mongoose(mongoose);
app.set("views", path.join(path.resolve("./"), "templates"));
app.set("view engine", "ejs");
app.use(morgan("combined", {skip: (_, res) => (res.statusCode < 400)}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set(express.static(path.join(path.resolve("./"), "public")));
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);
app.use("", templateRouter);
/* eslint-disable */
app.use((req, res, next) => next(createError(404)));
/* eslint-enable */
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	res.status(err.status || 500);
	res.render("error");
	next();
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = app;
