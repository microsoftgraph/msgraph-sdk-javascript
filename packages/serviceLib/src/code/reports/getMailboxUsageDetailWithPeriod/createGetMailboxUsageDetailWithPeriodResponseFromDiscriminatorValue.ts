import {GetMailboxUsageDetailWithPeriodResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailboxUsageDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailboxUsageDetailWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailboxUsageDetailWithPeriodResponse();
}
