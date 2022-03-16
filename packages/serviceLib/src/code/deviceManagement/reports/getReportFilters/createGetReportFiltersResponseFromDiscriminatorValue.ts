import {GetReportFiltersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetReportFiltersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetReportFiltersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetReportFiltersResponse();
}
