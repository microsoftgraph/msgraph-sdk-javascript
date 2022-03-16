import {EducationAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignment();
}
