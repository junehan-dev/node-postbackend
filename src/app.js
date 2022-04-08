const express	= require("express");
const app		= express();
const port		= 3000;
const post_router = require("./post/api_router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/post", post_router);
app.get("/", (req, res) => {
	res.send("hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
