import {GroupSettingTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingTemplate();
}
