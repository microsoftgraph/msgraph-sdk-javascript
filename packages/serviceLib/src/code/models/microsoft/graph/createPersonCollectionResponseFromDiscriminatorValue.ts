import {PersonCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonCollectionResponse();
}
