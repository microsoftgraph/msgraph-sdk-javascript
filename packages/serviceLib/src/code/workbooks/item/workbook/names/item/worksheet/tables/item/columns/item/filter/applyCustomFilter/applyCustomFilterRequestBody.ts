import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplyCustomFilterRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _criteria1?: string | undefined;
    private _criteria2?: string | undefined;
    private _oper?: string | undefined;
    /**
     * Instantiates a new applyCustomFilterRequestBody and sets the default values.
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
     * Gets the criteria1 property value. 
     * @returns a string
     */
    public get criteria1() {
        return this._criteria1;
    };
    /**
     * Gets the criteria2 property value. 
     * @returns a string
     */
    public get criteria2() {
        return this._criteria2;
    };
    /**
     * Gets the oper property value. 
     * @returns a string
     */
    public get oper() {
        return this._oper;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["criteria1", (o, n) => { (o as unknown as ApplyCustomFilterRequestBody).criteria1 = n.getStringValue(); }],
            ["criteria2", (o, n) => { (o as unknown as ApplyCustomFilterRequestBody).criteria2 = n.getStringValue(); }],
            ["oper", (o, n) => { (o as unknown as ApplyCustomFilterRequestBody).oper = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("criteria1", this.criteria1);
        writer.writeStringValue("criteria2", this.criteria2);
        writer.writeStringValue("oper", this.oper);
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
     * Sets the criteria1 property value. 
     * @param value Value to set for the criteria1 property.
     */
    public set criteria1(value: string | undefined) {
        this._criteria1 = value;
    };
    /**
     * Sets the criteria2 property value. 
     * @param value Value to set for the criteria2 property.
     */
    public set criteria2(value: string | undefined) {
        this._criteria2 = value;
    };
    /**
     * Sets the oper property value. 
     * @param value Value to set for the oper property.
     */
    public set oper(value: string | undefined) {
        this._oper = value;
    };
}
