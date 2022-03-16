import {TermsAndConditionsAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAssignment();
}
