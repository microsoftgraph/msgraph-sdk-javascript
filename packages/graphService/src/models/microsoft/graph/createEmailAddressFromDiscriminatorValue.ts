import {EmailAddress} from './emailAddress';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAddress();
}
