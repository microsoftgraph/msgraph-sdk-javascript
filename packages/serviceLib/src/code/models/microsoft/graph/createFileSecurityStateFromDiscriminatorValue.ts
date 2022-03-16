import {FileSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileSecurityState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileSecurityState();
}
