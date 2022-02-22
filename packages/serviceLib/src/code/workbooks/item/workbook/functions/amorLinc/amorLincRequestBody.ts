import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AmorLincRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _basis?: Json | undefined;
    private _cost?: Json | undefined;
    private _datePurchased?: Json | undefined;
    private _firstPeriod?: Json | undefined;
    private _period?: Json | undefined;
    private _rate?: Json | undefined;
    private _salvage?: Json | undefined;
    /**
     * Instantiates a new amorLincRequestBody and sets the default values.
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
     * Gets the basis property value. 
     * @returns a Json
     */
    public get basis() {
        return this._basis;
    };
    /**
     * Gets the cost property value. 
     * @returns a Json
     */
    public get cost() {
        return this._cost;
    };
    /**
     * Gets the datePurchased property value. 
     * @returns a Json
     */
    public get datePurchased() {
        return this._datePurchased;
    };
    /**
     * Gets the firstPeriod property value. 
     * @returns a Json
     */
    public get firstPeriod() {
        return this._firstPeriod;
    };
    /**
     * Gets the period property value. 
     * @returns a Json
     */
    public get period() {
        return this._period;
    };
    /**
     * Gets the rate property value. 
     * @returns a Json
     */
    public get rate() {
        return this._rate;
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
            ["basis", (o, n) => { (o as unknown as AmorLincRequestBody).basis = n.getObjectValue<Json>(Json); }],
            ["cost", (o, n) => { (o as unknown as AmorLincRequestBody).cost = n.getObjectValue<Json>(Json); }],
            ["datePurchased", (o, n) => { (o as unknown as AmorLincRequestBody).datePurchased = n.getObjectValue<Json>(Json); }],
            ["firstPeriod", (o, n) => { (o as unknown as AmorLincRequestBody).firstPeriod = n.getObjectValue<Json>(Json); }],
            ["period", (o, n) => { (o as unknown as AmorLincRequestBody).period = n.getObjectValue<Json>(Json); }],
            ["rate", (o, n) => { (o as unknown as AmorLincRequestBody).rate = n.getObjectValue<Json>(Json); }],
            ["salvage", (o, n) => { (o as unknown as AmorLincRequestBody).salvage = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("cost", this.cost);
        writer.writeObjectValue<Json>("datePurchased", this.datePurchased);
        writer.writeObjectValue<Json>("firstPeriod", this.firstPeriod);
        writer.writeObjectValue<Json>("period", this.period);
        writer.writeObjectValue<Json>("rate", this.rate);
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
     * Sets the basis property value. 
     * @param value Value to set for the basis property.
     */
    public set basis(value: Json | undefined) {
        this._basis = value;
    };
    /**
     * Sets the cost property value. 
     * @param value Value to set for the cost property.
     */
    public set cost(value: Json | undefined) {
        this._cost = value;
    };
    /**
     * Sets the datePurchased property value. 
     * @param value Value to set for the datePurchased property.
     */
    public set datePurchased(value: Json | undefined) {
        this._datePurchased = value;
    };
    /**
     * Sets the firstPeriod property value. 
     * @param value Value to set for the firstPeriod property.
     */
    public set firstPeriod(value: Json | undefined) {
        this._firstPeriod = value;
    };
    /**
     * Sets the period property value. 
     * @param value Value to set for the period property.
     */
    public set period(value: Json | undefined) {
        this._period = value;
    };
    /**
     * Sets the rate property value. 
     * @param value Value to set for the rate property.
     */
    public set rate(value: Json | undefined) {
        this._rate = value;
    };
    /**
     * Sets the salvage property value. 
     * @param value Value to set for the salvage property.
     */
    public set salvage(value: Json | undefined) {
        this._salvage = value;
    };
}
