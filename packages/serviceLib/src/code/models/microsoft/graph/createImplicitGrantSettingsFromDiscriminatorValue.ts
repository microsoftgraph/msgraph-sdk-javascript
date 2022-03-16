import {ImplicitGrantSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImplicitGrantSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImplicitGrantSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImplicitGrantSettings();
}
