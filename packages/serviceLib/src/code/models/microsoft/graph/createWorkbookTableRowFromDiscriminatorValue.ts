import {WorkbookTableRow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableRow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableRow();
}
