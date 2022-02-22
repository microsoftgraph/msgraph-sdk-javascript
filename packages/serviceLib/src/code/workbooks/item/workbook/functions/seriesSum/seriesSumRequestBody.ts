import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SeriesSumRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _coefficients?: Json | undefined;
    private _m?: Json | undefined;
    private _n?: Json | undefined;
    private _x?: Json | undefined;
    /**
     * Instantiates a new seriesSumRequestBody and sets the default values.
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
     * Gets the coefficients property value. 
     * @returns a Json
     */
    public get coefficients() {
        return this._coefficients;
    };
    /**
     * Gets the m property value. 
     * @returns a Json
     */
    public get m() {
        return this._m;
    };
    /**
     * Gets the n property value. 
     * @returns a Json
     */
    public get n() {
        return this._n;
    };
    /**
     * Gets the x property value. 
     * @returns a Json
     */
    public get x() {
        return this._x;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["coefficients", (o, n) => { (o as unknown as SeriesSumRequestBody).coefficients = n.getObjectValue<Json>(Json); }],
            ["m", (o, n) => { (o as unknown as SeriesSumRequestBody).m = n.getObjectValue<Json>(Json); }],
            ["n", (o, n) => { (o as unknown as SeriesSumRequestBody).n = n.getObjectValue<Json>(Json); }],
            ["x", (o, n) => { (o as unknown as SeriesSumRequestBody).x = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("coefficients", this.coefficients);
        writer.writeObjectValue<Json>("m", this.m);
        writer.writeObjectValue<Json>("n", this.n);
        writer.writeObjectValue<Json>("x", this.x);
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
     * Sets the coefficients property value. 
     * @param value Value to set for the coefficients property.
     */
    public set coefficients(value: Json | undefined) {
        this._coefficients = value;
    };
    /**
     * Sets the m property value. 
     * @param value Value to set for the m property.
     */
    public set m(value: Json | undefined) {
        this._m = value;
    };
    /**
     * Sets the n property value. 
     * @param value Value to set for the n property.
     */
    public set n(value: Json | undefined) {
        this._n = value;
    };
    /**
     * Sets the x property value. 
     * @param value Value to set for the x property.
     */
    public set x(value: Json | undefined) {
        this._x = value;
    };
}
