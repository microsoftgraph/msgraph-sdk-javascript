import {WorkingHours} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkingHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkingHours {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkingHours();
}
