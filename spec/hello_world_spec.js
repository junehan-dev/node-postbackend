const request = require("request");
const base_url = "http://127.0.0.1:3000/api/post/"

describe("hello world server", () => {
	describe("GET /", () => {
		it("return status code 200", () => {
			request.get(base_url, (err, res, body) => {
				expect(response.statusCode).toEqual(200);
				done();
			});
		});

		it("return status code 200", () => {
			request.get(base_url, (err, res, body) => {
				expect(body).toEqual(null);
				done();
			});
		});

	});
	
});

