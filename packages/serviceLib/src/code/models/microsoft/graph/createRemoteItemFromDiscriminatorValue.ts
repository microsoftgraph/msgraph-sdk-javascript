import {RemoteItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteItem();
}
