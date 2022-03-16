import {ManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppRegistration();
}
