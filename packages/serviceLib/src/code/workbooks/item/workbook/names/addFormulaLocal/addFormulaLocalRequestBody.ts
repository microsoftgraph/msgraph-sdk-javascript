import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddFormulaLocalRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _comment?: string | undefined;
    private _formula?: string | undefined;
    private _name?: string | undefined;
    /**
     * Instantiates a new addFormulaLocalRequestBody and sets the default values.
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
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Gets the formula property value. 
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["comment", (o, n) => { (o as unknown as AddFormulaLocalRequestBody).comment = n.getStringValue(); }],
            ["formula", (o, n) => { (o as unknown as AddFormulaLocalRequestBody).formula = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as AddFormulaLocalRequestBody).name = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("formula", this.formula);
        writer.writeStringValue("name", this.name);
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
     * Sets the comment property value. 
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Sets the formula property value. 
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        this._formula = value;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
}
