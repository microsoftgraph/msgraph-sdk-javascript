import {GetHistoricalReportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetHistoricalReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetHistoricalReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetHistoricalReportResponse();
}
