import {AccessReviewSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewSet();
}
