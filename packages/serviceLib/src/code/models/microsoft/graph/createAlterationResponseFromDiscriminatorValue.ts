import {AlterationResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlterationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlterationResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlterationResponse();
}
