import {Chat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatFromDiscriminatorValue(parseNode: ParseNode | undefined) : Chat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Chat();
}
