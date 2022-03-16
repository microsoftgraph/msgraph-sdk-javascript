import {FavoriteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoriteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FavoriteResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FavoriteResponse();
}
