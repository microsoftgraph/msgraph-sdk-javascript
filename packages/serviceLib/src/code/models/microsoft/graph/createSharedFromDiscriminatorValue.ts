import {Shared} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedFromDiscriminatorValue(parseNode: ParseNode | undefined) : Shared {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Shared();
}
