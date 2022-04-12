const mongoose = require("mongoose");
const create_schema = new mongoose.Schema(
	{
		author: { type: String, required: true },
		title: { type: String, required: true },
		content: { type: String, required: true },
		created: { type: Date, default: Date.now, unique: true},
		comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "COMMENT"}]
	},
	{
		collection: "posts"
	}
);

const post_model = mongoose.model("POST", create_schema);

module.exports.PostModel = post_model;
