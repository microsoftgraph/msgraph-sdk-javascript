import {ItemBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemBody();
}
