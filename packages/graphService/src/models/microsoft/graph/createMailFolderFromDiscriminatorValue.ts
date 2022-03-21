import {MailFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailFolder();
}
