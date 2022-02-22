import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PpmtRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _fv?: Json | undefined;
    private _nper?: Json | undefined;
    private _per?: Json | undefined;
    private _pv?: Json | undefined;
    private _rate?: Json | undefined;
    private _type?: Json | undefined;
    /**
     * Instantiates a new ppmtRequestBody and sets the default values.
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
     * Gets the fv property value. 
     * @returns a Json
     */
    public get fv() {
        return this._fv;
    };
    /**
     * Gets the nper property value. 
     * @returns a Json
     */
    public get nper() {
        return this._nper;
    };
    /**
     * Gets the per property value. 
     * @returns a Json
     */
    public get per() {
        return this._per;
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
            ["fv", (o, n) => { (o as unknown as PpmtRequestBody).fv = n.getObjectValue<Json>(Json); }],
            ["nper", (o, n) => { (o as unknown as PpmtRequestBody).nper = n.getObjectValue<Json>(Json); }],
            ["per", (o, n) => { (o as unknown as PpmtRequestBody).per = n.getObjectValue<Json>(Json); }],
            ["pv", (o, n) => { (o as unknown as PpmtRequestBody).pv = n.getObjectValue<Json>(Json); }],
            ["rate", (o, n) => { (o as unknown as PpmtRequestBody).rate = n.getObjectValue<Json>(Json); }],
            ["type", (o, n) => { (o as unknown as PpmtRequestBody).type = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("fv", this.fv);
        writer.writeObjectValue<Json>("nper", this.nper);
        writer.writeObjectValue<Json>("per", this.per);
        writer.writeObjectValue<Json>("pv", this.pv);
        writer.writeObjectValue<Json>("rate", this.rate);
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
     * Sets the fv property value. 
     * @param value Value to set for the fv property.
     */
    public set fv(value: Json | undefined) {
        this._fv = value;
    };
    /**
     * Sets the nper property value. 
     * @param value Value to set for the nper property.
     */
    public set nper(value: Json | undefined) {
        this._nper = value;
    };
    /**
     * Sets the per property value. 
     * @param value Value to set for the per property.
     */
    public set per(value: Json | undefined) {
        this._per = value;
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
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: Json | undefined) {
        this._type = value;
    };
}
