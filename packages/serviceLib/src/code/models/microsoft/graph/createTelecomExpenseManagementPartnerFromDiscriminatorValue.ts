import {TelecomExpenseManagementPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : TelecomExpenseManagementPartner {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TelecomExpenseManagementPartner();
}
