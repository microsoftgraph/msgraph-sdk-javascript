import {TermsAndConditionsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsCollectionResponse();
}
