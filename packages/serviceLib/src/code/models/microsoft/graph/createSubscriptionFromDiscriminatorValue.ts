import {Subscription} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Subscription {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Subscription();
}
