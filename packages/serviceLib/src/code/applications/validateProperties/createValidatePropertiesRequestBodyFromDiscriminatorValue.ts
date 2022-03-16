import {ValidatePropertiesRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePropertiesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePropertiesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePropertiesRequestBody();
}
