import {SchedulingGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchedulingGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchedulingGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchedulingGroup();
}
