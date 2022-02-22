import {BucketAggregationDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AggregationOption implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _bucketDefinition?: BucketAggregationDefinition | undefined;
    /** Computes aggregation on the field while the field exists in current entity type. Required.  */
    private _field?: string | undefined;
    /** The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional.  */
    private _size?: number | undefined;
    /**
     * Instantiates a new aggregationOption and sets the default values.
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
     * Gets the bucketDefinition property value. 
     * @returns a bucketAggregationDefinition
     */
    public get bucketDefinition() {
        return this._bucketDefinition;
    };
    /**
     * Gets the field property value. Computes aggregation on the field while the field exists in current entity type. Required.
     * @returns a string
     */
    public get field() {
        return this._field;
    };
    /**
     * Gets the size property value. The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bucketDefinition", (o, n) => { (o as unknown as AggregationOption).bucketDefinition = n.getObjectValue<BucketAggregationDefinition>(BucketAggregationDefinition); }],
            ["field", (o, n) => { (o as unknown as AggregationOption).field = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as AggregationOption).size = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<BucketAggregationDefinition>("bucketDefinition", this.bucketDefinition);
        writer.writeStringValue("field", this.field);
        writer.writeNumberValue("size", this.size);
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
     * Sets the bucketDefinition property value. 
     * @param value Value to set for the bucketDefinition property.
     */
    public set bucketDefinition(value: BucketAggregationDefinition | undefined) {
        this._bucketDefinition = value;
    };
    /**
     * Sets the field property value. Computes aggregation on the field while the field exists in current entity type. Required.
     * @param value Value to set for the field property.
     */
    public set field(value: string | undefined) {
        this._field = value;
    };
    /**
     * Sets the size property value. The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
