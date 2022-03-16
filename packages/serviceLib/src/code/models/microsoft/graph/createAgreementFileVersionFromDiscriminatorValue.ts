import {AgreementFileVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileVersion();
}
