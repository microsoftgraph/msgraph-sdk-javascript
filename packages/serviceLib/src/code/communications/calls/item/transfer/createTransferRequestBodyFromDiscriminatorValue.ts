import {TransferRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTransferRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TransferRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TransferRequestBody();
}
