import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResultInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The result code.  */
    private _code?: number | undefined;
    /** The message.  */
    private _message?: string | undefined;
    /** The result sub-code.  */
    private _subcode?: number | undefined;
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
     * Gets the code property value. The result code.
     * @returns a integer
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The result code.
     * @param value Value to set for the code property.
     */
    public set code(value: number | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new resultInfo and sets the default values.
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
            ["code", (o, n) => { (o as unknown as ResultInfo).code = n.getNumberValue(); }],
            ["message", (o, n) => { (o as unknown as ResultInfo).message = n.getStringValue(); }],
            ["subcode", (o, n) => { (o as unknown as ResultInfo).subcode = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the message property value. The message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeNumberValue("subcode", this.subcode);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subcode property value. The result sub-code.
     * @returns a integer
     */
    public get subcode() {
        return this._subcode;
    };
    /**
     * Sets the subcode property value. The result sub-code.
     * @param value Value to set for the subcode property.
     */
    public set subcode(value: number | undefined) {
        this._subcode = value;
    };
}
