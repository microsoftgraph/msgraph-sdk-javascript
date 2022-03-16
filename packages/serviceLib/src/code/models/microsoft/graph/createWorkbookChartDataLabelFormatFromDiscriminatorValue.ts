import {WorkbookChartDataLabelFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartDataLabelFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartDataLabelFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartDataLabelFormat();
}
