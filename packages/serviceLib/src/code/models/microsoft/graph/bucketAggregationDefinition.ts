import {BucketAggregationRange, BucketAggregationSortProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BucketAggregationDefinition implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional.  */
    private _isDescending?: boolean | undefined;
    /** The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional.  */
    private _minimumCount?: number | undefined;
    /** A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional.  */
    private _prefixFilter?: string | undefined;
    /** Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional.  */
    private _ranges?: BucketAggregationRange[] | undefined;
    /** The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required.  */
    private _sortBy?: BucketAggregationSortProperty | undefined;
    /**
     * Instantiates a new bucketAggregationDefinition and sets the default values.
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
     * Gets the isDescending property value. True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional.
     * @returns a boolean
     */
    public get isDescending() {
        return this._isDescending;
    };
    /**
     * Gets the minimumCount property value. The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional.
     * @returns a integer
     */
    public get minimumCount() {
        return this._minimumCount;
    };
    /**
     * Gets the prefixFilter property value. A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional.
     * @returns a string
     */
    public get prefixFilter() {
        return this._prefixFilter;
    };
    /**
     * Gets the ranges property value. Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional.
     * @returns a bucketAggregationRange
     */
    public get ranges() {
        return this._ranges;
    };
    /**
     * Gets the sortBy property value. The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required.
     * @returns a bucketAggregationSortProperty
     */
    public get sortBy() {
        return this._sortBy;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["isDescending", (o, n) => { (o as unknown as BucketAggregationDefinition).isDescending = n.getBooleanValue(); }],
            ["minimumCount", (o, n) => { (o as unknown as BucketAggregationDefinition).minimumCount = n.getNumberValue(); }],
            ["prefixFilter", (o, n) => { (o as unknown as BucketAggregationDefinition).prefixFilter = n.getStringValue(); }],
            ["ranges", (o, n) => { (o as unknown as BucketAggregationDefinition).ranges = n.getCollectionOfObjectValues<BucketAggregationRange>(BucketAggregationRange); }],
            ["sortBy", (o, n) => { (o as unknown as BucketAggregationDefinition).sortBy = n.getEnumValue<BucketAggregationSortProperty>(BucketAggregationSortProperty); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isDescending", this.isDescending);
        writer.writeNumberValue("minimumCount", this.minimumCount);
        writer.writeStringValue("prefixFilter", this.prefixFilter);
        writer.writeCollectionOfObjectValues<BucketAggregationRange>("ranges", this.ranges);
        writer.writeEnumValue<BucketAggregationSortProperty>("sortBy", this.sortBy);
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
     * Sets the isDescending property value. True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional.
     * @param value Value to set for the isDescending property.
     */
    public set isDescending(value: boolean | undefined) {
        this._isDescending = value;
    };
    /**
     * Sets the minimumCount property value. The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional.
     * @param value Value to set for the minimumCount property.
     */
    public set minimumCount(value: number | undefined) {
        this._minimumCount = value;
    };
    /**
     * Sets the prefixFilter property value. A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional.
     * @param value Value to set for the prefixFilter property.
     */
    public set prefixFilter(value: string | undefined) {
        this._prefixFilter = value;
    };
    /**
     * Sets the ranges property value. Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional.
     * @param value Value to set for the ranges property.
     */
    public set ranges(value: BucketAggregationRange[] | undefined) {
        this._ranges = value;
    };
    /**
     * Sets the sortBy property value. The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required.
     * @param value Value to set for the sortBy property.
     */
    public set sortBy(value: BucketAggregationSortProperty | undefined) {
        this._sortBy = value;
    };
}
