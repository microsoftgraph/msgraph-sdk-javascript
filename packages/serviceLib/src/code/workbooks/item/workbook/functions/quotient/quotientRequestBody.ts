import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class QuotientRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _denominator?: Json | undefined;
    private _numerator?: Json | undefined;
    /**
     * Instantiates a new quotientRequestBody and sets the default values.
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
     * Gets the denominator property value. 
     * @returns a Json
     */
    public get denominator() {
        return this._denominator;
    };
    /**
     * Gets the numerator property value. 
     * @returns a Json
     */
    public get numerator() {
        return this._numerator;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["denominator", (o, n) => { (o as unknown as QuotientRequestBody).denominator = n.getObjectValue<Json>(Json); }],
            ["numerator", (o, n) => { (o as unknown as QuotientRequestBody).numerator = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("denominator", this.denominator);
        writer.writeObjectValue<Json>("numerator", this.numerator);
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
     * Sets the denominator property value. 
     * @param value Value to set for the denominator property.
     */
    public set denominator(value: Json | undefined) {
        this._denominator = value;
    };
    /**
     * Sets the numerator property value. 
     * @param value Value to set for the numerator property.
     */
    public set numerator(value: Json | undefined) {
        this._numerator = value;
    };
}
