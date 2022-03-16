import {PermissionGrantPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantPolicy();
}
