import {GetCachedReportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCachedReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCachedReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCachedReportResponse();
}
