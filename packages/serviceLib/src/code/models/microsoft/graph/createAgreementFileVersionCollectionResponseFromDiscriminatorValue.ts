import {AgreementFileVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileVersionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileVersionCollectionResponse();
}
