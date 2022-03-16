import {RegistrationEnforcement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistrationEnforcementFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistrationEnforcement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistrationEnforcement();
}
