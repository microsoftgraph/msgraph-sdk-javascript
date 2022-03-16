import {AccessReviewHistoryInstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewHistoryInstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewHistoryInstance();
}
