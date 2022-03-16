import {SecureScore} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScore {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScore();
}
