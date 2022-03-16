import {WorkbookOperationError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookOperationError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookOperationError();
}
