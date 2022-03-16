import {SubscribeToToneOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToToneOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToToneOperation();
}
