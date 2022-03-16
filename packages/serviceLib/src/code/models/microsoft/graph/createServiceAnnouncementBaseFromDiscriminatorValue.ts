import {ServiceAnnouncementBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncementBase();
}
