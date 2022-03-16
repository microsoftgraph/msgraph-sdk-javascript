import {GetAvailableExtensionPropertiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAvailableExtensionPropertiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAvailableExtensionPropertiesResponse();
}
