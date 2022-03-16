import {HostSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : HostSecurityState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HostSecurityState();
}
