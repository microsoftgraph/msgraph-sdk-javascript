import {GetMailboxUsageMailboxCountsWithPeriodResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailboxUsageMailboxCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailboxUsageMailboxCountsWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailboxUsageMailboxCountsWithPeriodResponse();
}
