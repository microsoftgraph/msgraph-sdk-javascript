import {KeyValuePair} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestDetail implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Count of items that are excluded from the request.  */
    private _excludedItemCount?: number | undefined;
    /** Count of items per insight.  */
    private _insightCounts?: KeyValuePair[] | undefined;
    /** Count of items found.  */
    private _itemCount?: number | undefined;
    /** Count of item that need review.  */
    private _itemNeedReview?: number | undefined;
    /** Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.  */
    private _productItemCounts?: KeyValuePair[] | undefined;
    /** Count of items signed off by the administrator.  */
    private _signedOffItemCount?: number | undefined;
    /** Total item size in bytes.  */
    private _totalItemSize?: number | undefined;
    /**
     * Instantiates a new subjectRightsRequestDetail and sets the default values.
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
     * Gets the excludedItemCount property value. Count of items that are excluded from the request.
     * @returns a int64
     */
    public get excludedItemCount() {
        return this._excludedItemCount;
    };
    /**
     * Gets the insightCounts property value. Count of items per insight.
     * @returns a keyValuePair
     */
    public get insightCounts() {
        return this._insightCounts;
    };
    /**
     * Gets the itemCount property value. Count of items found.
     * @returns a int64
     */
    public get itemCount() {
        return this._itemCount;
    };
    /**
     * Gets the itemNeedReview property value. Count of item that need review.
     * @returns a int64
     */
    public get itemNeedReview() {
        return this._itemNeedReview;
    };
    /**
     * Gets the productItemCounts property value. Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     * @returns a keyValuePair
     */
    public get productItemCounts() {
        return this._productItemCounts;
    };
    /**
     * Gets the signedOffItemCount property value. Count of items signed off by the administrator.
     * @returns a int64
     */
    public get signedOffItemCount() {
        return this._signedOffItemCount;
    };
    /**
     * Gets the totalItemSize property value. Total item size in bytes.
     * @returns a int64
     */
    public get totalItemSize() {
        return this._totalItemSize;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["excludedItemCount", (o, n) => { (o as unknown as SubjectRightsRequestDetail).excludedItemCount = n.getNumberValue(); }],
            ["insightCounts", (o, n) => { (o as unknown as SubjectRightsRequestDetail).insightCounts = n.getCollectionOfObjectValues<KeyValuePair>(KeyValuePair); }],
            ["itemCount", (o, n) => { (o as unknown as SubjectRightsRequestDetail).itemCount = n.getNumberValue(); }],
            ["itemNeedReview", (o, n) => { (o as unknown as SubjectRightsRequestDetail).itemNeedReview = n.getNumberValue(); }],
            ["productItemCounts", (o, n) => { (o as unknown as SubjectRightsRequestDetail).productItemCounts = n.getCollectionOfObjectValues<KeyValuePair>(KeyValuePair); }],
            ["signedOffItemCount", (o, n) => { (o as unknown as SubjectRightsRequestDetail).signedOffItemCount = n.getNumberValue(); }],
            ["totalItemSize", (o, n) => { (o as unknown as SubjectRightsRequestDetail).totalItemSize = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("excludedItemCount", this.excludedItemCount);
        writer.writeCollectionOfObjectValues<KeyValuePair>("insightCounts", this.insightCounts);
        writer.writeNumberValue("itemCount", this.itemCount);
        writer.writeNumberValue("itemNeedReview", this.itemNeedReview);
        writer.writeCollectionOfObjectValues<KeyValuePair>("productItemCounts", this.productItemCounts);
        writer.writeNumberValue("signedOffItemCount", this.signedOffItemCount);
        writer.writeNumberValue("totalItemSize", this.totalItemSize);
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
     * Sets the excludedItemCount property value. Count of items that are excluded from the request.
     * @param value Value to set for the excludedItemCount property.
     */
    public set excludedItemCount(value: number | undefined) {
        this._excludedItemCount = value;
    };
    /**
     * Sets the insightCounts property value. Count of items per insight.
     * @param value Value to set for the insightCounts property.
     */
    public set insightCounts(value: KeyValuePair[] | undefined) {
        this._insightCounts = value;
    };
    /**
     * Sets the itemCount property value. Count of items found.
     * @param value Value to set for the itemCount property.
     */
    public set itemCount(value: number | undefined) {
        this._itemCount = value;
    };
    /**
     * Sets the itemNeedReview property value. Count of item that need review.
     * @param value Value to set for the itemNeedReview property.
     */
    public set itemNeedReview(value: number | undefined) {
        this._itemNeedReview = value;
    };
    /**
     * Sets the productItemCounts property value. Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     * @param value Value to set for the productItemCounts property.
     */
    public set productItemCounts(value: KeyValuePair[] | undefined) {
        this._productItemCounts = value;
    };
    /**
     * Sets the signedOffItemCount property value. Count of items signed off by the administrator.
     * @param value Value to set for the signedOffItemCount property.
     */
    public set signedOffItemCount(value: number | undefined) {
        this._signedOffItemCount = value;
    };
    /**
     * Sets the totalItemSize property value. Total item size in bytes.
     * @param value Value to set for the totalItemSize property.
     */
    public set totalItemSize(value: number | undefined) {
        this._totalItemSize = value;
    };
}
