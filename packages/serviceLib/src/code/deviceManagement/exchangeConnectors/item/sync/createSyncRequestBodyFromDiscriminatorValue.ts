import {SyncRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SyncRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SyncRequestBody();
}
