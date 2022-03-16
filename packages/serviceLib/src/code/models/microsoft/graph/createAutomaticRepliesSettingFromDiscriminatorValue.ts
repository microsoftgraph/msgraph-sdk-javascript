import {AutomaticRepliesSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AutomaticRepliesSetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AutomaticRepliesSetting();
}
