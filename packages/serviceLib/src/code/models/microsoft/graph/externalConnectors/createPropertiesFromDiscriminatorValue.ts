import {Properties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Properties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Properties();
}
