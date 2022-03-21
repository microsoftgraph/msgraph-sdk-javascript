import {InferenceClassificationOverride} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInferenceClassificationOverrideFromDiscriminatorValue(parseNode: ParseNode | undefined) : InferenceClassificationOverride {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InferenceClassificationOverride();
}
