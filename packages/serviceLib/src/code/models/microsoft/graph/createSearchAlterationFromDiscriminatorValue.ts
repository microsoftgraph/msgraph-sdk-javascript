import {SearchAlteration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchAlterationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchAlteration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchAlteration();
}
