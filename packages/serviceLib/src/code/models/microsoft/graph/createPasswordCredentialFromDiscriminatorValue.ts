import {PasswordCredential} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredential {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredential();
}
