import {StopHoldMusicRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicRequestBody();
}
