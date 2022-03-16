import {BitlockerRecoveryKey} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitlockerRecoveryKey {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitlockerRecoveryKey();
}
