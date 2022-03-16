import {DirectoryObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryObject();
}
