import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EffectRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _nominalRate?: Json | undefined;
    private _npery?: Json | undefined;
    /**
     * Instantiates a new effectRequestBody and sets the default values.
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
     * Gets the nominalRate property value. 
     * @returns a Json
     */
    public get nominalRate() {
        return this._nominalRate;
    };
    /**
     * Gets the npery property value. 
     * @returns a Json
     */
    public get npery() {
        return this._npery;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["nominalRate", (o, n) => { (o as unknown as EffectRequestBody).nominalRate = n.getObjectValue<Json>(Json); }],
            ["npery", (o, n) => { (o as unknown as EffectRequestBody).npery = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("nominalRate", this.nominalRate);
        writer.writeObjectValue<Json>("npery", this.npery);
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
     * Sets the nominalRate property value. 
     * @param value Value to set for the nominalRate property.
     */
    public set nominalRate(value: Json | undefined) {
        this._nominalRate = value;
    };
    /**
     * Sets the npery property value. 
     * @param value Value to set for the npery property.
     */
    public set npery(value: Json | undefined) {
        this._npery = value;
    };
}
