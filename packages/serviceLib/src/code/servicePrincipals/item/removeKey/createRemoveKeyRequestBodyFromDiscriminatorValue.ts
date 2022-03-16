import {RemoveKeyRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveKeyRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveKeyRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveKeyRequestBody();
}
