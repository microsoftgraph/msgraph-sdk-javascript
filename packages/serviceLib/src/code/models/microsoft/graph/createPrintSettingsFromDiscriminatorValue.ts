import {PrintSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintSettings();
}
