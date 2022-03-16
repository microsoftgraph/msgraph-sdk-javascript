import {ODataError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createODataErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ODataError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ODataError();
}
