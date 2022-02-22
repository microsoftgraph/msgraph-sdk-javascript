import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SumIfRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _criteria?: Json | undefined;
    private _range?: Json | undefined;
    private _sumRange?: Json | undefined;
    /**
     * Instantiates a new sumIfRequestBody and sets the default values.
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
     * Gets the criteria property value. 
     * @returns a Json
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Gets the range property value. 
     * @returns a Json
     */
    public get range() {
        return this._range;
    };
    /**
     * Gets the sumRange property value. 
     * @returns a Json
     */
    public get sumRange() {
        return this._sumRange;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["criteria", (o, n) => { (o as unknown as SumIfRequestBody).criteria = n.getObjectValue<Json>(Json); }],
            ["range", (o, n) => { (o as unknown as SumIfRequestBody).range = n.getObjectValue<Json>(Json); }],
            ["sumRange", (o, n) => { (o as unknown as SumIfRequestBody).sumRange = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("criteria", this.criteria);
        writer.writeObjectValue<Json>("range", this.range);
        writer.writeObjectValue<Json>("sumRange", this.sumRange);
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
     * Sets the criteria property value. 
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: Json | undefined) {
        this._criteria = value;
    };
    /**
     * Sets the range property value. 
     * @param value Value to set for the range property.
     */
    public set range(value: Json | undefined) {
        this._range = value;
    };
    /**
     * Sets the sumRange property value. 
     * @param value Value to set for the sumRange property.
     */
    public set sumRange(value: Json | undefined) {
        this._sumRange = value;
    };
}
