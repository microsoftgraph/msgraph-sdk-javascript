import {SharepointIds} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointIdsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharepointIds {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharepointIds();
}
