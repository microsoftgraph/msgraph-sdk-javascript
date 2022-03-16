import {EducationUserCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationUserCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationUserCollectionResponse();
}
