import {GetHistoricalReportRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetHistoricalReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetHistoricalReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetHistoricalReportRequestBody();
}
