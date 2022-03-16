import {UserActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserActivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserActivity();
}
