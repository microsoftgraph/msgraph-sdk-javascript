import {NamedLocationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NamedLocationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NamedLocationCollectionResponse();
}
