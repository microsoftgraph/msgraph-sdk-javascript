import {ChangePasswordRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangePasswordRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangePasswordRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangePasswordRequestBody();
}
