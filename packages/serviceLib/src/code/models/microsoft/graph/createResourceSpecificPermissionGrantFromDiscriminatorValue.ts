import {ResourceSpecificPermissionGrant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermissionGrant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermissionGrant();
}
