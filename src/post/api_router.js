const express = require("express");
const apiRouter = express.Router({"caseSensitive" : true, "strict" : true});
const createPostView = require("./services/create");
const listPostView = require("./services/list");

apiRouter.route("/").get(listPostView).post(createPostView);
module.exports = apiRouter;

