const { CommentModel } = require("./models/comment_model");
const { PostModel } = require("./models/post_model");
const { query_response, content_validate } = require("./utils");

function createComment(req, res, next) {
	content_validate(req, res, ["content"]);
	const pre_query = PostModel.findById(req.params["post_id"]);
	pre_query.exec((err, data) => {
		if (err) {
			res.status(404).end();
		} else if (data) {
			req.body["post_id"] = req.params["post_id"];
			const model = new CommentModel(req.body);
			const prom = model.save();
			prom.then((data) => { res.json(data); }).catch(() => { res.status(404).end(); });
		} else  {
			return next(new Error("POST NOT FOUND"));
		}
	});
}

function listComment(req, res) {
	const model = CommentModel;
	const query = model.find({"post_id" : req.params["post_id"]}).select(["content", "created"]).sort({created: "desc"});
	query.exec((err, data) => {
		(err) ?  res.status(404).end() : res.json(data);
	});
}

function updateComment(req, res) {
	content_validate(req, res, ["content"]);
	const model = CommentModel;
	const query = model.findByIdAndUpdate(req.params["comment_id"], req.body);
	query.exec((err, data) => {query_response(res, err, data);});
}

function deleteComment(req, res) {
	const model = CommentModel;
	const query = model.findByIdAndRemove(req.params["comment_id"]);
	query.exec((err, data) => {query_response(res, err, data);});
}

module.exports.listComment = listComment;
module.exports.createComment = createComment;
module.exports.updateComment = updateComment;
module.exports.deleteComment = deleteComment;

