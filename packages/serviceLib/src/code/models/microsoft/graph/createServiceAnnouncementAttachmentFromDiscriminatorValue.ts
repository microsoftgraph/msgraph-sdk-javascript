import {ServiceAnnouncementAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementAttachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncementAttachment();
}
