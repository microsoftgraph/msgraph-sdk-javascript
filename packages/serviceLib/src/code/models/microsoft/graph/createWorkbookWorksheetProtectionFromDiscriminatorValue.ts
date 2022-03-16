import {WorkbookWorksheetProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookWorksheetProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookWorksheetProtection();
}
