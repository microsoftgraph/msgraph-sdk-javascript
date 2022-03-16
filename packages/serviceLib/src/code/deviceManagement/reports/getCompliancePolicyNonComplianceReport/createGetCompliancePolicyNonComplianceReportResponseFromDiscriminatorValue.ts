import {GetCompliancePolicyNonComplianceReportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceReportResponse();
}
