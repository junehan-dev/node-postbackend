const mongoose = require("mongoose");
const create_schema = new mongoose.Schema(
	{
		author: { type: String, required: true },
		title: { type: String, required: true },
		content: { type: String, required: true },
		created: { type: Date, default: Date.now, unique: true}
	},
	{
		collection: "posts"
	}
);
	
const list_schema = new mongoose.Schema(
	{
	},
	{
		collection: "posts"
	}
);

const create_model = mongoose.model("POST_WRITE", create_schema);
const list_model = mongoose.model("POST_READ", list_schema);

module.exports.ListModel = list_model;
module.exports.CreateModel = create_model;
