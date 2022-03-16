import {FreeBusyError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFreeBusyErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : FreeBusyError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FreeBusyError();
}
