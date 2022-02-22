import {SearchBucket} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAggregation implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Defines the actual buckets of the computed aggregation.  */
    private _buckets?: SearchBucket[] | undefined;
    /** Defines on which field the aggregation was computed on.  */
    private _field?: string | undefined;
    /**
     * Instantiates a new searchAggregation and sets the default values.
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
     * Gets the buckets property value. Defines the actual buckets of the computed aggregation.
     * @returns a searchBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Gets the field property value. Defines on which field the aggregation was computed on.
     * @returns a string
     */
    public get field() {
        return this._field;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["buckets", (o, n) => { (o as unknown as SearchAggregation).buckets = n.getCollectionOfObjectValues<SearchBucket>(SearchBucket); }],
            ["field", (o, n) => { (o as unknown as SearchAggregation).field = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SearchBucket>("buckets", this.buckets);
        writer.writeStringValue("field", this.field);
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
     * Sets the buckets property value. Defines the actual buckets of the computed aggregation.
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: SearchBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Sets the field property value. Defines on which field the aggregation was computed on.
     * @param value Value to set for the field property.
     */
    public set field(value: string | undefined) {
        this._field = value;
    };
}
