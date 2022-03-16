import {PrintTaskDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskDefinition();
}
