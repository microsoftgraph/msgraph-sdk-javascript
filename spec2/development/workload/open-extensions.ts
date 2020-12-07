/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { OpenTypeExtension } from "microsoft-graph";

import { getClient, randomString } from "../test-helper";

const client = getClient();

interface ColorOpenExtension extends OpenTypeExtension {
	color: string;
}

let extension: ColorOpenExtension = {
	extensionName: `com.javascript.extension-${randomString()}`,
	color: randomString(),
};

describe("Open Extensions", function() {
	this.timeout(10 * 1000);

	it("Use open extensions to add a field to users", async () => {
		try {
			const response = await client.api("/me/extensions").post(extension);
			const createdExtension = response as ColorOpenExtension;
			assert.isDefined(createdExtension.id);
			assert.equal(createdExtension.color, extension.color);
			assert.equal(createdExtension.extensionName, extension.extensionName);
			assert.isUndefined(createdExtension["random fake property that should be null"]);
			// save this createdExtension for later tests (id)
			extension = createdExtension;
		} catch (error) {
			throw error;
		}
	});

	it("Deletes the created open extension", async () => {
		try {
			await client.api(`/me/extensions/${extension.id}`).delete();
		} catch (error) {
			throw error;
		}
	});
});
