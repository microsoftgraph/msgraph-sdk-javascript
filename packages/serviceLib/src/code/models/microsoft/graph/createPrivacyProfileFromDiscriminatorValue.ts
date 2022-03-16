import {PrivacyProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivacyProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivacyProfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivacyProfile();
}
