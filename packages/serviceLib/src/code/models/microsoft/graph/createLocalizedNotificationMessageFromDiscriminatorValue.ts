import {LocalizedNotificationMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedNotificationMessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedNotificationMessage();
}
