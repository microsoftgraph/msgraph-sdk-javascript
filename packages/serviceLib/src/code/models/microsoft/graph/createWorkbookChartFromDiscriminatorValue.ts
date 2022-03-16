import {WorkbookChart} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChart {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChart();
}
