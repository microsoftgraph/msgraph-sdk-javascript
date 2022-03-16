import {TermsAndConditionsAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAssignmentCollectionResponse();
}
