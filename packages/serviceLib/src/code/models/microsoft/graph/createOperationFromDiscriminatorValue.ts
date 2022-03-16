import {Operation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Operation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Operation();
}
