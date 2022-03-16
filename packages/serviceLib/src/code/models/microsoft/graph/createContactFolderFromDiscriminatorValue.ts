import {ContactFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactFolder();
}
