import {ColumnDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnDefinitionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnDefinitionCollectionResponse();
}
