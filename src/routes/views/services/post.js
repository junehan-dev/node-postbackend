const { PostModel } = require("./models/post_model");

async function createPost(data) {
	const model = new PostModel(data);
	const ret = await model.save();
	return (ret);
}

async function listPost() {
	const model = PostModel;
	const query = model.find().select(["author", "title", "created"]).sort({created: "desc"});
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ?  reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function detailPost(post_id) {
	const model = PostModel;
	const query = model.findById(post_id).select(["author", "title", "created", "content"]);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function updatePost(post_id, data) {
	const model = PostModel;
	for (let key in data) {
		if (!data[key])
			delete(data[key]);
	}
	const query = model.findByIdAndUpdate(post_id, data);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

async function deletePost(post_id) {
	const model = PostModel;
	const query = model.findByIdAndRemove(post_id);
	const prom = new Promise((resolve, reject) => {
		query.exec((err, data) => {
			(err || !data) ? reject(err) : resolve(data);
		});
	});
	const ret = await prom;
	return (ret);
}

module.exports.listPost = listPost;
module.exports.createPost = createPost;
module.exports.detailPost = detailPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;

