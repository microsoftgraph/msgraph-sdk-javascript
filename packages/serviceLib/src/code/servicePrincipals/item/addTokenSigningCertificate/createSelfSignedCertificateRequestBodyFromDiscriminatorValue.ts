import {SelfSignedCertificateRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificateRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfSignedCertificateRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfSignedCertificateRequestBody();
}
