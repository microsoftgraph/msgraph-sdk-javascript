import {EducationItemBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationItemBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationItemBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationItemBody();
}
