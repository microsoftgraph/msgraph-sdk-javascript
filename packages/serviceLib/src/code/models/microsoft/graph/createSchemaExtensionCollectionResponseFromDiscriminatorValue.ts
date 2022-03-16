import {SchemaExtensionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaExtensionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchemaExtensionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchemaExtensionCollectionResponse();
}
