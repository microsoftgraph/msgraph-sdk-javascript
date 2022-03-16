import {ForceDeleteRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForceDeleteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ForceDeleteRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ForceDeleteRequestBody();
}
