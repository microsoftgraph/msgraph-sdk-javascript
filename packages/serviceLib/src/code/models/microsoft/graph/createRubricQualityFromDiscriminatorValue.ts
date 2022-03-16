import {RubricQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQuality();
}
