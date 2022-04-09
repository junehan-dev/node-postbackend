const { CreateModel, ListModel, UpdateModel } = require("./models/post_model");

console.log("SEE This message at first time.");

function createPost(req, res) {
	const model = new CreateModel(req.body);
	const prom = model.save();
	prom.then((data) => {
		console.log(data);
		res.json(data);
	}).catch((err) => {
		console.log(err);
		res.status(404).end();
	});
}

function listPost(req, res) {
	const model = ListModel;
	const query = model.find().select(["author", "title", "created"]).sort({created: "desc"}).limit(10);
	query.exec((err, data) => {
		if (err) {
			console.log(err);
			res.status(404).end();
		} else {
			console.log(data);
			res.json(data);
		}
	});
}

function detailPost(req, res) {
	const model = ListModel;
	const query = model.findById(req.params["postId"]).select(["author", "title", "created", "content"]);
	query.exec((err, data) => {
		if (err) {
			console.log(err);
			res.status(404).end();
		} else {
			console.log(data);
			res.json(data);
		}
	});
}

function updatePost(req, res) {
	console.log(req.body);
	const model = UpdateModel;
	const query = model.findByIdAndUpdate(req.params["postId"], req.body);
	query.exec((err, data) => {
		if (err) {
			console.log(err);
			res.status(404).end();
		} else {
			console.log(data);
			res.json(data);
		}
	});
}

function deletePost(req, res) {
	console.log(req);
	const model = ListModel;
	const query = model.findByIdAndRemove(req.params["postId"]);
	query.exec((err, data) => {
		if (err) {
			console.log(err);
			res.status(404).end();
		} else {
			console.log(data);
			(data === null) ? res.status(204).end() : res.status(200).end();
		}
	});
}

module.exports.listPost = listPost;
module.exports.createPost = createPost;
module.exports.detailPost = detailPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;

