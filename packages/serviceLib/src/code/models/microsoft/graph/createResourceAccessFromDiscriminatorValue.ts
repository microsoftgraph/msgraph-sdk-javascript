import {ResourceAccess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceAccess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceAccess();
}
