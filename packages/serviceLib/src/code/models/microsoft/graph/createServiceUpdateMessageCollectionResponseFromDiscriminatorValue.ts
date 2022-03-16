import {ServiceUpdateMessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUpdateMessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUpdateMessageCollectionResponse();
}
