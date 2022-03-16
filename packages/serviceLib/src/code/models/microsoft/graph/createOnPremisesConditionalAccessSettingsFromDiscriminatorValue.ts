import {OnPremisesConditionalAccessSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesConditionalAccessSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesConditionalAccessSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesConditionalAccessSettings();
}
