import {DeviceCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCategoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCategoryCollectionResponse();
}
