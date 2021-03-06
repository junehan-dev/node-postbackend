const {createComment, listComment, updateComment, deleteComment} = require("./services/comment");

async function create(req, res, next) {
	if (!req.body["content"])
		return res.status(400).send("댓글 내용을 입력해주세요.");
	const prom = createComment(req.body);
	return response(prom, res, next);
}

function list(req, res, next) {
	const prom = listComment(req.params["post_id"]);
	prom.catch((err) => next(err));
	return response(prom, res, next);
}

function update(req, res, next) {
	if (!req.body["content"])
		return res.status(400).send("댓글 내용을 입력해주세요.");
	const prom = updateComment(req.params["comment_id"], req.body);
	prom.catch((err) => next(err));
	return response(prom, res, next);
}

function remove(req, res, next) {
	const prom = deleteComment(req.params["comment_id"]);
	prom.catch((err) => next(err));
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

