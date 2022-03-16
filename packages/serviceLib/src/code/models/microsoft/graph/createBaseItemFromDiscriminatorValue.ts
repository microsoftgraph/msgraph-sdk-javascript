import {BaseItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseItem();
}
