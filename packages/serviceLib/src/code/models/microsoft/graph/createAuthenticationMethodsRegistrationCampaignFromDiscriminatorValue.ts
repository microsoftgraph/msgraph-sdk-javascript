import {AuthenticationMethodsRegistrationCampaign} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRegistrationCampaignFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsRegistrationCampaign {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsRegistrationCampaign();
}
