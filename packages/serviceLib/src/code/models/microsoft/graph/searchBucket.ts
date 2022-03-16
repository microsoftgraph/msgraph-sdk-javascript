import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchBucket implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A token containing the encoded filter to aggregate search matches by the specific key value. To use the filter, pass the token as part of the aggregationFilter property in a searchRequest object, in the format '{field}:/'{aggregationFilterToken}/''. See an example.  */
    private _aggregationFilterToken?: string | undefined;
    /** The approximate number of search matches that share the same value specified in the key property. Note that this number is not the exact number of matches.  */
    private _count?: number | undefined;
    /** The discrete value of the field that an aggregation was computed on.  */
    private _key?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the aggregationFilterToken property value. A token containing the encoded filter to aggregate search matches by the specific key value. To use the filter, pass the token as part of the aggregationFilter property in a searchRequest object, in the format '{field}:/'{aggregationFilterToken}/''. See an example.
     * @returns a string
     */
    public get aggregationFilterToken() {
        return this._aggregationFilterToken;
    };
    /**
     * Sets the aggregationFilterToken property value. A token containing the encoded filter to aggregate search matches by the specific key value. To use the filter, pass the token as part of the aggregationFilter property in a searchRequest object, in the format '{field}:/'{aggregationFilterToken}/''. See an example.
     * @param value Value to set for the aggregationFilterToken property.
     */
    public set aggregationFilterToken(value: string | undefined) {
        this._aggregationFilterToken = value;
    };
    /**
     * Instantiates a new searchBucket and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the count property value. The approximate number of search matches that share the same value specified in the key property. Note that this number is not the exact number of matches.
     * @returns a integer
     */
    public get count() {
        return this._count;
    };
    /**
     * Sets the count property value. The approximate number of search matches that share the same value specified in the key property. Note that this number is not the exact number of matches.
     * @param value Value to set for the count property.
     */
    public set count(value: number | undefined) {
        this._count = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["aggregationFilterToken", (o, n) => { (o as unknown as SearchBucket).aggregationFilterToken = n.getStringValue(); }],
            ["count", (o, n) => { (o as unknown as SearchBucket).count = n.getNumberValue(); }],
            ["key", (o, n) => { (o as unknown as SearchBucket).key = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the key property value. The discrete value of the field that an aggregation was computed on.
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The discrete value of the field that an aggregation was computed on.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("aggregationFilterToken", this.aggregationFilterToken);
        writer.writeNumberValue("count", this.count);
        writer.writeStringValue("key", this.key);
        writer.writeAdditionalData(this.additionalData);
    };
}
