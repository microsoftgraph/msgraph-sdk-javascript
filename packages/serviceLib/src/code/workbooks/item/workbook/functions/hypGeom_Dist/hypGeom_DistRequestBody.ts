import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HypGeom_DistRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _cumulative?: Json | undefined;
    private _numberPop?: Json | undefined;
    private _numberSample?: Json | undefined;
    private _populationS?: Json | undefined;
    private _sampleS?: Json | undefined;
    /**
     * Instantiates a new hypGeom_DistRequestBody and sets the default values.
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
     * Gets the numberPop property value. 
     * @returns a Json
     */
    public get numberPop() {
        return this._numberPop;
    };
    /**
     * Gets the numberSample property value. 
     * @returns a Json
     */
    public get numberSample() {
        return this._numberSample;
    };
    /**
     * Gets the populationS property value. 
     * @returns a Json
     */
    public get populationS() {
        return this._populationS;
    };
    /**
     * Gets the sampleS property value. 
     * @returns a Json
     */
    public get sampleS() {
        return this._sampleS;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["cumulative", (o, n) => { (o as unknown as HypGeom_DistRequestBody).cumulative = n.getObjectValue<Json>(Json); }],
            ["numberPop", (o, n) => { (o as unknown as HypGeom_DistRequestBody).numberPop = n.getObjectValue<Json>(Json); }],
            ["numberSample", (o, n) => { (o as unknown as HypGeom_DistRequestBody).numberSample = n.getObjectValue<Json>(Json); }],
            ["populationS", (o, n) => { (o as unknown as HypGeom_DistRequestBody).populationS = n.getObjectValue<Json>(Json); }],
            ["sampleS", (o, n) => { (o as unknown as HypGeom_DistRequestBody).sampleS = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("cumulative", this.cumulative);
        writer.writeObjectValue<Json>("numberPop", this.numberPop);
        writer.writeObjectValue<Json>("numberSample", this.numberSample);
        writer.writeObjectValue<Json>("populationS", this.populationS);
        writer.writeObjectValue<Json>("sampleS", this.sampleS);
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
     * Sets the numberPop property value. 
     * @param value Value to set for the numberPop property.
     */
    public set numberPop(value: Json | undefined) {
        this._numberPop = value;
    };
    /**
     * Sets the numberSample property value. 
     * @param value Value to set for the numberSample property.
     */
    public set numberSample(value: Json | undefined) {
        this._numberSample = value;
    };
    /**
     * Sets the populationS property value. 
     * @param value Value to set for the populationS property.
     */
    public set populationS(value: Json | undefined) {
        this._populationS = value;
    };
    /**
     * Sets the sampleS property value. 
     * @param value Value to set for the sampleS property.
     */
    public set sampleS(value: Json | undefined) {
        this._sampleS = value;
    };
}
