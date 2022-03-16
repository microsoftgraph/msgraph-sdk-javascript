import {GetDeviceNonComplianceReportRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceNonComplianceReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceNonComplianceReportRequestBody();
}
