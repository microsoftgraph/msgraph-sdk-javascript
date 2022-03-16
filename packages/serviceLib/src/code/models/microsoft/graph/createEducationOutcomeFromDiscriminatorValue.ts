import {EducationOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOutcome {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationOutcome();
}
