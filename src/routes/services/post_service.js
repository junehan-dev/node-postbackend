const { PostModel } = require("./models/post_model");
const { CommentModel } = require("./models/comment_model");

function createPost(req, res) {
	const model = new PostModel(req.body);
	const prom = model.save();
	prom.then((data) => {
		res.json(data);
	}).catch(() => {
		res.status(404).end();
	});
}

function listPost(req, res) {
	const model = PostModel;
	const query = model.find().select(["author", "title", "created"]).sort({created: "desc"});
	query.exec((err, data) => {
		(err) ?  res.status(404).end() : res.json(data);
	});
}

function detailPost(req, res) {
	const model = PostModel;
	const query = model.findById(req.params["postId"]).select(["author", "title", "created", "content"]);
	query.exec((err, data) => {
		console.log(data);
		(err) ?	res.status(404).end() : res.json(data);
	});
}

function updatePost(req, res) {
	const model = PostModel;
	const query = model.findByIdAndUpdate(req.params["postId"], req.body);
	query.exec((err, data) => {
		(err) ? res.status(404).end() : res.json(data);
	});
}

function deletePost(req, res) {
	const model = PostModel;
	const query = model.findByIdAndRemove(req.params["postId"]);
	
	query.exec((err, data) => {
		if (err) {
			res.status(404).end();
		} else {
			if (data === null) {
				res.status(204).end();
			} else {
				CommentModel.deleteMany({"post_id": req.params["postId"]}).then(() => res.status(200).end());
			}
		}
	});
}

module.exports.listPost = listPost;
module.exports.createPost = createPost;
module.exports.detailPost = detailPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;

