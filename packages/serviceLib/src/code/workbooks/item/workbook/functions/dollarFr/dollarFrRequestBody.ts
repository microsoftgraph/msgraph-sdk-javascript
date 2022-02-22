import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DollarFrRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _decimalDollar?: Json | undefined;
    private _fraction?: Json | undefined;
    /**
     * Instantiates a new dollarFrRequestBody and sets the default values.
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
     * Gets the decimalDollar property value. 
     * @returns a Json
     */
    public get decimalDollar() {
        return this._decimalDollar;
    };
    /**
     * Gets the fraction property value. 
     * @returns a Json
     */
    public get fraction() {
        return this._fraction;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["decimalDollar", (o, n) => { (o as unknown as DollarFrRequestBody).decimalDollar = n.getObjectValue<Json>(Json); }],
            ["fraction", (o, n) => { (o as unknown as DollarFrRequestBody).fraction = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("decimalDollar", this.decimalDollar);
        writer.writeObjectValue<Json>("fraction", this.fraction);
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
     * Sets the decimalDollar property value. 
     * @param value Value to set for the decimalDollar property.
     */
    public set decimalDollar(value: Json | undefined) {
        this._decimalDollar = value;
    };
    /**
     * Sets the fraction property value. 
     * @param value Value to set for the fraction property.
     */
    public set fraction(value: Json | undefined) {
        this._fraction = value;
    };
}
