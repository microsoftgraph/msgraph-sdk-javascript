import {ResourceSpecificPermissionGrantCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermissionGrantCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermissionGrantCollectionResponse();
}
