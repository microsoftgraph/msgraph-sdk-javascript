import {EducationAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentSettings();
}
