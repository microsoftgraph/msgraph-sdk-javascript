import {Set} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Set {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Set();
}
