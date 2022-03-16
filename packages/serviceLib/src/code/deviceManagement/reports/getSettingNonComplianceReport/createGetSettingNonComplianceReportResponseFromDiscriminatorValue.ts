import {GetSettingNonComplianceReportResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSettingNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetSettingNonComplianceReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetSettingNonComplianceReportResponse();
}
