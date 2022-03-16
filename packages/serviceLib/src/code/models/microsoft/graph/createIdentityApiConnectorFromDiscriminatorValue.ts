import {IdentityApiConnector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityApiConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityApiConnector {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityApiConnector();
}
