import {EntitlementManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) : EntitlementManagement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EntitlementManagement();
}
