import {ManagedEBook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBook {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedEBook();
}
