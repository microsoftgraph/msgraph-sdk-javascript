import {PrintJobConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintJobConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintJobConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintJobConfiguration();
}
