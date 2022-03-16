import {ResourceAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceAction();
}
