import {ResourceOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceOperation();
}
