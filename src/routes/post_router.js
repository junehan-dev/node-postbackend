const express = require("express");
const Router = express.Router({"caseSensitive" : true, "strict" : true});
const {listPost, createPost, detailPost, updatePost, deletePost} = require("./services/post_service");

Router.route("/").get(listPost).post(createPost);
Router.route("/:postId/").get(detailPost).post(updatePost).delete(deletePost);

module.exports = Router;

