import {GetTeamsUserActivityUserDetailWithDateResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsUserActivityUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsUserActivityUserDetailWithDateResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsUserActivityUserDetailWithDateResponse();
}
