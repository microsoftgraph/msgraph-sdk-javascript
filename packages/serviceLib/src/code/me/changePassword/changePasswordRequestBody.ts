import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChangePasswordRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _currentPassword?: string | undefined;
    private _newPassword?: string | undefined;
    /**
     * Instantiates a new changePasswordRequestBody and sets the default values.
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
     * Gets the currentPassword property value. 
     * @returns a string
     */
    public get currentPassword() {
        return this._currentPassword;
    };
    /**
     * Gets the newPassword property value. 
     * @returns a string
     */
    public get newPassword() {
        return this._newPassword;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["currentPassword", (o, n) => { (o as unknown as ChangePasswordRequestBody).currentPassword = n.getStringValue(); }],
            ["newPassword", (o, n) => { (o as unknown as ChangePasswordRequestBody).newPassword = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("currentPassword", this.currentPassword);
        writer.writeStringValue("newPassword", this.newPassword);
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
     * Sets the currentPassword property value. 
     * @param value Value to set for the currentPassword property.
     */
    public set currentPassword(value: string | undefined) {
        this._currentPassword = value;
    };
    /**
     * Sets the newPassword property value. 
     * @param value Value to set for the newPassword property.
     */
    public set newPassword(value: string | undefined) {
        this._newPassword = value;
    };
}
