import {EmployeeOrgData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmployeeOrgDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmployeeOrgData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmployeeOrgData();
}
