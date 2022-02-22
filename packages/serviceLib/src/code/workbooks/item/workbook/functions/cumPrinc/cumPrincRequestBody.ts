import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CumPrincRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _endPeriod?: Json | undefined;
    private _nper?: Json | undefined;
    private _pv?: Json | undefined;
    private _rate?: Json | undefined;
    private _startPeriod?: Json | undefined;
    private _type?: Json | undefined;
    /**
     * Instantiates a new cumPrincRequestBody and sets the default values.
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
     * Gets the endPeriod property value. 
     * @returns a Json
     */
    public get endPeriod() {
        return this._endPeriod;
    };
    /**
     * Gets the nper property value. 
     * @returns a Json
     */
    public get nper() {
        return this._nper;
    };
    /**
     * Gets the pv property value. 
     * @returns a Json
     */
    public get pv() {
        return this._pv;
    };
    /**
     * Gets the rate property value. 
     * @returns a Json
     */
    public get rate() {
        return this._rate;
    };
    /**
     * Gets the startPeriod property value. 
     * @returns a Json
     */
    public get startPeriod() {
        return this._startPeriod;
    };
    /**
     * Gets the type property value. 
     * @returns a Json
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endPeriod", (o, n) => { (o as unknown as CumPrincRequestBody).endPeriod = n.getObjectValue<Json>(Json); }],
            ["nper", (o, n) => { (o as unknown as CumPrincRequestBody).nper = n.getObjectValue<Json>(Json); }],
            ["pv", (o, n) => { (o as unknown as CumPrincRequestBody).pv = n.getObjectValue<Json>(Json); }],
            ["rate", (o, n) => { (o as unknown as CumPrincRequestBody).rate = n.getObjectValue<Json>(Json); }],
            ["startPeriod", (o, n) => { (o as unknown as CumPrincRequestBody).startPeriod = n.getObjectValue<Json>(Json); }],
            ["type", (o, n) => { (o as unknown as CumPrincRequestBody).type = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("endPeriod", this.endPeriod);
        writer.writeObjectValue<Json>("nper", this.nper);
        writer.writeObjectValue<Json>("pv", this.pv);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("startPeriod", this.startPeriod);
        writer.writeObjectValue<Json>("type", this.type);
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
     * Sets the endPeriod property value. 
     * @param value Value to set for the endPeriod property.
     */
    public set endPeriod(value: Json | undefined) {
        this._endPeriod = value;
    };
    /**
     * Sets the nper property value. 
     * @param value Value to set for the nper property.
     */
    public set nper(value: Json | undefined) {
        this._nper = value;
    };
    /**
     * Sets the pv property value. 
     * @param value Value to set for the pv property.
     */
    public set pv(value: Json | undefined) {
        this._pv = value;
    };
    /**
     * Sets the rate property value. 
     * @param value Value to set for the rate property.
     */
    public set rate(value: Json | undefined) {
        this._rate = value;
    };
    /**
     * Sets the startPeriod property value. 
     * @param value Value to set for the startPeriod property.
     */
    public set startPeriod(value: Json | undefined) {
        this._startPeriod = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: Json | undefined) {
        this._type = value;
    };
}
