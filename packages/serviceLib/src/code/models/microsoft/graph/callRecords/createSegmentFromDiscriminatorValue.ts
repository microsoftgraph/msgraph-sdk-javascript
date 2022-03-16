import {Segment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSegmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Segment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Segment();
}
