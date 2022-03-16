import {ServiceUpdateMessageViewpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUpdateMessageViewpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUpdateMessageViewpoint();
}
