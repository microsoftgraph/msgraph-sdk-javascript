import {ResultTemplateDictionary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultTemplateDictionaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResultTemplateDictionary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResultTemplateDictionary();
}
