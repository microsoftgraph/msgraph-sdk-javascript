import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DdbRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _cost?: Json | undefined;
    private _factor?: Json | undefined;
    private _life?: Json | undefined;
    private _period?: Json | undefined;
    private _salvage?: Json | undefined;
    /**
     * Instantiates a new ddbRequestBody and sets the default values.
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
     * Gets the cost property value. 
     * @returns a Json
     */
    public get cost() {
        return this._cost;
    };
    /**
     * Gets the factor property value. 
     * @returns a Json
     */
    public get factor() {
        return this._factor;
    };
    /**
     * Gets the life property value. 
     * @returns a Json
     */
    public get life() {
        return this._life;
    };
    /**
     * Gets the period property value. 
     * @returns a Json
     */
    public get period() {
        return this._period;
    };
    /**
     * Gets the salvage property value. 
     * @returns a Json
     */
    public get salvage() {
        return this._salvage;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["cost", (o, n) => { (o as unknown as DdbRequestBody).cost = n.getObjectValue<Json>(Json); }],
            ["factor", (o, n) => { (o as unknown as DdbRequestBody).factor = n.getObjectValue<Json>(Json); }],
            ["life", (o, n) => { (o as unknown as DdbRequestBody).life = n.getObjectValue<Json>(Json); }],
            ["period", (o, n) => { (o as unknown as DdbRequestBody).period = n.getObjectValue<Json>(Json); }],
            ["salvage", (o, n) => { (o as unknown as DdbRequestBody).salvage = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("cost", this.cost);
        writer.writeObjectValue<Json>("factor", this.factor);
        writer.writeObjectValue<Json>("life", this.life);
        writer.writeObjectValue<Json>("period", this.period);
        writer.writeObjectValue<Json>("salvage", this.salvage);
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
     * Sets the cost property value. 
     * @param value Value to set for the cost property.
     */
    public set cost(value: Json | undefined) {
        this._cost = value;
    };
    /**
     * Sets the factor property value. 
     * @param value Value to set for the factor property.
     */
    public set factor(value: Json | undefined) {
        this._factor = value;
    };
    /**
     * Sets the life property value. 
     * @param value Value to set for the life property.
     */
    public set life(value: Json | undefined) {
        this._life = value;
    };
    /**
     * Sets the period property value. 
     * @param value Value to set for the period property.
     */
    public set period(value: Json | undefined) {
        this._period = value;
    };
    /**
     * Sets the salvage property value. 
     * @param value Value to set for the salvage property.
     */
    public set salvage(value: Json | undefined) {
        this._salvage = value;
    };
}
