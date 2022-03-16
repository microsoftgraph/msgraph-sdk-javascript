import {RemoveRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveRequestBody();
}
