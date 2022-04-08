function createPostView(req, res) {
	const db = require("./db");
	db.then((conn) => {
		const created = createPostSchema(conn, req, res);
		created.then((post) => {
			res.json({"created": true, "data" : post});
		}).catch((err) => {
			logError(err, res);
		});
	}).catch((err) => {
		logError(err, res);
	});
}

function createPostSchema(db, req, res) {
	const assert = require("assert");
	const createSchema = require("./schemas/create")(db);
	try {
		assert(req.body["author"]);
		assert(req.body["title"]); assert(req.body["content"]);
		const Post = db.model("posts", createSchema);
		return ((new Post(req.body)).save());
	} catch (error) {
		logError(error, res);
	}
}

function logError(err, res) {
	res.status(404).end();
}

module.exports = createPostView;
