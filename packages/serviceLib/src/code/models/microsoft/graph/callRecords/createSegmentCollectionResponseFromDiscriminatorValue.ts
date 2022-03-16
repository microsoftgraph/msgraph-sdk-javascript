import {SegmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSegmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SegmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SegmentCollectionResponse();
}
