import {MainError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMainErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : MainError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MainError();
}
