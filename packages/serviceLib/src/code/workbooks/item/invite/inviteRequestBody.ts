import {DriveRecipient} from '../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InviteRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _expirationDateTime?: string | undefined;
    private _message?: string | undefined;
    private _password?: string | undefined;
    private _recipients?: DriveRecipient[] | undefined;
    private _requireSignIn?: boolean | undefined;
    private _retainInheritedPermissions?: boolean | undefined;
    private _roles?: string[] | undefined;
    private _sendInvitation?: boolean | undefined;
    /**
     * Instantiates a new inviteRequestBody and sets the default values.
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
     * @returns a string
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
     * Gets the recipients property value. 
     * @returns a driveRecipient
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Gets the requireSignIn property value. 
     * @returns a boolean
     */
    public get requireSignIn() {
        return this._requireSignIn;
    };
    /**
     * Gets the retainInheritedPermissions property value. 
     * @returns a boolean
     */
    public get retainInheritedPermissions() {
        return this._retainInheritedPermissions;
    };
    /**
     * Gets the roles property value. 
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Gets the sendInvitation property value. 
     * @returns a boolean
     */
    public get sendInvitation() {
        return this._sendInvitation;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["expirationDateTime", (o, n) => { (o as unknown as InviteRequestBody).expirationDateTime = n.getStringValue(); }],
            ["message", (o, n) => { (o as unknown as InviteRequestBody).message = n.getStringValue(); }],
            ["password", (o, n) => { (o as unknown as InviteRequestBody).password = n.getStringValue(); }],
            ["recipients", (o, n) => { (o as unknown as InviteRequestBody).recipients = n.getCollectionOfObjectValues<DriveRecipient>(DriveRecipient); }],
            ["requireSignIn", (o, n) => { (o as unknown as InviteRequestBody).requireSignIn = n.getBooleanValue(); }],
            ["retainInheritedPermissions", (o, n) => { (o as unknown as InviteRequestBody).retainInheritedPermissions = n.getBooleanValue(); }],
            ["roles", (o, n) => { (o as unknown as InviteRequestBody).roles = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sendInvitation", (o, n) => { (o as unknown as InviteRequestBody).sendInvitation = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("password", this.password);
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", this.recipients);
        writer.writeBooleanValue("requireSignIn", this.requireSignIn);
        writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        writer.writeBooleanValue("sendInvitation", this.sendInvitation);
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
    public set expirationDateTime(value: string | undefined) {
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
     * Sets the recipients property value. 
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: DriveRecipient[] | undefined) {
        this._recipients = value;
    };
    /**
     * Sets the requireSignIn property value. 
     * @param value Value to set for the requireSignIn property.
     */
    public set requireSignIn(value: boolean | undefined) {
        this._requireSignIn = value;
    };
    /**
     * Sets the retainInheritedPermissions property value. 
     * @param value Value to set for the retainInheritedPermissions property.
     */
    public set retainInheritedPermissions(value: boolean | undefined) {
        this._retainInheritedPermissions = value;
    };
    /**
     * Sets the roles property value. 
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        this._roles = value;
    };
    /**
     * Sets the sendInvitation property value. 
     * @param value Value to set for the sendInvitation property.
     */
    public set sendInvitation(value: boolean | undefined) {
        this._sendInvitation = value;
    };
}
