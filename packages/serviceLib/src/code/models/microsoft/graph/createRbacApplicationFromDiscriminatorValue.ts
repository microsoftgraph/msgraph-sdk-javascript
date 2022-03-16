import {RbacApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRbacApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : RbacApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RbacApplication();
}
