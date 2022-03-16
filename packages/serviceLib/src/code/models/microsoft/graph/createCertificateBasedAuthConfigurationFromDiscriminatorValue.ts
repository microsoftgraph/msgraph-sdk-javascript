import {CertificateBasedAuthConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateBasedAuthConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateBasedAuthConfiguration();
}
