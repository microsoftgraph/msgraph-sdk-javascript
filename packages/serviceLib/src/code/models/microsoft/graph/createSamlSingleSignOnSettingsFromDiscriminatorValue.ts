import {SamlSingleSignOnSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlSingleSignOnSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlSingleSignOnSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SamlSingleSignOnSettings();
}
