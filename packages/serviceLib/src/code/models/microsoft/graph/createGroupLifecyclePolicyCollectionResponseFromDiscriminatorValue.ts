import {GroupLifecyclePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupLifecyclePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupLifecyclePolicyCollectionResponse();
}
