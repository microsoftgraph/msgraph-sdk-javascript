import {WipeRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipeRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipeRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipeRequestBody();
}
