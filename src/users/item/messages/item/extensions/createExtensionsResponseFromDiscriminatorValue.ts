import {ExtensionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionsResponse();
}
