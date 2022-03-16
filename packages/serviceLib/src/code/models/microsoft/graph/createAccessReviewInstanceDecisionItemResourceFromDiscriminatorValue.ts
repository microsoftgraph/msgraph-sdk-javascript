import {AccessReviewInstanceDecisionItemResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemResource();
}
