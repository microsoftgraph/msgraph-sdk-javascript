import {AutomaticRepliesMailTips} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesMailTipsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AutomaticRepliesMailTips {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AutomaticRepliesMailTips();
}
