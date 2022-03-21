import {Entity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entity();
}
