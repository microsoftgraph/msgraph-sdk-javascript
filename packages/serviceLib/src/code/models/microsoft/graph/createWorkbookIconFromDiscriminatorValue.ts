import {WorkbookIcon} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookIconFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookIcon {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookIcon();
}
