import {SingleValueExtendedPropertiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSingleValueExtendedPropertiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SingleValueExtendedPropertiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SingleValueExtendedPropertiesResponse();
}
