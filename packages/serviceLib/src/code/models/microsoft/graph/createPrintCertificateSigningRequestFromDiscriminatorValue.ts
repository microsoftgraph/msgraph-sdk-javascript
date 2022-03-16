import {PrintCertificateSigningRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintCertificateSigningRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintCertificateSigningRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintCertificateSigningRequest();
}
