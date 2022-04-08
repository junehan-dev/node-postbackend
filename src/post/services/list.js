function listPostView(req, res) {
	const db = require("./db");
	db.then((conn) => {
		const postlist = listPostSchema(conn);
		postlist.exec((err, posts) => {
			if (err) {
				logError(err, res);
			} else {
				res.json(posts);
			}
		})
	}).catch((err) => {
		logError(err, res);
	});
}

function listPostSchema(db) {
	const listSchema = require("./schemas/create")(db);
	const Post = db.model("posts", listSchema);
	const query = Post.find().sort({date: 'desc'}).limit(3);
	return (query);
}

function logError(err, res) {
	res.status(404).end();
}

module.exports = listPostView;
