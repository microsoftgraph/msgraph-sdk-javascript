import {ModifiedProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createModifiedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ModifiedProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ModifiedProperty();
}
