import {EducationResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationResource();
}
