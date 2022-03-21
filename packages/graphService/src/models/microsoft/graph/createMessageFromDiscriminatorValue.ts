import {Message} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Message {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Message();
}
