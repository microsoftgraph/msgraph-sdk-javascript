import {InternetMessageHeader} from './internetMessageHeader';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternetMessageHeaderFromDiscriminatorValue(parseNode: ParseNode | undefined) : InternetMessageHeader {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InternetMessageHeader();
}
