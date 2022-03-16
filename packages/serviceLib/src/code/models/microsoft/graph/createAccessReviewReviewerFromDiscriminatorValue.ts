import {AccessReviewReviewer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewer();
}
