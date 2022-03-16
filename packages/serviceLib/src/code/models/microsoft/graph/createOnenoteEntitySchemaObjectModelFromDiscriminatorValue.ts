import {OnenoteEntitySchemaObjectModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntitySchemaObjectModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntitySchemaObjectModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteEntitySchemaObjectModel();
}
