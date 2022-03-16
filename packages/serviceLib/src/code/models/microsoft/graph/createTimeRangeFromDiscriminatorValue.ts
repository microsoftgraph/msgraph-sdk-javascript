import {TimeRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeRange();
}
