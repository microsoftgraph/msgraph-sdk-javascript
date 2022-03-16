import {Event} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : Event {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Event();
}
