import {WorkbookNamedItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookNamedItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookNamedItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookNamedItem();
}
