import {UserConsentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserConsentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserConsentRequestCollectionResponse();
}
