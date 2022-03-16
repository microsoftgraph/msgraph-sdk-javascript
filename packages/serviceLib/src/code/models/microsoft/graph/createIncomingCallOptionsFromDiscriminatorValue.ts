import {IncomingCallOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncomingCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncomingCallOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncomingCallOptions();
}
