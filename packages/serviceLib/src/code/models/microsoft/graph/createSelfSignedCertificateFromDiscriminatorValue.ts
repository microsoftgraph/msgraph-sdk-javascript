import {SelfSignedCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfSignedCertificate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfSignedCertificate();
}
