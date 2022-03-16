import {EducationSubmission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmission();
}
