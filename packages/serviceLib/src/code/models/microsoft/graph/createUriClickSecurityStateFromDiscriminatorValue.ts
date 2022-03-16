import {UriClickSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUriClickSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : UriClickSecurityState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UriClickSecurityState();
}
