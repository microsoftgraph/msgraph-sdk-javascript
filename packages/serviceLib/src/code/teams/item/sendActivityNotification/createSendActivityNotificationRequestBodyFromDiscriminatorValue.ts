import {SendActivityNotificationRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendActivityNotificationRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendActivityNotificationRequestBody();
}
