import {RegistryKeyState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryKeyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistryKeyState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistryKeyState();
}
