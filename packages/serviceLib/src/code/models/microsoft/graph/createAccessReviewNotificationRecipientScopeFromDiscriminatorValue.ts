import {AccessReviewNotificationRecipientScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewNotificationRecipientScope();
}
