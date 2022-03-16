import {ConfirmCompromisedRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfirmCompromisedRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfirmCompromisedRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfirmCompromisedRequestBody();
}
