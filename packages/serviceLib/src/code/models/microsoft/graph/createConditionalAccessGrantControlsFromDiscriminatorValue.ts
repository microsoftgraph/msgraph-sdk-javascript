import {ConditionalAccessGrantControls} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessGrantControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessGrantControls {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessGrantControls();
}
