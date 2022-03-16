import {IdentitySource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySource();
}
