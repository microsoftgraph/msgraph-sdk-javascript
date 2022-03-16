import {AccessReviewScheduleSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScheduleSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScheduleSettings();
}
