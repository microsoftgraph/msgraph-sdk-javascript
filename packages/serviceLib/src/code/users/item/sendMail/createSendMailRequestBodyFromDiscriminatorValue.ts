import {SendMailRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendMailRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendMailRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendMailRequestBody();
}
