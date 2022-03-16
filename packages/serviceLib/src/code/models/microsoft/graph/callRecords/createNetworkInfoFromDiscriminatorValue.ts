import {NetworkInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkInfo();
}
