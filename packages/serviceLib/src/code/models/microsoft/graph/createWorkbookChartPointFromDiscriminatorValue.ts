import {WorkbookChartPoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartPoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartPoint();
}
