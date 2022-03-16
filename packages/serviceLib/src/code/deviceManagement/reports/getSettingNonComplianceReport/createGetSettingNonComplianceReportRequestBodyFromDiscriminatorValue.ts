import {GetSettingNonComplianceReportRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSettingNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetSettingNonComplianceReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetSettingNonComplianceReportRequestBody();
}
