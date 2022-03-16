import {ConditionalAccessSessionControls} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessSessionControls {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessSessionControls();
}
