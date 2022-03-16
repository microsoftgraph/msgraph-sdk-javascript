import {ProvisioningSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningSystem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningSystem();
}
