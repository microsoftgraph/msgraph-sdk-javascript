import {SecureScoreCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreCollectionResponse();
}
