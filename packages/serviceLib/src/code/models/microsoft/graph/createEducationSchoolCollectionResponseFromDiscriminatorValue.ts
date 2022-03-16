import {EducationSchoolCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSchoolCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSchoolCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSchoolCollectionResponse();
}
