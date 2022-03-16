import {WorkbookChartLegendFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartLegendFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartLegendFormat();
}
