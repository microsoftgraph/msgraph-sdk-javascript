import {Onenote} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Onenote {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Onenote();
}
