import {SoftwareUpdateStatusSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSoftwareUpdateStatusSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SoftwareUpdateStatusSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SoftwareUpdateStatusSummary();
}
