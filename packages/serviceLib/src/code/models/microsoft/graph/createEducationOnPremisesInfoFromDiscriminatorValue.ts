import {EducationOnPremisesInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOnPremisesInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOnPremisesInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationOnPremisesInfo();
}
