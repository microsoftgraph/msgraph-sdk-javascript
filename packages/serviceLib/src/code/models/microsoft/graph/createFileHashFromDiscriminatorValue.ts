import {FileHash} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileHashFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileHash {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileHash();
}
