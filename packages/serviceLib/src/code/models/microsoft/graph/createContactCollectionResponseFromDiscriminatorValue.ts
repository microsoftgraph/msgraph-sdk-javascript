import {ContactCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactCollectionResponse();
}
