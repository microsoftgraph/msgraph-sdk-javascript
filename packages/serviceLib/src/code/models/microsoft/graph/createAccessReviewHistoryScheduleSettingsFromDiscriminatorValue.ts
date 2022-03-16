import {AccessReviewHistoryScheduleSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewHistoryScheduleSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewHistoryScheduleSettings();
}
