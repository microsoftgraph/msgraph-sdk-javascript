import {AuthoredNoteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthoredNoteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthoredNoteCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthoredNoteCollectionResponse();
}
