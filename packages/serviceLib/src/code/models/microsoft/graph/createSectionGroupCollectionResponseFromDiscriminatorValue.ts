import {SectionGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSectionGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SectionGroupCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SectionGroupCollectionResponse();
}
