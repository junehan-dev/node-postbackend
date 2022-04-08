function createPost(req, res) {
	console.log(req.body);
	console.log(req.params);
	res.json({"created": true});
}

module.exports = createPost;
