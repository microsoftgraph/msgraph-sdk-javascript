import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsRegistrationCampaignIncludeTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsRegistrationCampaignIncludeTarget();
}
