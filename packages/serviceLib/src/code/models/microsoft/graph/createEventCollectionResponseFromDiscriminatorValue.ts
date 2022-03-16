import {EventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventCollectionResponse();
}
