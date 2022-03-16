import {UserConsentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserConsentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserConsentRequest();
}
