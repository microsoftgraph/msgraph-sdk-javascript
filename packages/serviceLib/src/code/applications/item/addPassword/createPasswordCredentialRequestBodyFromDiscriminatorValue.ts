import {PasswordCredentialRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredentialRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredentialRequestBody();
}
