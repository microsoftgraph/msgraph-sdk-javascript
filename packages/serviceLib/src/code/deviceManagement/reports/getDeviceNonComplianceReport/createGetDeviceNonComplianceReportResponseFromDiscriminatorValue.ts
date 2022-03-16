import {GetDeviceNonComplianceReportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceNonComplianceReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceNonComplianceReportResponse();
}
