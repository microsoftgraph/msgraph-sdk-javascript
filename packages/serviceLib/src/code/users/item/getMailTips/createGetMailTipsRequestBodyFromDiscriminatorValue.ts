import {GetMailTipsRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailTipsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailTipsRequestBody();
}
