import {BaseItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseItemCollectionResponse();
}
