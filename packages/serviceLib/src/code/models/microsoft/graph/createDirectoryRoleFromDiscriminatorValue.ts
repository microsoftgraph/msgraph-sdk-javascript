import {DirectoryRole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryRole {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryRole();
}
