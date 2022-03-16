import {OutlookCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookCategoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookCategoryCollectionResponse();
}
