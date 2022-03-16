import {RejectRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRejectRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RejectRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RejectRequestBody();
}
