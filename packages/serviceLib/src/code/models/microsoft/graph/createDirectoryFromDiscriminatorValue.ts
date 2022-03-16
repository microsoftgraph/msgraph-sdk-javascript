import {Directory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Directory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Directory();
}
