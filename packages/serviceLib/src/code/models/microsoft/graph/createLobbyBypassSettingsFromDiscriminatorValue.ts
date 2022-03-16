import {LobbyBypassSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLobbyBypassSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : LobbyBypassSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LobbyBypassSettings();
}
