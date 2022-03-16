import {PublicError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicError();
}
