import {IpRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpRange();
}
