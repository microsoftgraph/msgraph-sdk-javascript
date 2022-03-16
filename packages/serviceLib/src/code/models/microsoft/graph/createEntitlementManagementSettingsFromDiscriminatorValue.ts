import {EntitlementManagementSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : EntitlementManagementSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EntitlementManagementSettings();
}
