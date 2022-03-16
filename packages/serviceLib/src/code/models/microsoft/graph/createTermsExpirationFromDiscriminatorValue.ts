import {TermsExpiration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsExpirationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsExpiration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsExpiration();
}
