import {FavoriteRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoriteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FavoriteRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FavoriteRequestBody();
}
