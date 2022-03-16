import {SearchEntity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchEntity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchEntity();
}
