import {KeyCredentialRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyCredentialRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyCredentialRequestBody();
}
