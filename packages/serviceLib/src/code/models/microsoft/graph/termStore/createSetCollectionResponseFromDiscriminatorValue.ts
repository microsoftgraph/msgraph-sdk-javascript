import {SetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetCollectionResponse();
}
