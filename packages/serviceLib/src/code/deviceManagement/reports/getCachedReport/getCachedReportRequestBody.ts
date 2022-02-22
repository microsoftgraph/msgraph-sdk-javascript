import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GetCachedReportRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _groupBy?: string[] | undefined;
    private _id?: string | undefined;
    private _orderBy?: string[] | undefined;
    private _search?: string | undefined;
    private _select?: string[] | undefined;
    private _skip?: number | undefined;
    private _top?: number | undefined;
    /**
     * Instantiates a new getCachedReportRequestBody and sets the default values.
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
     * Gets the groupBy property value. 
     * @returns a string
     */
    public get groupBy() {
        return this._groupBy;
    };
    /**
     * Gets the id property value. 
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the orderBy property value. 
     * @returns a string
     */
    public get orderBy() {
        return this._orderBy;
    };
    /**
     * Gets the search property value. 
     * @returns a string
     */
    public get search() {
        return this._search;
    };
    /**
     * Gets the select property value. 
     * @returns a string
     */
    public get select() {
        return this._select;
    };
    /**
     * Gets the skip property value. 
     * @returns a integer
     */
    public get skip() {
        return this._skip;
    };
    /**
     * Gets the top property value. 
     * @returns a integer
     */
    public get top() {
        return this._top;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["groupBy", (o, n) => { (o as unknown as GetCachedReportRequestBody).groupBy = n.getCollectionOfPrimitiveValues<string>(); }],
            ["id", (o, n) => { (o as unknown as GetCachedReportRequestBody).id = n.getStringValue(); }],
            ["orderBy", (o, n) => { (o as unknown as GetCachedReportRequestBody).orderBy = n.getCollectionOfPrimitiveValues<string>(); }],
            ["search", (o, n) => { (o as unknown as GetCachedReportRequestBody).search = n.getStringValue(); }],
            ["select", (o, n) => { (o as unknown as GetCachedReportRequestBody).select = n.getCollectionOfPrimitiveValues<string>(); }],
            ["skip", (o, n) => { (o as unknown as GetCachedReportRequestBody).skip = n.getNumberValue(); }],
            ["top", (o, n) => { (o as unknown as GetCachedReportRequestBody).top = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        writer.writeStringValue("id", this.id);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", this.orderBy);
        writer.writeStringValue("search", this.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        writer.writeNumberValue("skip", this.skip);
        writer.writeNumberValue("top", this.top);
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
     * Sets the groupBy property value. 
     * @param value Value to set for the groupBy property.
     */
    public set groupBy(value: string[] | undefined) {
        this._groupBy = value;
    };
    /**
     * Sets the id property value. 
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the orderBy property value. 
     * @param value Value to set for the orderBy property.
     */
    public set orderBy(value: string[] | undefined) {
        this._orderBy = value;
    };
    /**
     * Sets the search property value. 
     * @param value Value to set for the search property.
     */
    public set search(value: string | undefined) {
        this._search = value;
    };
    /**
     * Sets the select property value. 
     * @param value Value to set for the select property.
     */
    public set select(value: string[] | undefined) {
        this._select = value;
    };
    /**
     * Sets the skip property value. 
     * @param value Value to set for the skip property.
     */
    public set skip(value: number | undefined) {
        this._skip = value;
    };
    /**
     * Sets the top property value. 
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        this._top = value;
    };
}
