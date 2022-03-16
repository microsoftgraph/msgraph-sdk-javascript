import {RemovePasswordRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemovePasswordRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemovePasswordRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemovePasswordRequestBody();
}
