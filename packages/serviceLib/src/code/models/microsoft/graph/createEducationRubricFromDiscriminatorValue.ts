import {EducationRubric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRubric {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRubric();
}
