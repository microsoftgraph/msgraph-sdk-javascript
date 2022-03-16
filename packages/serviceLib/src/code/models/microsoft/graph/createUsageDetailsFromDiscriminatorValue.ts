import {UsageDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsageDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsageDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsageDetails();
}
