import {WorkbookChartFont} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFontFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartFont {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartFont();
}
