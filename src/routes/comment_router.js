const express		= require("express");
const Router		= express.Router({"caseSensitive" : true, "strict" : true});
const {list_view
	,create_view
	,update_view
	,delete_view}	= require("./views/comment");

Router.post("/", create_view);
Router.get("/:post_id/", list_view);
Router.post("/:comment_id/", update_view);
Router.delete("/:comment_id/", delete_view);

module.exports = Router;

