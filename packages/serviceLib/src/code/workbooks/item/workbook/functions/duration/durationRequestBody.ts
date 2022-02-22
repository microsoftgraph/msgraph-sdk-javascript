import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DurationRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _basis?: Json | undefined;
    private _coupon?: Json | undefined;
    private _frequency?: Json | undefined;
    private _maturity?: Json | undefined;
    private _settlement?: Json | undefined;
    private _yld?: Json | undefined;
    /**
     * Instantiates a new durationRequestBody and sets the default values.
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
     * Gets the coupon property value. 
     * @returns a Json
     */
    public get coupon() {
        return this._coupon;
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
     * Gets the settlement property value. 
     * @returns a Json
     */
    public get settlement() {
        return this._settlement;
    };
    /**
     * Gets the yld property value. 
     * @returns a Json
     */
    public get yld() {
        return this._yld;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["basis", (o, n) => { (o as unknown as DurationRequestBody).basis = n.getObjectValue<Json>(Json); }],
            ["coupon", (o, n) => { (o as unknown as DurationRequestBody).coupon = n.getObjectValue<Json>(Json); }],
            ["frequency", (o, n) => { (o as unknown as DurationRequestBody).frequency = n.getObjectValue<Json>(Json); }],
            ["maturity", (o, n) => { (o as unknown as DurationRequestBody).maturity = n.getObjectValue<Json>(Json); }],
            ["settlement", (o, n) => { (o as unknown as DurationRequestBody).settlement = n.getObjectValue<Json>(Json); }],
            ["yld", (o, n) => { (o as unknown as DurationRequestBody).yld = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("coupon", this.coupon);
        writer.writeObjectValue<Json>("frequency", this.frequency);
        writer.writeObjectValue<Json>("maturity", this.maturity);
        writer.writeObjectValue<Json>("settlement", this.settlement);
        writer.writeObjectValue<Json>("yld", this.yld);
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
     * Sets the coupon property value. 
     * @param value Value to set for the coupon property.
     */
    public set coupon(value: Json | undefined) {
        this._coupon = value;
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
     * Sets the settlement property value. 
     * @param value Value to set for the settlement property.
     */
    public set settlement(value: Json | undefined) {
        this._settlement = value;
    };
    /**
     * Sets the yld property value. 
     * @param value Value to set for the yld property.
     */
    public set yld(value: Json | undefined) {
        this._yld = value;
    };
}
