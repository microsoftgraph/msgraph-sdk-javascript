import {TimeOffItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffItem();
}
