import {ResourceVisualization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceVisualizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceVisualization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceVisualization();
}
