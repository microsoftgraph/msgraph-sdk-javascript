import {GetFinalReportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetFinalReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetFinalReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetFinalReportResponse();
}
