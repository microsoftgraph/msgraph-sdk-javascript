import {Deleted} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedFromDiscriminatorValue(parseNode: ParseNode | undefined) : Deleted {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Deleted();
}
