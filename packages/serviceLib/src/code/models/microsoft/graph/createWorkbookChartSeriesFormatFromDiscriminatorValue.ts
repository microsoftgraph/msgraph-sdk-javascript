import {WorkbookChartSeriesFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartSeriesFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartSeriesFormat();
}
