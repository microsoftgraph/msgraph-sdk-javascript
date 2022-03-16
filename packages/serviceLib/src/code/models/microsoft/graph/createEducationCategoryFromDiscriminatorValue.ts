import {EducationCategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationCategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationCategory();
}
