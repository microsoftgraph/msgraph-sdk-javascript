import {PrintTaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskCollectionResponse();
}
