import {Extension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Extension {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Extension();
}
