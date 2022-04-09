const {createComment, listComment, updateComment, deleteComment} = require("./services/comment");

function create(req, res, next) {
	const prom = createComment(req.body);
	return response(prom, res, next);
}

function list(req, res, next) {
	const prom = listComment();
	return response(prom, res, next);
}

function update(req, res, next) {
	const prom = updateComment(req.params["comment_id"], req.body);
	return response(prom, res, next);
}

function remove(req, res, next) {
	const prom = deleteComment(req.params["comment_id"]);
	return response(prom, res, next);
}

function response(prom, res, next) {
	prom.then((data) => {
		return res.json(data);
	}).catch((err) => {
		return next(err);
	});
}

module.exports.list_view = list;
module.exports.create_view = create;
module.exports.update_view = update;
module.exports.delete_view = remove;

