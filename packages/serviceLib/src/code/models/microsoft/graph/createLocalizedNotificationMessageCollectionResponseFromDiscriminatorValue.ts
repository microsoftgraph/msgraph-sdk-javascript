import {LocalizedNotificationMessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedNotificationMessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedNotificationMessageCollectionResponse();
}
