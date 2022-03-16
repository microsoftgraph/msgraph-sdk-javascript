import {PreAuthorizedApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreAuthorizedApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PreAuthorizedApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreAuthorizedApplication();
}
