const express = require("express");
const Router = express.Router({"caseSensitive" : true, "strict" : true});
const {listPost, createPost} = require("./services/post_service");

Router.route("/").get(listPost).post(createPost);

module.exports = Router;

