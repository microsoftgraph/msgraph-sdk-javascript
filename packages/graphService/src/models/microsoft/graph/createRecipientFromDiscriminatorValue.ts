import {Recipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : Recipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Recipient();
}
