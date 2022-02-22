import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MirrRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _financeRate?: Json | undefined;
    private _reinvestRate?: Json | undefined;
    private _values?: Json | undefined;
    /**
     * Instantiates a new mirrRequestBody and sets the default values.
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
     * Gets the financeRate property value. 
     * @returns a Json
     */
    public get financeRate() {
        return this._financeRate;
    };
    /**
     * Gets the reinvestRate property value. 
     * @returns a Json
     */
    public get reinvestRate() {
        return this._reinvestRate;
    };
    /**
     * Gets the values property value. 
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["financeRate", (o, n) => { (o as unknown as MirrRequestBody).financeRate = n.getObjectValue<Json>(Json); }],
            ["reinvestRate", (o, n) => { (o as unknown as MirrRequestBody).reinvestRate = n.getObjectValue<Json>(Json); }],
            ["values", (o, n) => { (o as unknown as MirrRequestBody).values = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("financeRate", this.financeRate);
        writer.writeObjectValue<Json>("reinvestRate", this.reinvestRate);
        writer.writeObjectValue<Json>("values", this.values);
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
     * Sets the financeRate property value. 
     * @param value Value to set for the financeRate property.
     */
    public set financeRate(value: Json | undefined) {
        this._financeRate = value;
    };
    /**
     * Sets the reinvestRate property value. 
     * @param value Value to set for the reinvestRate property.
     */
    public set reinvestRate(value: Json | undefined) {
        this._reinvestRate = value;
    };
    /**
     * Sets the values property value. 
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
