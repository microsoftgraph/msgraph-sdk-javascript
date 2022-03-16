import {CertificateAuthority} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateAuthorityFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateAuthority {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateAuthority();
}
