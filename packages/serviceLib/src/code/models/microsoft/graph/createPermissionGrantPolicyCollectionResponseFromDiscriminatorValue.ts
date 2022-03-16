import {PermissionGrantPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantPolicyCollectionResponse();
}
