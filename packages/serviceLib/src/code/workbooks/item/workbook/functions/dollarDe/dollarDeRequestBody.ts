import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DollarDeRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _fraction?: Json | undefined;
    private _fractionalDollar?: Json | undefined;
    /**
     * Instantiates a new dollarDeRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the fraction property value. 
     * @returns a Json
     */
    public get fraction() {
        return this._fraction;
    };
    /**
     * Gets the fractionalDollar property value. 
     * @returns a Json
     */
    public get fractionalDollar() {
        return this._fractionalDollar;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["fraction", (o, n) => { (o as unknown as DollarDeRequestBody).fraction = n.getObjectValue<Json>(Json); }],
            ["fractionalDollar", (o, n) => { (o as unknown as DollarDeRequestBody).fractionalDollar = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("fraction", this.fraction);
        writer.writeObjectValue<Json>("fractionalDollar", this.fractionalDollar);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the fraction property value. 
     * @param value Value to set for the fraction property.
     */
    public set fraction(value: Json | undefined) {
        this._fraction = value;
    };
    /**
     * Sets the fractionalDollar property value. 
     * @param value Value to set for the fractionalDollar property.
     */
    public set fractionalDollar(value: Json | undefined) {
        this._fractionalDollar = value;
    };
}
