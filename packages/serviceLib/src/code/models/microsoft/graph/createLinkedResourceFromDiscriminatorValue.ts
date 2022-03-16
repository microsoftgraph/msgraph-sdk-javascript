import {LinkedResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLinkedResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : LinkedResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LinkedResource();
}
