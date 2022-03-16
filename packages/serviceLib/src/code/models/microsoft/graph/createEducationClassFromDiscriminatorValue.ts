import {EducationClass} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationClassFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationClass {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationClass();
}
