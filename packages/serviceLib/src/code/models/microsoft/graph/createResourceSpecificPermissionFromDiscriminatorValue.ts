import {ResourceSpecificPermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermission();
}
