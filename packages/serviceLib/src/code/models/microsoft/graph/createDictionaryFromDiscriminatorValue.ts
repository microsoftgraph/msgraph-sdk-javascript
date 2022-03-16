import {Dictionary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dictionary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dictionary();
}
