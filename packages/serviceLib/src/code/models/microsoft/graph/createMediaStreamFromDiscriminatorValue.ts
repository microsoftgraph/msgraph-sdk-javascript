import {MediaStream} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaStreamFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaStream {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaStream();
}
