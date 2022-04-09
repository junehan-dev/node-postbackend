const express		= require("express");
const Router		= express.Router({"caseSensitive" : true, "strict" : true});
const {list_view
	,create_view
	,update_view
	,delete_view}	= require("./views/post");

Router.get("/", list_view);
Router.post("/", create_view);
Router.post("/:post_id/", update_view);
Router.delete("/:post_id/", delete_view);

module.exports = Router;

