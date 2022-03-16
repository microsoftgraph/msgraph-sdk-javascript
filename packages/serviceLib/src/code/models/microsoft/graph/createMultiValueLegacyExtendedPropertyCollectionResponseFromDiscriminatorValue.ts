import {MultiValueLegacyExtendedPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MultiValueLegacyExtendedPropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MultiValueLegacyExtendedPropertyCollectionResponse();
}
