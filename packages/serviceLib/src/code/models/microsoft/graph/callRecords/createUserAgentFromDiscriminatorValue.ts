import {UserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAgent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAgent();
}
