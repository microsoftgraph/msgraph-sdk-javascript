import {PublicErrorDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicInnerError implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The error code.  */
    private _code?: string | undefined;
    /** A collection of error details.  */
    private _details?: PublicErrorDetail[] | undefined;
    /** The error message.  */
    private _message?: string | undefined;
    /** The target of the error.  */
    private _target?: string | undefined;
    /**
     * Instantiates a new publicInnerError and sets the default values.
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
     * Gets the code property value. The error code.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Gets the details property value. A collection of error details.
     * @returns a publicErrorDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Gets the message property value. The error message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Gets the target property value. The target of the error.
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["code", (o, n) => { (o as unknown as PublicInnerError).code = n.getStringValue(); }],
            ["details", (o, n) => { (o as unknown as PublicInnerError).details = n.getCollectionOfObjectValues<PublicErrorDetail>(PublicErrorDetail); }],
            ["message", (o, n) => { (o as unknown as PublicInnerError).message = n.getStringValue(); }],
            ["target", (o, n) => { (o as unknown as PublicInnerError).target = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("code", this.code);
        writer.writeCollectionOfObjectValues<PublicErrorDetail>("details", this.details);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("target", this.target);
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
     * Sets the code property value. The error code.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Sets the details property value. A collection of error details.
     * @param value Value to set for the details property.
     */
    public set details(value: PublicErrorDetail[] | undefined) {
        this._details = value;
    };
    /**
     * Sets the message property value. The error message.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Sets the target property value. The target of the error.
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        this._target = value;
    };
}
