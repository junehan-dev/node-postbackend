function query_response(res, err, data) {
	if (err) {
		return res.status(404).end();
	} else {
		return ((data) ? res.json(data) : res.status(204).end());
	}
}

function content_validate(req, res, keys) {
	for (let k of keys) {
		if (!req.body[`${k}`])
			return res.status(400).send(`${k} post data not valid`);
	}
}

module.exports.query_response = query_response;
module.exports.content_validate = content_validate;

