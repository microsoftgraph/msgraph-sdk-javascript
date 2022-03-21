/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { Client } from "../Client";
import { GraphRequest } from "../GraphRequest";
import { ClientOptions } from "../IClientOptions";
import { GraphSDKConfig } from "./GraphSDKConfig";

/**
* @public
* Base class for all Graph Service Client classes.
* Extending the client.init and client.api methods.
*/
export class GraphBaseClient extends Client {
    protected constructor(clientOptions: ClientOptions, graphSDK?: GraphSDKConfig) {
        super(clientOptions, graphSDK);
    }

    /**
     * @public
     * @static
     * To create a client instance with options and initializes the middleware chain
     * @param {ClientOptions} options - The options for client instance
     * @returns The Client instance
     */
    public static init<T extends GraphBaseClient>(this: new (clientOptions: ClientOptions) => T, clientOptions: ClientOptions) {
        const childClass = new this(clientOptions);
        return childClass;
    }

    /**
	 * @public
	 * api accepting the Graph url to make the request to.
	 * @param {string} path - The path string value
	 * @returns The graph request instance
	 */
    public api(path: string): GraphRequest {
        return super.api(path);
    }
}
