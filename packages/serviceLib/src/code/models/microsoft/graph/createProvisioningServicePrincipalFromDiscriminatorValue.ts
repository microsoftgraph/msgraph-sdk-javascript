import {ProvisioningServicePrincipal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningServicePrincipal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningServicePrincipal();
}
