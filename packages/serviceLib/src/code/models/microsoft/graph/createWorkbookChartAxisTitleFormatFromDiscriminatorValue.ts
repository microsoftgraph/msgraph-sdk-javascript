import {WorkbookChartAxisTitleFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxisTitleFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxisTitleFormat();
}
