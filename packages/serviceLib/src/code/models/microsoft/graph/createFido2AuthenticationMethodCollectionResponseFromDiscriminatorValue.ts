import {Fido2AuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2AuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2AuthenticationMethodCollectionResponse();
}
