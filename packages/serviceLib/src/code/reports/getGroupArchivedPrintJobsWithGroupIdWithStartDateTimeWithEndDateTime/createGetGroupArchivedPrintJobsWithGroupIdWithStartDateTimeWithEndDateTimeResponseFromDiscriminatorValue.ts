import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse();
}
