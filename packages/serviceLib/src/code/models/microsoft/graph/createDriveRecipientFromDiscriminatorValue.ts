import {DriveRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveRecipient();
}
