import {CurrencyColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCurrencyColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : CurrencyColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CurrencyColumn();
}
