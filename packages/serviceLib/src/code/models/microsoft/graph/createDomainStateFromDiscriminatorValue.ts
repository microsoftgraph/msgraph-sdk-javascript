import {DomainState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainState();
}
