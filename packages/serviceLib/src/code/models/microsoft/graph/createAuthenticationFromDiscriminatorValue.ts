import {Authentication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Authentication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Authentication();
}
