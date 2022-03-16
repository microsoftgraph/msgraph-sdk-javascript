import {SearchHit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchHit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchHit();
}
