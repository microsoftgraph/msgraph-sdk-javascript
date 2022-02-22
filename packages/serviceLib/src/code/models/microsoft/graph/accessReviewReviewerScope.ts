import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewReviewerScope implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The query specifying who will be the reviewer. See table for examples.  */
    private _query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions.  */
    private _queryRoot?: string | undefined;
    /** The type of query. Examples include MicrosoftGraph and ARM.  */
    private _queryType?: string | undefined;
    /**
     * Instantiates a new accessReviewReviewerScope and sets the default values.
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
     * Gets the query property value. The query specifying who will be the reviewer. See table for examples.
     * @returns a string
     */
    public get query() {
        return this._query;
    };
    /**
     * Gets the queryRoot property value. In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions.
     * @returns a string
     */
    public get queryRoot() {
        return this._queryRoot;
    };
    /**
     * Gets the queryType property value. The type of query. Examples include MicrosoftGraph and ARM.
     * @returns a string
     */
    public get queryType() {
        return this._queryType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["query", (o, n) => { (o as unknown as AccessReviewReviewerScope).query = n.getStringValue(); }],
            ["queryRoot", (o, n) => { (o as unknown as AccessReviewReviewerScope).queryRoot = n.getStringValue(); }],
            ["queryType", (o, n) => { (o as unknown as AccessReviewReviewerScope).queryType = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("query", this.query);
        writer.writeStringValue("queryRoot", this.queryRoot);
        writer.writeStringValue("queryType", this.queryType);
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
     * Sets the query property value. The query specifying who will be the reviewer. See table for examples.
     * @param value Value to set for the query property.
     */
    public set query(value: string | undefined) {
        this._query = value;
    };
    /**
     * Sets the queryRoot property value. In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions.
     * @param value Value to set for the queryRoot property.
     */
    public set queryRoot(value: string | undefined) {
        this._queryRoot = value;
    };
    /**
     * Sets the queryType property value. The type of query. Examples include MicrosoftGraph and ARM.
     * @param value Value to set for the queryType property.
     */
    public set queryType(value: string | undefined) {
        this._queryType = value;
    };
}
