import {InferenceClassification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInferenceClassificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : InferenceClassification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InferenceClassification();
}
