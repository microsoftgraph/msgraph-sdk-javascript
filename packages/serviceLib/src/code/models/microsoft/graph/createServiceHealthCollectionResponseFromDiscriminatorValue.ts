import {ServiceHealthCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthCollectionResponse();
}
