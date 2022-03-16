import {Website} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebsiteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Website {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Website();
}
