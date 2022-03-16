import {SwapShiftsChangeRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSwapShiftsChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SwapShiftsChangeRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SwapShiftsChangeRequest();
}
