import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerCategoryDescriptions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The label associated with Category 1  */
    private _category1?: string | undefined;
    /** The label associated with Category 2  */
    private _category2?: string | undefined;
    /** The label associated with Category 3  */
    private _category3?: string | undefined;
    /** The label associated with Category 4  */
    private _category4?: string | undefined;
    /** The label associated with Category 5  */
    private _category5?: string | undefined;
    /** The label associated with Category 6  */
    private _category6?: string | undefined;
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
     * Gets the category1 property value. The label associated with Category 1
     * @returns a string
     */
    public get category1() {
        return this._category1;
    };
    /**
     * Sets the category1 property value. The label associated with Category 1
     * @param value Value to set for the category1 property.
     */
    public set category1(value: string | undefined) {
        this._category1 = value;
    };
    /**
     * Gets the category2 property value. The label associated with Category 2
     * @returns a string
     */
    public get category2() {
        return this._category2;
    };
    /**
     * Sets the category2 property value. The label associated with Category 2
     * @param value Value to set for the category2 property.
     */
    public set category2(value: string | undefined) {
        this._category2 = value;
    };
    /**
     * Gets the category3 property value. The label associated with Category 3
     * @returns a string
     */
    public get category3() {
        return this._category3;
    };
    /**
     * Sets the category3 property value. The label associated with Category 3
     * @param value Value to set for the category3 property.
     */
    public set category3(value: string | undefined) {
        this._category3 = value;
    };
    /**
     * Gets the category4 property value. The label associated with Category 4
     * @returns a string
     */
    public get category4() {
        return this._category4;
    };
    /**
     * Sets the category4 property value. The label associated with Category 4
     * @param value Value to set for the category4 property.
     */
    public set category4(value: string | undefined) {
        this._category4 = value;
    };
    /**
     * Gets the category5 property value. The label associated with Category 5
     * @returns a string
     */
    public get category5() {
        return this._category5;
    };
    /**
     * Sets the category5 property value. The label associated with Category 5
     * @param value Value to set for the category5 property.
     */
    public set category5(value: string | undefined) {
        this._category5 = value;
    };
    /**
     * Gets the category6 property value. The label associated with Category 6
     * @returns a string
     */
    public get category6() {
        return this._category6;
    };
    /**
     * Sets the category6 property value. The label associated with Category 6
     * @param value Value to set for the category6 property.
     */
    public set category6(value: string | undefined) {
        this._category6 = value;
    };
    /**
     * Instantiates a new plannerCategoryDescriptions and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["category1", (o, n) => { (o as unknown as PlannerCategoryDescriptions).category1 = n.getStringValue(); }],
            ["category2", (o, n) => { (o as unknown as PlannerCategoryDescriptions).category2 = n.getStringValue(); }],
            ["category3", (o, n) => { (o as unknown as PlannerCategoryDescriptions).category3 = n.getStringValue(); }],
            ["category4", (o, n) => { (o as unknown as PlannerCategoryDescriptions).category4 = n.getStringValue(); }],
            ["category5", (o, n) => { (o as unknown as PlannerCategoryDescriptions).category5 = n.getStringValue(); }],
            ["category6", (o, n) => { (o as unknown as PlannerCategoryDescriptions).category6 = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("category1", this.category1);
        writer.writeStringValue("category2", this.category2);
        writer.writeStringValue("category3", this.category3);
        writer.writeStringValue("category4", this.category4);
        writer.writeStringValue("category5", this.category5);
        writer.writeStringValue("category6", this.category6);
        writer.writeAdditionalData(this.additionalData);
    };
}
