import {Report} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportFromDiscriminatorValue(parseNode: ParseNode | undefined) : Report {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Report();
}
