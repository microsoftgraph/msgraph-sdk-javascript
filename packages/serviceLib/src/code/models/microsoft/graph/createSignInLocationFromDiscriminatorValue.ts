import {SignInLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInLocation();
}
