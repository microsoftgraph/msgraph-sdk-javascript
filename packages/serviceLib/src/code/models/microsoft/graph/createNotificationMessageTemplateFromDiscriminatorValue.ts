import {NotificationMessageTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotificationMessageTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotificationMessageTemplate();
}
