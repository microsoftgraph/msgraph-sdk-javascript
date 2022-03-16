import {TimeOffReason} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffReasonFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffReason {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffReason();
}
