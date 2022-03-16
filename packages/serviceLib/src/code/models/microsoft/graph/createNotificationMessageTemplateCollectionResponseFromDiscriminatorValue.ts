import {NotificationMessageTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotificationMessageTemplateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotificationMessageTemplateCollectionResponse();
}
