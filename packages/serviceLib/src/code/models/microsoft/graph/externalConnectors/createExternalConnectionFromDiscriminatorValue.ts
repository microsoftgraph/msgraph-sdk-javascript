import {ExternalConnection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalConnection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalConnection();
}
