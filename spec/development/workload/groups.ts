/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { getClient, randomString } from "../test-helper";
import { Group } from '@microsoft/microsoft-graph-types';

const client = getClient();

describe('Groups', function () {
    this.timeout(10 * 1000);
    it('Fetch a list of groups and access properties on a collection item', async () => {
        try {
            let res = await client.api("/groups").get();
            const group = res.value[0] as Group;
            assert.isDefined(group.displayName);
            assert.isDefined(group.mail);
            assert.isDefined(group.id);

            assert.isUndefined(group['invalidPropertyName']);
        } catch (error) {
            throw error;
        }
    });

    it('Create a group and validate properties were set', async () => {
        const group: Group = {
            displayName: randomString(),
            description: randomString(),
            groupTypes: [
                "Unified"
            ],
            mailEnabled: true,
            mailNickname: randomString(),
            securityEnabled: true
        };
        try {
            let res = await client.api("/groups").post(group);
            let createdGroup = res as Group;
            assert.equal(createdGroup.displayName, group.displayName);
            assert.equal(createdGroup.description, group.description);
            assert.equal(createdGroup.mailEnabled, group.mailEnabled);
            assert.isString(createdGroup.id);
        } catch (error) {
            throw error;
        }
    });
});
