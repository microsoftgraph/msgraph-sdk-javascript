import {SetOrderRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetOrderRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetOrderRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetOrderRequestBody();
}
