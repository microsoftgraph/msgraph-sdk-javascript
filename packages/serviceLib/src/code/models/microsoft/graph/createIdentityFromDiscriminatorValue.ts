import {Identity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Identity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Identity();
}
