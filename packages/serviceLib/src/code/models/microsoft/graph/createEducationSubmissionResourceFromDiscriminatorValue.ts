import {EducationSubmissionResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionResource();
}
