import {UserSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSettings();
}
