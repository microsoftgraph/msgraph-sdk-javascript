import {AccessReviewScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScope();
}
