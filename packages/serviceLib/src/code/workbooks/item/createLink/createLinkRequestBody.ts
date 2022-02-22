import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateLinkRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _expirationDateTime?: Date | undefined;
    private _message?: string | undefined;
    private _password?: string | undefined;
    private _retainInheritedPermissions?: boolean | undefined;
    private _scope?: string | undefined;
    private _type?: string | undefined;
    /**
     * Instantiates a new createLinkRequestBody and sets the default values.
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
     * Gets the expirationDateTime property value. 
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Gets the message property value. 
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Gets the password property value. 
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Gets the retainInheritedPermissions property value. 
     * @returns a boolean
     */
    public get retainInheritedPermissions() {
        return this._retainInheritedPermissions;
    };
    /**
     * Gets the scope property value. 
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Gets the type property value. 
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["expirationDateTime", (o, n) => { (o as unknown as CreateLinkRequestBody).expirationDateTime = n.getDateValue(); }],
            ["message", (o, n) => { (o as unknown as CreateLinkRequestBody).message = n.getStringValue(); }],
            ["password", (o, n) => { (o as unknown as CreateLinkRequestBody).password = n.getStringValue(); }],
            ["retainInheritedPermissions", (o, n) => { (o as unknown as CreateLinkRequestBody).retainInheritedPermissions = n.getBooleanValue(); }],
            ["scope", (o, n) => { (o as unknown as CreateLinkRequestBody).scope = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as CreateLinkRequestBody).type = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("password", this.password);
        writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        writer.writeStringValue("scope", this.scope);
        writer.writeStringValue("type", this.type);
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
     * Sets the expirationDateTime property value. 
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Sets the password property value. 
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Sets the retainInheritedPermissions property value. 
     * @param value Value to set for the retainInheritedPermissions property.
     */
    public set retainInheritedPermissions(value: boolean | undefined) {
        this._retainInheritedPermissions = value;
    };
    /**
     * Sets the scope property value. 
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        this._scope = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
