import {WorkbookTableSort} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableSortFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableSort {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableSort();
}
