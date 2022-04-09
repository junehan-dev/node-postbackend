const {listPost, detailPost} = require("./services/post");

async function list(req, res) {
	const ret = await listPost().then((d) => render(res, "index", undefined, d));
	return (ret);
}
async function detail(req, res) {
	const ret = await detailPost(req.params["post_id"]).then((d) => render(res, "detail", d, undefined));
	return (ret);
}

function render(res, template_name, object, objects) {
	const options		= {};
	options["object"]	= object ? object : undefined;
	options["objects"]	= objects ? objects: undefined;
	console.log(options);

	return res.render(template_name, options);
}

module.exports.list_view = list;
module.exports.detail_view = detail;

