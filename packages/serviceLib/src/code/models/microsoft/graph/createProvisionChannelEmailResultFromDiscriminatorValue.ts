import {ProvisionChannelEmailResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionChannelEmailResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionChannelEmailResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionChannelEmailResult();
}
