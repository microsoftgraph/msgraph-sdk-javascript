import {ItemActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivity();
}
