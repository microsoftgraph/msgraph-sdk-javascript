import {ConfigurationManagerClientEnabledFeatures} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationManagerClientEnabledFeatures {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationManagerClientEnabledFeatures();
}
