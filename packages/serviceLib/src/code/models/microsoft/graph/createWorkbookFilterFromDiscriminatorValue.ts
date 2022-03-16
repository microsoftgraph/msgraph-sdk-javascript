import {WorkbookFilter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFilter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFilter();
}
