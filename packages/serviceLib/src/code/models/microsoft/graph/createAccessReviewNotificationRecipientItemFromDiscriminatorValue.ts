import {AccessReviewNotificationRecipientItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewNotificationRecipientItem();
}
