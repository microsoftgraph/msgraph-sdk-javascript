import {SecureScoreControlProfileCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlProfileCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlProfileCollectionResponse();
}
