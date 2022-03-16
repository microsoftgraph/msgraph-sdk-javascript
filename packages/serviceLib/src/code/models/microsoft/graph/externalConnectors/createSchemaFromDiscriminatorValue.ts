import {Schema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Schema {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Schema();
}
