import {SharedDriveItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedDriveItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedDriveItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedDriveItem();
}
