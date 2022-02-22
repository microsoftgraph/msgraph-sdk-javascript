import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GetCompliancePolicyNonComplianceReportRequestBody implements Parsable {
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
     * Instantiates a new getCompliancePolicyNonComplianceReportRequestBody and sets the default values.
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
     * Gets the filter property value. 
     * @returns a string
     */
    public get filter() {
        return this._filter;
    };
    /**
     * Gets the groupBy property value. 
     * @returns a string
     */
    public get groupBy() {
        return this._groupBy;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
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
     * Gets the sessionId property value. 
     * @returns a string
     */
    public get sessionId() {
        return this._sessionId;
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
            ["filter", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).filter = n.getStringValue(); }],
            ["groupBy", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).groupBy = n.getCollectionOfPrimitiveValues<string>(); }],
            ["name", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).name = n.getStringValue(); }],
            ["orderBy", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).orderBy = n.getCollectionOfPrimitiveValues<string>(); }],
            ["search", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).search = n.getStringValue(); }],
            ["select", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).select = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sessionId", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).sessionId = n.getStringValue(); }],
            ["skip", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).skip = n.getNumberValue(); }],
            ["top", (o, n) => { (o as unknown as GetCompliancePolicyNonComplianceReportRequestBody).top = n.getNumberValue(); }],
        ]);
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
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the filter property value. 
     * @param value Value to set for the filter property.
     */
    public set filter(value: string | undefined) {
        this._filter = value;
    };
    /**
     * Sets the groupBy property value. 
     * @param value Value to set for the groupBy property.
     */
    public set groupBy(value: string[] | undefined) {
        this._groupBy = value;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Sets the sessionId property value. 
     * @param value Value to set for the sessionId property.
     */
    public set sessionId(value: string | undefined) {
        this._sessionId = value;
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
