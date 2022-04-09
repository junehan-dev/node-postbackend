const { CommentModel } = require("./models/comment_model");

async function createComment(data) {
	const model = new CommentModel(data);
	const ret = await model.save();
	return (ret);
}

async function listComment() {
	const model = CommentModel;
	const query = model.find().select(["content", "_id"]).sort({created: "desc"});
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ?  reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function detailComment(req) {
	const model = CommentModel;
	const query = model.findBy_id(req.params["comment_id"]);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			console.log(data);
			(err || !data) ? reject(err) : resolve(data);
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
			console.log(data);
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function deleteComment(req) {
	const model = CommentModel;
	const query = model.findByIdAndRemove(req.params["comment_id"]);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			console.log(data);
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

module.exports.listComment = listComment;
module.exports.createComment = createComment;
module.exports.detailComment = detailComment;
module.exports.updateComment = updateComment;
module.exports.deleteComment = deleteComment;

