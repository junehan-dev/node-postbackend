const mongoose = require("mongoose");
const schema = new mongoose.Schema(
	{
		content:	{ type: String, required: true },
		created:	{ type: Date, default: Date.now, unique: true},
		post_id:	{ type: mongoose.ObjectId, required: true, ref:"POST"},
	},
	{
		collection:	"comments",
	}
);

const model = mongoose.model("COMMENT", schema);

module.exports.CommentModel = model;
