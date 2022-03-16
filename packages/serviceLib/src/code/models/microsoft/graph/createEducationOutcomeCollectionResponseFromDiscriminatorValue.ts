import {EducationOutcomeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOutcomeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationOutcomeCollectionResponse();
}
