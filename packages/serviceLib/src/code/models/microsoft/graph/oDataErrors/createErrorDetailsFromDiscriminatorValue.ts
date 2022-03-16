import {ErrorDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErrorDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ErrorDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ErrorDetails();
}
