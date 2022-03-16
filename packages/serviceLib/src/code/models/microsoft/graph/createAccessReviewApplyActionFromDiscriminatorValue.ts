import {AccessReviewApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewApplyAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewApplyAction();
}
