import {EducationCourse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCourseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationCourse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationCourse();
}
