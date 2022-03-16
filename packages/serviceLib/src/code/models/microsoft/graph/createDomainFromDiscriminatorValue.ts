import {Domain} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) : Domain {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Domain();
}
