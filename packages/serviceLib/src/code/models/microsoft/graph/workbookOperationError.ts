import {createWorkbookOperationErrorFromDiscriminatorValue} from './createWorkbookOperationErrorFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookOperationError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The error code.  */
    private _code?: string | undefined;
    private _innerError?: WorkbookOperationError | undefined;
    /** The error message.  */
    private _message?: string | undefined;
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
     * Gets the code property value. The error code.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The error code.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new workbookOperationError and sets the default values.
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
            ["code", (o, n) => { (o as unknown as WorkbookOperationError).code = n.getStringValue(); }],
            ["innerError", (o, n) => { (o as unknown as WorkbookOperationError).innerError = n.getObjectValue<WorkbookOperationError>(createWorkbookOperationErrorFromDiscriminatorValue); }],
            ["message", (o, n) => { (o as unknown as WorkbookOperationError).message = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the innerError property value. 
     * @returns a workbookOperationError
     */
    public get innerError() {
        return this._innerError;
    };
    /**
     * Sets the innerError property value. 
     * @param value Value to set for the innerError property.
     */
    public set innerError(value: WorkbookOperationError | undefined) {
        this._innerError = value;
    };
    /**
     * Gets the message property value. The error message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The error message.
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
        writer.writeStringValue("code", this.code);
        writer.writeObjectValue<WorkbookOperationError>("innerError", this.innerError);
        writer.writeStringValue("message", this.message);
        writer.writeAdditionalData(this.additionalData);
    };
}
