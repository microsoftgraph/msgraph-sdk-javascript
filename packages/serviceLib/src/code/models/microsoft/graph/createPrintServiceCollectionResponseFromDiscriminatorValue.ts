import {PrintServiceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintServiceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintServiceCollectionResponse();
}
