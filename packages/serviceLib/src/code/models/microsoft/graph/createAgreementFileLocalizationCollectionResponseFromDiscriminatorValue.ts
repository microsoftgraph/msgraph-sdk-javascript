import {AgreementFileLocalizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileLocalizationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileLocalizationCollectionResponse();
}
