import {PublicInnerError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicInnerError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicInnerError();
}
