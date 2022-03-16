import {InnerError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : InnerError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InnerError();
}
