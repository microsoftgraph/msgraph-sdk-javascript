import {AlertDetection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertDetectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertDetection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertDetection();
}
