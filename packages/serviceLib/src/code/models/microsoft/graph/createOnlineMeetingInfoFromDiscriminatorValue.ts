import {OnlineMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnlineMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnlineMeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnlineMeetingInfo();
}
