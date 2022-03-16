import {KeyValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyValuePair {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyValuePair();
}
