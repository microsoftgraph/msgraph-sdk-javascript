import {RequiredResourceAccess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequiredResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequiredResourceAccess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequiredResourceAccess();
}
