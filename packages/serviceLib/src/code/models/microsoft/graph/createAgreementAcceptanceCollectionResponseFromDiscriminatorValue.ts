import {AgreementAcceptanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementAcceptanceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementAcceptanceCollectionResponse();
}
