import {MessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageCollectionResponse();
}
