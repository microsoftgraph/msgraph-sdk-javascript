import {MultiValueExtendedPropertiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMultiValueExtendedPropertiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MultiValueExtendedPropertiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MultiValueExtendedPropertiesResponse();
}
