import {EducationRubricCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRubricCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRubricCollectionResponse();
}
