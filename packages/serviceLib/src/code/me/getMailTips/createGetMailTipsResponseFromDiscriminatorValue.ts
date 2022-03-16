import {GetMailTipsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailTipsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailTipsResponse();
}
