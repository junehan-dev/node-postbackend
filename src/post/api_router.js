const express = require("express");
const apiRouter = express.Router({"caseSensitive" : true, "strict" : true});
const create = require("./services/create");

apiRouter.route("/").get(create).post(create);
module.exports = apiRouter;
