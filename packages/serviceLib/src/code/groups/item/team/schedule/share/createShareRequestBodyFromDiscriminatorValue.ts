import {ShareRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShareRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShareRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShareRequestBody();
}
