import {AgreementCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementCollectionResponse();
}
