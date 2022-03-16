import {ExtensionPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionPropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionPropertyCollectionResponse();
}
