import { assert } from 'chai'

import { getClient, randomString } from "./test-helper"
import { OpenTypeExtension, User } from '@microsoft/microsoft-graph-types-beta'

declare const describe, it;

interface ColorOpenExtension extends OpenTypeExtension {
    color: string
}

let extension:ColorOpenExtension = {
    extensionName: `com.javascript.extension-${randomString()}`,
    color: randomString()
}

describe('Open Extensions', function() {
  this.timeout(10*1000);
  it('Use open extensions to add a field to users', function() {
    return getClient().api("https://graph.microsoft.com/beta/me/extensions").post(extension).then((json) => {
        const createdExtension = json as ColorOpenExtension;

        assert.isDefined(createdExtension.id);
        assert.equal(createdExtension.color, extension.color);
        assert.equal(createdExtension.extensionName, extension.extensionName);

        assert.isUndefined(createdExtension['invalidPropertyName']);

        // save this createdExtension for later tests (id)
        extension = createdExtension;
        return Promise.resolve();
      });
  });

//   it('Queries open extension values on a user', function() {
//     return getClient().api("https://graph.microsoft.com/beta/me?$select=id&$expand=extensions").get().then((json) => {
//         let user = json as User;
//         for (let userExtension of user.extensions) {
//             if (userExtension.id == extension.id) {
//                 return Promise.resolve();
//             }
//         }
//         return Promise.reject("Created extension not found when iterating user extensions");
//     });
//   });

  it('Deletes the created open extension', function() {
    return getClient().api(`https://graph.microsoft.com/beta/me/extensions/${extension.id}`).delete()
  });
});