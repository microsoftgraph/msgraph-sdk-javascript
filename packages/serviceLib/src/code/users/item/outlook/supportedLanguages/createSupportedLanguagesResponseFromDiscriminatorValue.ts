import {SupportedLanguagesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedLanguagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportedLanguagesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportedLanguagesResponse();
}
