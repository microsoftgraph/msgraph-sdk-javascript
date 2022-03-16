import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCurrency extends Entity implements Parsable {
    /** The currency symbol. For example, the currency symbol for the US dollar and for the Australian dollar is $.  */
    private _symbol?: string | undefined;
    /**
     * Instantiates a new bookingCurrency and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["symbol", (o, n) => { (o as unknown as BookingCurrency).symbol = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("symbol", this.symbol);
    };
    /**
     * Gets the symbol property value. The currency symbol. For example, the currency symbol for the US dollar and for the Australian dollar is $.
     * @returns a string
     */
    public get symbol() {
        return this._symbol;
    };
    /**
     * Sets the symbol property value. The currency symbol. For example, the currency symbol for the US dollar and for the Australian dollar is $.
     * @param value Value to set for the symbol property.
     */
    public set symbol(value: string | undefined) {
        this._symbol = value;
    };
}
