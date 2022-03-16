import {SettingTemplateValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingTemplateValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingTemplateValue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingTemplateValue();
}
