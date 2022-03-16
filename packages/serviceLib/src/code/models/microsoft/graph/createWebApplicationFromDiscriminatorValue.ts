import {WebApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebApplication();
}
