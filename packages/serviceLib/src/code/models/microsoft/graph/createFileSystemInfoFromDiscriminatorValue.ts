import {FileSystemInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileSystemInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileSystemInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileSystemInfo();
}
