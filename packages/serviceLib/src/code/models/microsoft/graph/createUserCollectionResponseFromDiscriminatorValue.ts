import {UserCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserCollectionResponse();
}
