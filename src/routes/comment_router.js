const express = require("express");
const Router = express.Router({"caseSensitive" : true, "strict" : true});
const {listComment, createComment, updateComment, deleteComment} = require("./services/comment_service");

Router.route("/cr/:post_id/").get(listComment).post(createComment);
Router.route("/ud/:comment_id/").post(updateComment).delete(deleteComment);
module.exports = Router;

