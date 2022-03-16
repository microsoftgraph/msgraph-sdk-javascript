import {ExternalGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalGroupCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalGroupCollectionResponse();
}
