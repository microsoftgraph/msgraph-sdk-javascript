import {ContactFolderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactFolderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactFolderCollectionResponse();
}
