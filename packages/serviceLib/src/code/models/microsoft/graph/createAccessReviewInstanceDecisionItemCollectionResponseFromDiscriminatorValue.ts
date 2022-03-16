import {AccessReviewInstanceDecisionItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemCollectionResponse();
}
