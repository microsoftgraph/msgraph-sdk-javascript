import {WorkbookTableColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableColumn();
}
