import {EnrollmentConfigurationAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnrollmentConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : EnrollmentConfigurationAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EnrollmentConfigurationAssignment();
}
