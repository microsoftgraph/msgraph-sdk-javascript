import {EducationCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationCategoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationCategoryCollectionResponse();
}
