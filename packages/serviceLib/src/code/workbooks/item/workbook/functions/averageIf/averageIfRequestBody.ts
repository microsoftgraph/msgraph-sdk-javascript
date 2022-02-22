import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AverageIfRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _averageRange?: Json | undefined;
    private _criteria?: Json | undefined;
    private _range?: Json | undefined;
    /**
     * Instantiates a new averageIfRequestBody and sets the default values.
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
     * Gets the averageRange property value. 
     * @returns a Json
     */
    public get averageRange() {
        return this._averageRange;
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
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["averageRange", (o, n) => { (o as unknown as AverageIfRequestBody).averageRange = n.getObjectValue<Json>(Json); }],
            ["criteria", (o, n) => { (o as unknown as AverageIfRequestBody).criteria = n.getObjectValue<Json>(Json); }],
            ["range", (o, n) => { (o as unknown as AverageIfRequestBody).range = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("averageRange", this.averageRange);
        writer.writeObjectValue<Json>("criteria", this.criteria);
        writer.writeObjectValue<Json>("range", this.range);
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
     * Sets the averageRange property value. 
     * @param value Value to set for the averageRange property.
     */
    public set averageRange(value: Json | undefined) {
        this._averageRange = value;
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
}
