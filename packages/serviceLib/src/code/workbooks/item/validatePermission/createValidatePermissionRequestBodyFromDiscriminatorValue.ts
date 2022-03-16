import {ValidatePermissionRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePermissionRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePermissionRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePermissionRequestBody();
}
