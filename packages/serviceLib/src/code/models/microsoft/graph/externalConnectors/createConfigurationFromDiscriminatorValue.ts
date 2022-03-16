import {Configuration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Configuration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Configuration();
}
