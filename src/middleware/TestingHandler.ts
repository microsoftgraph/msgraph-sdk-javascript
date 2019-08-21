/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TestingHandler
 */

import { Context } from "../IContext";
import { RequestMethod } from "../RequestMethod";

import { Middleware } from "./IMiddleware";
import { MiddlewareControl } from "./MiddlewareControl";
import { cloneRequestWithNewUrl, setRequestHeader } from "./MiddlewareUtil";
//import { RedirectHandlerOptions } from "./options/RedirectHandlerOptions";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";

export class TestingHandler implements Middleware {
	/*    private options: TestingHandlerOptions;

    public constructor(options: TestingHandlerOptions = new TestingHandlerOptions()) {
		this.options = options;
    }
    
*/
	private responseMap: Map<string, Map<string, string>> = new Map([
		[
			"2xx",
			[
				[
					"responseHeader",
					`{
                "Cache-Control" : "private",
                "Transfer-Encoding" : "chunked",
                "Content-Type" : "application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8",
                "Content-Encoding" : "gzip",
                "Vary" : "Accept-Encoding",
                "request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "client-request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "x-ms-ags-diagnostic" : "{"ServerInfo":{"DataCenter":"South India","Slice":"SliceC","Ring":"4","ScaleUnit":"000","RoleInstance":"AGSFE_IN_0","ADSiteName":"INS"}}",
                "OData-Version" : 4.0,
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "max-age=31536000",
                "Date" : "Tue, 20 Aug 2019 09:08:47 GMT"
            }`,
				],

				["responseBody", ""],
			],
		],

		[
			"3xx",
			[
				[
					"responseHeader",
					`{
                "Cache-Control" : "private",
                "Transfer-Encoding" : "chunked",
                "Content-Type" : "application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8",
                "Content-Encoding" : "gzip",
                "Vary" : "Accept-Encoding",
                "request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "client-request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "x-ms-ags-diagnostic" : "{"ServerInfo":{"DataCenter":"South India","Slice":"SliceC","Ring":"4","ScaleUnit":"000","RoleInstance":"AGSFE_IN_0","ADSiteName":"INS"}}",
                "OData-Version" : 4.0,
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "max-age=31536000",
                "Date" : "Tue, 20 Aug 2019 09:08:47 GMT"
            }`,
				],

				["responseBody", ""],
			],
		],

		[
			"4xx",
			[
				[
					"responseHeader",
					`{
                "Cache-Control" : "private",
                "Transfer-Encoding" : "chunked",
                "Content-Type" : "application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8",
                "request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "client-request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "x-ms-ags-diagnostic" : "{"ServerInfo":{"DataCenter":"South India","Slice":"SliceC","Ring":"4","ScaleUnit":"000","RoleInstance":"AGSFE_IN_0","ADSiteName":"INS"}}",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "max-age=31536000",
                "Date" : "Tue, 20 Aug 2019 09:08:47 GMT"
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
			],
		],

		[
			"429",
			[
				[
					"responseHeader",
					`{
                "Cache-Control" : "private",
                "Transfer-Encoding" : "chunked",
                "Content-Type" : "application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8",
                "request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "client-request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "x-ms-ags-diagnostic" : "{"ServerInfo":{"DataCenter":"South India","Slice":"SliceC","Ring":"4","ScaleUnit":"000","RoleInstance":"AGSFE_IN_0","ADSiteName":"INS"}}",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "max-age=31536000",
                "timeOut" : 300
                "Date" : "Tue, 20 Aug 2019 09:08:47 GMT"
            }`,
				],

				[
					"responseBody",
					`{
                "error": {
                    "code": "",
                    "message": "Some Error happened",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
				],
			],
		],

		[
			"5xx",
			[
				[
					"responseHeader",
					`{
                "Cache-Control" : "private",
                "Transfer-Encoding" : "chunked",
                "Content-Type" : "application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8",
                "request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "client-request-id" : "8f98c2b2-7454-4894-8833-f6dff52a4b56",
                "x-ms-ags-diagnostic" : "{"ServerInfo":{"DataCenter":"South India","Slice":"SliceC","Ring":"4","ScaleUnit":"000","RoleInstance":"AGSFE_IN_0","ADSiteName":"INS"}}",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "max-age=31536000",
                "Date" : "Tue, 20 Aug 2019 09:08:47 GMT"
            }`,
				],

				[
					"responseBody",
					`{
                "error": {
                    "code": "",
                    "message": "Some Error happened",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
				],
			],
		],
	]);

	private async createResponse(): Promise<any> {
		try {
			let responseBody = "Test Response";
			let header = `content-type: application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false;charset=utf-8
                        cache-control: private
                        client-request-id: b1ee53b1-793d-4a98-a057-ce7f3a5437e9
                        request-id: b1ee53b1-793d-4a98-a057-ce7f3a5437e9`;

			let init = { status: 200, statusText: "ok", header: header };
			let response = new Response(responseBody, init);

			return response;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		try {
			//write the things to be executed in testing Handler
			//Have to create a map for the purpose of Headers and body
			context.response = await this.createResponse();
			return;
		} catch (error) {
			throw error;
		}
	}
}
