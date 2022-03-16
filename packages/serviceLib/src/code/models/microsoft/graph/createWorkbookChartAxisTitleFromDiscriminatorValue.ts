import {WorkbookChartAxisTitle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxisTitle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxisTitle();
}
