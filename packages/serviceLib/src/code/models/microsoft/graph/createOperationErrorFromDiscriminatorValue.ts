import {OperationError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : OperationError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OperationError();
}
