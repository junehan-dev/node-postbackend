const express = require("express");
const Router = express.Router({"caseSensitive" : true, "strict" : true});
const {listPost, createPost, detailPost} = require("./services/post_service");

Router.route("/").get(listPost).post(createPost);
Router.route("/:postId/").get(detailPost);

module.exports = Router;

