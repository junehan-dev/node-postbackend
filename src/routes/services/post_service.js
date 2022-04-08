const { CreateModel, ListModel } = require("./models/post_model");

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
	const query = model.find().sort({created: "desc"}).limit(10);
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

module.exports.listPost = listPost;
module.exports.createPost = createPost;
