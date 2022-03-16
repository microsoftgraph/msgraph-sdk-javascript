import {AverageComparativeScore} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageComparativeScoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : AverageComparativeScore {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AverageComparativeScore();
}
