import {GetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponse();
}
