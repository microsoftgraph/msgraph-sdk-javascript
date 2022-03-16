import {SubjectSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectSet();
}
