import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReceivedRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _basis?: Json | undefined;
    private _discount?: Json | undefined;
    private _investment?: Json | undefined;
    private _maturity?: Json | undefined;
    private _settlement?: Json | undefined;
    /**
     * Instantiates a new receivedRequestBody and sets the default values.
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
     * Gets the discount property value. 
     * @returns a Json
     */
    public get discount() {
        return this._discount;
    };
    /**
     * Gets the investment property value. 
     * @returns a Json
     */
    public get investment() {
        return this._investment;
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
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["basis", (o, n) => { (o as unknown as ReceivedRequestBody).basis = n.getObjectValue<Json>(Json); }],
            ["discount", (o, n) => { (o as unknown as ReceivedRequestBody).discount = n.getObjectValue<Json>(Json); }],
            ["investment", (o, n) => { (o as unknown as ReceivedRequestBody).investment = n.getObjectValue<Json>(Json); }],
            ["maturity", (o, n) => { (o as unknown as ReceivedRequestBody).maturity = n.getObjectValue<Json>(Json); }],
            ["settlement", (o, n) => { (o as unknown as ReceivedRequestBody).settlement = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("discount", this.discount);
        writer.writeObjectValue<Json>("investment", this.investment);
        writer.writeObjectValue<Json>("maturity", this.maturity);
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
     * Sets the discount property value. 
     * @param value Value to set for the discount property.
     */
    public set discount(value: Json | undefined) {
        this._discount = value;
    };
    /**
     * Sets the investment property value. 
     * @param value Value to set for the investment property.
     */
    public set investment(value: Json | undefined) {
        this._investment = value;
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
}
