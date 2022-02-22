import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LogNorm_InvRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _mean?: Json | undefined;
    private _probability?: Json | undefined;
    private _standardDev?: Json | undefined;
    /**
     * Instantiates a new logNorm_InvRequestBody and sets the default values.
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
     * Gets the mean property value. 
     * @returns a Json
     */
    public get mean() {
        return this._mean;
    };
    /**
     * Gets the probability property value. 
     * @returns a Json
     */
    public get probability() {
        return this._probability;
    };
    /**
     * Gets the standardDev property value. 
     * @returns a Json
     */
    public get standardDev() {
        return this._standardDev;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["mean", (o, n) => { (o as unknown as LogNorm_InvRequestBody).mean = n.getObjectValue<Json>(Json); }],
            ["probability", (o, n) => { (o as unknown as LogNorm_InvRequestBody).probability = n.getObjectValue<Json>(Json); }],
            ["standardDev", (o, n) => { (o as unknown as LogNorm_InvRequestBody).standardDev = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("mean", this.mean);
        writer.writeObjectValue<Json>("probability", this.probability);
        writer.writeObjectValue<Json>("standardDev", this.standardDev);
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
     * Sets the mean property value. 
     * @param value Value to set for the mean property.
     */
    public set mean(value: Json | undefined) {
        this._mean = value;
    };
    /**
     * Sets the probability property value. 
     * @param value Value to set for the probability property.
     */
    public set probability(value: Json | undefined) {
        this._probability = value;
    };
    /**
     * Sets the standardDev property value. 
     * @param value Value to set for the standardDev property.
     */
    public set standardDev(value: Json | undefined) {
        this._standardDev = value;
    };
}
