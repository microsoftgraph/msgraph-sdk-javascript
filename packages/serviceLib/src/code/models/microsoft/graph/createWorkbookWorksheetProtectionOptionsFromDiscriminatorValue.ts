import {WorkbookWorksheetProtectionOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookWorksheetProtectionOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookWorksheetProtectionOptions();
}
