import {File} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : File {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new File();
}
