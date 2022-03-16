import {WorkbookChartAxes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxesFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxes();
}
