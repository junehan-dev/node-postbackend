const { CommentModel } = require("./models/comment_model");

async function createComment(data) {
	const model = new CommentModel(data);
	const ret = await model.save();
	return (ret);
}

async function listComment(post_id) {
	const model = CommentModel;
	const query = model.find({"post_id": post_id}).select(["content", "_id", "created"]).sort({created: "desc"});
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ?  reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function updateComment(comment_id, data) {
	const model = CommentModel;
	const query = model.findByIdAndUpdate(comment_id, data);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function deleteComment(comment_id) {
	const model = CommentModel;
	const query = model.findByIdAndRemove(comment_id);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

module.exports.listComment = listComment;
module.exports.createComment = createComment;
module.exports.updateComment = updateComment;
module.exports.deleteComment = deleteComment;

