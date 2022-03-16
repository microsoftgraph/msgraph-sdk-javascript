import {IdentityProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProviderCollectionResponse();
}
