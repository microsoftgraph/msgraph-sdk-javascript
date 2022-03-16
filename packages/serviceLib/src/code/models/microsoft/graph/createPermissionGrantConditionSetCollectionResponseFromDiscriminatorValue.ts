import {PermissionGrantConditionSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantConditionSetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantConditionSetCollectionResponse();
}
