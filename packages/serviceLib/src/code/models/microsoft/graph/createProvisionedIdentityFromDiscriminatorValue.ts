import {ProvisionedIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionedIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionedIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionedIdentity();
}
