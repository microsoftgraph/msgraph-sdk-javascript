import {WorkbookChartLegend} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartLegend {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartLegend();
}
