import {ServiceHealth} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealth {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealth();
}
