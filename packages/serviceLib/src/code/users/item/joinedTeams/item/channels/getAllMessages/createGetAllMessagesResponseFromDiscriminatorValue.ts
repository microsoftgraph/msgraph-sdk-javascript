import {GetAllMessagesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAllMessagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAllMessagesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAllMessagesResponse();
}
