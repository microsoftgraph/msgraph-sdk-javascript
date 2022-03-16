import {CallOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallOptions();
}
