import {MessageSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageSecurityState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageSecurityState();
}
