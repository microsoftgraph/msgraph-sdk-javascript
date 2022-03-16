import {ApiAuthenticationConfigurationBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApiAuthenticationConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApiAuthenticationConfigurationBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApiAuthenticationConfigurationBase();
}
