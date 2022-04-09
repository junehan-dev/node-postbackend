const {createPost, listPost, updatePost, deletePost} = require("./services/post");

function create(req, res, next) {
	const prom = createPost(req.body);
	return response(prom, res, next);
}

function list(req, res, next) {
	const prom = listPost();
	return response(prom, res, next);
}

function update(req, res, next) {
	const prom = updatePost(req.params["post_id"], req.body);
	return response(prom, res, next);
}

function remove(req, res, next) {
	const prom = deletePost(req.params["post_id"]);
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

