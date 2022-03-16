import {ItemReference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemReference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemReference();
}
