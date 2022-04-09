const express		= require("express");
const Router		= express.Router({"caseSensitive" : true, "strict" : true});
const {list_view, detail_view}	= require("./views/template");

Router.get("/", list_view);
Router.get("/:post_id/", detail_view);

module.exports = Router;

