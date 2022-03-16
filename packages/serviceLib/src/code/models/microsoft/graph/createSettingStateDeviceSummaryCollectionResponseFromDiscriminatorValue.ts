import {SettingStateDeviceSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingStateDeviceSummaryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingStateDeviceSummaryCollectionResponse();
}
