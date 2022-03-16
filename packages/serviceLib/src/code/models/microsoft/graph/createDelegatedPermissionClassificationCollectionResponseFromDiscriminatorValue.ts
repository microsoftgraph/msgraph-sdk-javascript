import {DelegatedPermissionClassificationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedPermissionClassificationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedPermissionClassificationCollectionResponse();
}
