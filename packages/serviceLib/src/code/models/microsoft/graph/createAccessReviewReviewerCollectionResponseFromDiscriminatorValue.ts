import {AccessReviewReviewerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewerCollectionResponse();
}
