import {WorkbookWorksheet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookWorksheet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookWorksheet();
}
