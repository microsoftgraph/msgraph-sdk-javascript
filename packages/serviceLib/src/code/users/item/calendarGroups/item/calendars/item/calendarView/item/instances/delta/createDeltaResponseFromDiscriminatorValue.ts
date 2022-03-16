import {DeltaResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaResponse();
}
