import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getReportFilters method.  */
export class GetReportFiltersRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _filter?: string | undefined;
    private _groupBy?: string[] | undefined;
    private _name?: string | undefined;
    private _orderBy?: string[] | undefined;
    private _search?: string | undefined;
    private _select?: string[] | undefined;
    private _sessionId?: string | undefined;
    private _skip?: number | undefined;
    private _top?: number | undefined;
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
     * Instantiates a new getReportFiltersRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the filter property value. 
     * @returns a string
     */
    public get filter() {
        return this._filter;
    };
    /**
     * Sets the filter property value. 
     * @param value Value to set for the filter property.
     */
    public set filter(value: string | undefined) {
        this._filter = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["filter", (o, n) => { (o as unknown as GetReportFiltersRequestBody).filter = n.getStringValue(); }],
            ["groupBy", (o, n) => { (o as unknown as GetReportFiltersRequestBody).groupBy = n.getCollectionOfPrimitiveValues<string>(); }],
            ["name", (o, n) => { (o as unknown as GetReportFiltersRequestBody).name = n.getStringValue(); }],
            ["orderBy", (o, n) => { (o as unknown as GetReportFiltersRequestBody).orderBy = n.getCollectionOfPrimitiveValues<string>(); }],
            ["search", (o, n) => { (o as unknown as GetReportFiltersRequestBody).search = n.getStringValue(); }],
            ["select", (o, n) => { (o as unknown as GetReportFiltersRequestBody).select = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sessionId", (o, n) => { (o as unknown as GetReportFiltersRequestBody).sessionId = n.getStringValue(); }],
            ["skip", (o, n) => { (o as unknown as GetReportFiltersRequestBody).skip = n.getNumberValue(); }],
            ["top", (o, n) => { (o as unknown as GetReportFiltersRequestBody).top = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the groupBy property value. 
     * @returns a string
     */
    public get groupBy() {
        return this._groupBy;
    };
    /**
     * Sets the groupBy property value. 
     * @param value Value to set for the groupBy property.
     */
    public set groupBy(value: string[] | undefined) {
        this._groupBy = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the orderBy property value. 
     * @returns a string
     */
    public get orderBy() {
        return this._orderBy;
    };
    /**
     * Sets the orderBy property value. 
     * @param value Value to set for the orderBy property.
     */
    public set orderBy(value: string[] | undefined) {
        this._orderBy = value;
    };
    /**
     * Gets the search property value. 
     * @returns a string
     */
    public get search() {
        return this._search;
    };
    /**
     * Sets the search property value. 
     * @param value Value to set for the search property.
     */
    public set search(value: string | undefined) {
        this._search = value;
    };
    /**
     * Gets the select property value. 
     * @returns a string
     */
    public get select() {
        return this._select;
    };
    /**
     * Sets the select property value. 
     * @param value Value to set for the select property.
     */
    public set select(value: string[] | undefined) {
        this._select = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("filter", this.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", this.orderBy);
        writer.writeStringValue("search", this.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        writer.writeStringValue("sessionId", this.sessionId);
        writer.writeNumberValue("skip", this.skip);
        writer.writeNumberValue("top", this.top);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sessionId property value. 
     * @returns a string
     */
    public get sessionId() {
        return this._sessionId;
    };
    /**
     * Sets the sessionId property value. 
     * @param value Value to set for the sessionId property.
     */
    public set sessionId(value: string | undefined) {
        this._sessionId = value;
    };
    /**
     * Gets the skip property value. 
     * @returns a integer
     */
    public get skip() {
        return this._skip;
    };
    /**
     * Sets the skip property value. 
     * @param value Value to set for the skip property.
     */
    public set skip(value: number | undefined) {
        this._skip = value;
    };
    /**
     * Gets the top property value. 
     * @returns a integer
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. 
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        this._top = value;
    };
}
