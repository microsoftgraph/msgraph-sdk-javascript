import {NetworkConnection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkConnection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkConnection();
}
