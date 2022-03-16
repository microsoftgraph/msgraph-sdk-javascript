import {AllowedCalendarSharingRolesWithUserResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllowedCalendarSharingRolesWithUserResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllowedCalendarSharingRolesWithUserResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllowedCalendarSharingRolesWithUserResponse();
}
