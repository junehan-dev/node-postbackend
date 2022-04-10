const {createComment, listComment, updateComment, deleteComment} = require("./services/comment");
const {detailPost} = require("./services/post");

async function create(req, res, next) {
	if (!req.body["content"])
		return res.send("댓글 내용을 입력해주세요.");
	let prom = await detailPost(req.body["post_id"]);
	if (!prom["_id"] || prom["_id"].toString() !== req.body["post_id"])
		return res.status(400).end();
	prom = createComment(req.body);
	return response(prom, res, next);
}

function list(req, res, next) {
	console.log("HI");
	const prom = listComment(req.params["post_id"]);
	return response(prom, res, next);
}

function update(req, res, next) {
	if (!req.body["content"])
		return res.send("댓글 내용을 입력해주세요.");
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

