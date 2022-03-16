import {AuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodCollectionResponse();
}
