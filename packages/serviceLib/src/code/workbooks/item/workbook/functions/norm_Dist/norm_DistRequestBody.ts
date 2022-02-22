import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Norm_DistRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _cumulative?: Json | undefined;
    private _mean?: Json | undefined;
    private _standardDev?: Json | undefined;
    private _x?: Json | undefined;
    /**
     * Instantiates a new norm_DistRequestBody and sets the default values.
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
     * Gets the cumulative property value. 
     * @returns a Json
     */
    public get cumulative() {
        return this._cumulative;
    };
    /**
     * Gets the mean property value. 
     * @returns a Json
     */
    public get mean() {
        return this._mean;
    };
    /**
     * Gets the standardDev property value. 
     * @returns a Json
     */
    public get standardDev() {
        return this._standardDev;
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
            ["cumulative", (o, n) => { (o as unknown as Norm_DistRequestBody).cumulative = n.getObjectValue<Json>(Json); }],
            ["mean", (o, n) => { (o as unknown as Norm_DistRequestBody).mean = n.getObjectValue<Json>(Json); }],
            ["standardDev", (o, n) => { (o as unknown as Norm_DistRequestBody).standardDev = n.getObjectValue<Json>(Json); }],
            ["x", (o, n) => { (o as unknown as Norm_DistRequestBody).x = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("cumulative", this.cumulative);
        writer.writeObjectValue<Json>("mean", this.mean);
        writer.writeObjectValue<Json>("standardDev", this.standardDev);
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
     * Sets the cumulative property value. 
     * @param value Value to set for the cumulative property.
     */
    public set cumulative(value: Json | undefined) {
        this._cumulative = value;
    };
    /**
     * Sets the mean property value. 
     * @param value Value to set for the mean property.
     */
    public set mean(value: Json | undefined) {
        this._mean = value;
    };
    /**
     * Sets the standardDev property value. 
     * @param value Value to set for the standardDev property.
     */
    public set standardDev(value: Json | undefined) {
        this._standardDev = value;
    };
    /**
     * Sets the x property value. 
     * @param value Value to set for the x property.
     */
    public set x(value: Json | undefined) {
        this._x = value;
    };
}
