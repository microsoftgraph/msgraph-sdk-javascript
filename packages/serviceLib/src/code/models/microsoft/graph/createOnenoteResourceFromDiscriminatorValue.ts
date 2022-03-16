import {OnenoteResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteResource();
}
