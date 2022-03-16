import {MuteRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteRequestBody();
}
