import {ApplicationTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationTemplate();
}
