import {MailTips} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailTipsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailTips {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailTips();
}
