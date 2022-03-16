import {ReportRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReportRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReportRoot();
}
