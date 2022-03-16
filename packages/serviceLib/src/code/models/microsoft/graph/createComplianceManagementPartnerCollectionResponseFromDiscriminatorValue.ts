import {ComplianceManagementPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceManagementPartnerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceManagementPartnerCollectionResponse();
}
