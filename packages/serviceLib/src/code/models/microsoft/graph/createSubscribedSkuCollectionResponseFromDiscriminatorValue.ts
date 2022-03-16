import {SubscribedSkuCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribedSkuCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribedSkuCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribedSkuCollectionResponse();
}
