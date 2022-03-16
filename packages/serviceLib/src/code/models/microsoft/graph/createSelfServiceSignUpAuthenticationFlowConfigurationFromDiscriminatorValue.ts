import {SelfServiceSignUpAuthenticationFlowConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfServiceSignUpAuthenticationFlowConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfServiceSignUpAuthenticationFlowConfiguration();
}
