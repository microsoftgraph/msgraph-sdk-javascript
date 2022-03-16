import {AlteredQueryToken} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlteredQueryTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlteredQueryToken {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlteredQueryToken();
}
