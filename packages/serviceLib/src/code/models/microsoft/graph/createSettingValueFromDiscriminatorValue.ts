import {SettingValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingValue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingValue();
}
