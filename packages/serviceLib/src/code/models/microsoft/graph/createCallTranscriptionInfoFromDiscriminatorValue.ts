import {CallTranscriptionInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallTranscriptionInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallTranscriptionInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallTranscriptionInfo();
}
