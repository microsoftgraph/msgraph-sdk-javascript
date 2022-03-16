import {RubricLevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricLevelFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricLevel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricLevel();
}
