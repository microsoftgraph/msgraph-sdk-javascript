import {Phone} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneFromDiscriminatorValue(parseNode: ParseNode | undefined) : Phone {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Phone();
}
