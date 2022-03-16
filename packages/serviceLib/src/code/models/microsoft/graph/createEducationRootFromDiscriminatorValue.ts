import {EducationRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRoot();
}
