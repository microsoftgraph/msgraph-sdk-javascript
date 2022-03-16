import {OnenoteOperationError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteOperationError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteOperationError();
}
