import {PlayPromptOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptOperation();
}
