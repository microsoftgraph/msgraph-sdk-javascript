import {UserFlowLanguageConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowLanguageConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowLanguageConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowLanguageConfiguration();
}
