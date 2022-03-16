import {ExtensionSchemaProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionSchemaPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionSchemaProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionSchemaProperty();
}
