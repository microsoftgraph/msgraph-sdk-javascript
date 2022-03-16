import {SubscribedSku} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribedSkuFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribedSku {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribedSku();
}
