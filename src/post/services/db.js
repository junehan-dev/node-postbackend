function createConnection() {
	const mongoose = require("mongoose");
 	return (mongoose.connect(process.env["DB_CONN"]));
}

const conn = createConnection();


module.exports = conn
