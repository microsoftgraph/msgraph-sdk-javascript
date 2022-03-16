import {ServiceAnnouncement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncement();
}
