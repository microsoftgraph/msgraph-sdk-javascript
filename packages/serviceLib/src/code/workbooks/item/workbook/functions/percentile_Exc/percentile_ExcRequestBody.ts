import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Percentile_ExcRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _array?: Json | undefined;
    private _k?: Json | undefined;
    /**
     * Instantiates a new percentile_ExcRequestBody and sets the default values.
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
     * Gets the array property value. 
     * @returns a Json
     */
    public get array() {
        return this._array;
    };
    /**
     * Gets the k property value. 
     * @returns a Json
     */
    public get k() {
        return this._k;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["array", (o, n) => { (o as unknown as Percentile_ExcRequestBody).array = n.getObjectValue<Json>(Json); }],
            ["k", (o, n) => { (o as unknown as Percentile_ExcRequestBody).k = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("array", this.array);
        writer.writeObjectValue<Json>("k", this.k);
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
     * Sets the array property value. 
     * @param value Value to set for the array property.
     */
    public set array(value: Json | undefined) {
        this._array = value;
    };
    /**
     * Sets the k property value. 
     * @param value Value to set for the k property.
     */
    public set k(value: Json | undefined) {
        this._k = value;
    };
}
