import {AnswerRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnswerRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnswerRequestBody();
}
