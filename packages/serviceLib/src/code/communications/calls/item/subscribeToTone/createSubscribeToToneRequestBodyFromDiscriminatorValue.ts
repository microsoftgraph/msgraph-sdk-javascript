import {SubscribeToToneRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToToneRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToToneRequestBody();
}
