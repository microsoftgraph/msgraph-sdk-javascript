import { assert } from 'chai'

import { getClient, randomString } from "../test-helper"
import { OpenTypeExtension } from '@microsoft/microsoft-graph-types'

declare const describe, it;

interface ColorOpenExtension extends OpenTypeExtension {
    color: string
}

let extension = <ColorOpenExtension>{
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

  it('Deletes the created open extension', function() {
    return getClient().api(`https://graph.microsoft.com/beta/me/extensions/${extension.id}`).delete()
  });
});
