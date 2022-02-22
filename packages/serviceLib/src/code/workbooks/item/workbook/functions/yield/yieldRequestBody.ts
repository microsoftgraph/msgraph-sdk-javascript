import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class YieldRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _basis?: Json | undefined;
    private _frequency?: Json | undefined;
    private _maturity?: Json | undefined;
    private _pr?: Json | undefined;
    private _rate?: Json | undefined;
    private _redemption?: Json | undefined;
    private _settlement?: Json | undefined;
    /**
     * Instantiates a new yieldRequestBody and sets the default values.
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
     * Gets the frequency property value. 
     * @returns a Json
     */
    public get frequency() {
        return this._frequency;
    };
    /**
     * Gets the maturity property value. 
     * @returns a Json
     */
    public get maturity() {
        return this._maturity;
    };
    /**
     * Gets the pr property value. 
     * @returns a Json
     */
    public get pr() {
        return this._pr;
    };
    /**
     * Gets the rate property value. 
     * @returns a Json
     */
    public get rate() {
        return this._rate;
    };
    /**
     * Gets the redemption property value. 
     * @returns a Json
     */
    public get redemption() {
        return this._redemption;
    };
    /**
     * Gets the settlement property value. 
     * @returns a Json
     */
    public get settlement() {
        return this._settlement;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["basis", (o, n) => { (o as unknown as YieldRequestBody).basis = n.getObjectValue<Json>(Json); }],
            ["frequency", (o, n) => { (o as unknown as YieldRequestBody).frequency = n.getObjectValue<Json>(Json); }],
            ["maturity", (o, n) => { (o as unknown as YieldRequestBody).maturity = n.getObjectValue<Json>(Json); }],
            ["pr", (o, n) => { (o as unknown as YieldRequestBody).pr = n.getObjectValue<Json>(Json); }],
            ["rate", (o, n) => { (o as unknown as YieldRequestBody).rate = n.getObjectValue<Json>(Json); }],
            ["redemption", (o, n) => { (o as unknown as YieldRequestBody).redemption = n.getObjectValue<Json>(Json); }],
            ["settlement", (o, n) => { (o as unknown as YieldRequestBody).settlement = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("frequency", this.frequency);
        writer.writeObjectValue<Json>("maturity", this.maturity);
        writer.writeObjectValue<Json>("pr", this.pr);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("redemption", this.redemption);
        writer.writeObjectValue<Json>("settlement", this.settlement);
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
     * Sets the frequency property value. 
     * @param value Value to set for the frequency property.
     */
    public set frequency(value: Json | undefined) {
        this._frequency = value;
    };
    /**
     * Sets the maturity property value. 
     * @param value Value to set for the maturity property.
     */
    public set maturity(value: Json | undefined) {
        this._maturity = value;
    };
    /**
     * Sets the pr property value. 
     * @param value Value to set for the pr property.
     */
    public set pr(value: Json | undefined) {
        this._pr = value;
    };
    /**
     * Sets the rate property value. 
     * @param value Value to set for the rate property.
     */
    public set rate(value: Json | undefined) {
        this._rate = value;
    };
    /**
     * Sets the redemption property value. 
     * @param value Value to set for the redemption property.
     */
    public set redemption(value: Json | undefined) {
        this._redemption = value;
    };
    /**
     * Sets the settlement property value. 
     * @param value Value to set for the settlement property.
     */
    public set settlement(value: Json | undefined) {
        this._settlement = value;
    };
}
