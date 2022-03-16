import {GroupSettingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingCollectionResponse();
}
