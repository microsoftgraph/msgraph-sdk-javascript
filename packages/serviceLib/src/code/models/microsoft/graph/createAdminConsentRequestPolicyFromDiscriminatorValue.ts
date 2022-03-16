import {AdminConsentRequestPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminConsentRequestPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdminConsentRequestPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdminConsentRequestPolicy();
}
