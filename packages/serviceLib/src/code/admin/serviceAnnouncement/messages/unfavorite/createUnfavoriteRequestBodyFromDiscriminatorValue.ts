import {UnfavoriteRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoriteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnfavoriteRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnfavoriteRequestBody();
}
