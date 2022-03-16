import {WorkbookChartAxisFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxisFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxisFormat();
}
