import {SecureScoreControlProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlProfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlProfile();
}
