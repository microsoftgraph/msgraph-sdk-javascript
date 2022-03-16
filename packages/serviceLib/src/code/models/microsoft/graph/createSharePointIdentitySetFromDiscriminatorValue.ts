import {SharePointIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePointIdentitySet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePointIdentitySet();
}
