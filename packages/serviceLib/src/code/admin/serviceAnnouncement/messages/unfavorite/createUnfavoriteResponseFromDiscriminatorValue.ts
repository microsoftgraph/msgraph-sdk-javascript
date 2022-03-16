import {UnfavoriteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoriteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnfavoriteResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnfavoriteResponse();
}
