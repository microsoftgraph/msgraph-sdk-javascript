import {WorkbookSortField} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookSortFieldFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookSortField {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookSortField();
}
