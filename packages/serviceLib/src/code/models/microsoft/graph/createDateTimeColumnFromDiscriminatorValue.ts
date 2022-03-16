import {DateTimeColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDateTimeColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : DateTimeColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DateTimeColumn();
}
