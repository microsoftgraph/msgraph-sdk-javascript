import {IdentityProviderBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProviderBase();
}
