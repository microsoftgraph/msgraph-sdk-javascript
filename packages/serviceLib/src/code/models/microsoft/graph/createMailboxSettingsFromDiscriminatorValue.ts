import {MailboxSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailboxSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailboxSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailboxSettings();
}
