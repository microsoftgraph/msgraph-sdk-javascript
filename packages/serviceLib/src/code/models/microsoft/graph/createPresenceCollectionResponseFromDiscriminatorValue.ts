import {PresenceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPresenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PresenceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PresenceCollectionResponse();
}
