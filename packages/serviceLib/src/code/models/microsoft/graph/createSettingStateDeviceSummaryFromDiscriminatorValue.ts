import {SettingStateDeviceSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingStateDeviceSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingStateDeviceSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingStateDeviceSummary();
}
