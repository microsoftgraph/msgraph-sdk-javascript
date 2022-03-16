import {GetApplicablePolicyRequirementsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetApplicablePolicyRequirementsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetApplicablePolicyRequirementsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetApplicablePolicyRequirementsResponse();
}
