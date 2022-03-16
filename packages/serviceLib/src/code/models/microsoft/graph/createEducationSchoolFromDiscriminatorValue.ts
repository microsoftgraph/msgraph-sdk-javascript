import {EducationSchool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSchoolFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSchool {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSchool();
}
