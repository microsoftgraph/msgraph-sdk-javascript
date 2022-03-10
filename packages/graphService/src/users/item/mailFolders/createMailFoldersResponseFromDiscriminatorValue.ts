import {MailFoldersResponse} from './mailFoldersResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailFoldersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailFoldersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailFoldersResponse();
}
