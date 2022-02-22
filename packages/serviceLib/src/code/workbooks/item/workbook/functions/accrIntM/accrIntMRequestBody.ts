import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccrIntMRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _basis?: Json | undefined;
    private _issue?: Json | undefined;
    private _par?: Json | undefined;
    private _rate?: Json | undefined;
    private _settlement?: Json | undefined;
    /**
     * Instantiates a new accrIntMRequestBody and sets the default values.
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
     * Gets the issue property value. 
     * @returns a Json
     */
    public get issue() {
        return this._issue;
    };
    /**
     * Gets the par property value. 
     * @returns a Json
     */
    public get par() {
        return this._par;
    };
    /**
     * Gets the rate property value. 
     * @returns a Json
     */
    public get rate() {
        return this._rate;
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
            ["basis", (o, n) => { (o as unknown as AccrIntMRequestBody).basis = n.getObjectValue<Json>(Json); }],
            ["issue", (o, n) => { (o as unknown as AccrIntMRequestBody).issue = n.getObjectValue<Json>(Json); }],
            ["par", (o, n) => { (o as unknown as AccrIntMRequestBody).par = n.getObjectValue<Json>(Json); }],
            ["rate", (o, n) => { (o as unknown as AccrIntMRequestBody).rate = n.getObjectValue<Json>(Json); }],
            ["settlement", (o, n) => { (o as unknown as AccrIntMRequestBody).settlement = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("issue", this.issue);
        writer.writeObjectValue<Json>("par", this.par);
        writer.writeObjectValue<Json>("rate", this.rate);
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
     * Sets the issue property value. 
     * @param value Value to set for the issue property.
     */
    public set issue(value: Json | undefined) {
        this._issue = value;
    };
    /**
     * Sets the par property value. 
     * @param value Value to set for the par property.
     */
    public set par(value: Json | undefined) {
        this._par = value;
    };
    /**
     * Sets the rate property value. 
     * @param value Value to set for the rate property.
     */
    public set rate(value: Json | undefined) {
        this._rate = value;
    };
    /**
     * Sets the settlement property value. 
     * @param value Value to set for the settlement property.
     */
    public set settlement(value: Json | undefined) {
        this._settlement = value;
    };
}
