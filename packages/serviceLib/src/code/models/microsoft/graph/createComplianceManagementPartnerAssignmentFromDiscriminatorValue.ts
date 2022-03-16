import {ComplianceManagementPartnerAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceManagementPartnerAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceManagementPartnerAssignment();
}
