import {SearchHitsContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitsContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchHitsContainer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchHitsContainer();
}
