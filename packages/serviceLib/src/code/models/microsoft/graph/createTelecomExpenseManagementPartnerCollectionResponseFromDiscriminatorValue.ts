import {TelecomExpenseManagementPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TelecomExpenseManagementPartnerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TelecomExpenseManagementPartnerCollectionResponse();
}
