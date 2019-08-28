export const methodStatusCode = {
	GET: [200, 301, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
	POST: [200, 201, 204, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
	PUT: [200, 201, 400, 401, 403, 404, 405, 409, 429, 500, 502, 503, 504, 507],
	PATCH: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
	DELETE: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
};

export const responseMap: Map<string, Map<string, string>> = new Map([
	[
		"2xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "Content-Encoding" : "",
                "Vary" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "OData-Version" : 4.0,
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
                }`,
			],
			["responseBody", "{}"],
		]),
	],
	[
		"3xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "Content-Encoding" : "",
                "Vary" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "OData-Version" : 4.0,
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
                }`,
			],

			["responseBody", "{}"],
		]),
	],
	[
		"4xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
            }`,
			],

			[
				"responseBody",
				`{
                "error": {
                    "code": "BadRequest",
                    "message": "",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
			],
		]),
	],
	[
		"429",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "timeout": 300,
                "Date" : ""
            }`,
			],

			[
				"responseBody",
				`{
                "error": {
                    "code": "BadRequest",
                    "message": "",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
			],
		]),
	],
	[
		"5xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
            }`,
			],

			[
				"responseBody",
				`{
                "error": {
                    "code": "BadRequest",
                    "message": "",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
			],
		]),
	],
]);
