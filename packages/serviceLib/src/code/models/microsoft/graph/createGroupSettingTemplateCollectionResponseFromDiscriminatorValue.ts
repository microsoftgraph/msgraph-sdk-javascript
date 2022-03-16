import {GroupSettingTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingTemplateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingTemplateCollectionResponse();
}
