import {EducationAssignmentResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentResourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentResourceCollectionResponse();
}
