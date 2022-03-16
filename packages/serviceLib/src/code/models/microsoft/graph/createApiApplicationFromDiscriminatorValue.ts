import {ApiApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApiApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApiApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApiApplication();
}
