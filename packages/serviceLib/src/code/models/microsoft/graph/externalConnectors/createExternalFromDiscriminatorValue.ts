import {External} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalFromDiscriminatorValue(parseNode: ParseNode | undefined) : External {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new External();
}
