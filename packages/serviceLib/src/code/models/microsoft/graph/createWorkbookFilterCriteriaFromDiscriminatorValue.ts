import {WorkbookFilterCriteria} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFilterCriteriaFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFilterCriteria {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFilterCriteria();
}
