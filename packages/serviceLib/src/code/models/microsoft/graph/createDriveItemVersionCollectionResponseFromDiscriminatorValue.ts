import {DriveItemVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemVersionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemVersionCollectionResponse();
}
