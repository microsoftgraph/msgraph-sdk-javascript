import {TargetResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetResource();
}
