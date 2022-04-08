const express		= require("express");
const app			= express();
const port			= 3000;
const createError 	= require('http-errors');
const logger		= require('morgan');
const postRouter 	= require("./routes/post_router");
const mongoose		= require("mongoose");


function setup_mongoose(mongoose) {
	mongoose.connection.on("open", () => console.log("Connected"));
	mongoose.connection.on("close", () => console.log("Disconnected"));
	mongoose.connection.on("error", (e) => console.log(`Error:${e}`));
	return (mongoose.connect(process.env["DB_CONN"], {
		autoIndex: false,
		maxPoolSize: 10,
		serverSelectionTimeoutMS: 5000,
		socketTimeoutMS: 30000,
		family: 4
	}));
}

setup_mongoose(mongoose);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
console.log("APPSETUP");


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use("/api/post", postRouter);

app.get("/", (req, res) => {
	res.send("HO!");
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});


