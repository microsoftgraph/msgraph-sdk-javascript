import {ProxiedDomain} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProxiedDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProxiedDomain {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProxiedDomain();
}
