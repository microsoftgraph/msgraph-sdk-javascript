import {RelationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RelationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RelationCollectionResponse();
}
