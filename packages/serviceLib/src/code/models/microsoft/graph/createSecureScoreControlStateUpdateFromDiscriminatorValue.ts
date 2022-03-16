import {SecureScoreControlStateUpdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlStateUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlStateUpdate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlStateUpdate();
}
