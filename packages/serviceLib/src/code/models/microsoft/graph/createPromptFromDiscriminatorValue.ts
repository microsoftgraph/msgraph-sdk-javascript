import {Prompt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Prompt {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Prompt();
}
