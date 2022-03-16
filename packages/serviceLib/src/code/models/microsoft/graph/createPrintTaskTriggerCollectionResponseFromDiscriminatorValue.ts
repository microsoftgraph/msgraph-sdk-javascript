import {PrintTaskTriggerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskTriggerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskTriggerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskTriggerCollectionResponse();
}
