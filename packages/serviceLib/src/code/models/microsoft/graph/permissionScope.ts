import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionScope implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf of all users. This text appears in tenant-wide admin consent experiences.  */
    private _adminConsentDescription?: string | undefined;
    /** The permission's title, intended to be read by an administrator granting the permission on behalf of all users.  */
    private _adminConsentDisplayName?: string | undefined;
    /** Unique delegated permission identifier inside the collection of delegated permissions defined for a resource application.  */
    private _id?: string | undefined;
    /** When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false.  At that point, in a subsequent call, the permission may be removed.  */
    private _isEnabled?: boolean | undefined;
    private _origin?: string | undefined;
    /** The possible values are: User and Admin. Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator consent should always be required. While Microsoft Graph defines the default consent requirement for each permission, the tenant administrator may override the behavior in their organization (by allowing, restricting, or limiting user consent to this delegated permission). For more information, see Configure how users consent to applications.  */
    private _type?: string | undefined;
    /** A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.  */
    private _userConsentDescription?: string | undefined;
    /** A title for the permission, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.  */
    private _userConsentDisplayName?: string | undefined;
    /** Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..  */
    private _value?: string | undefined;
    /**
     * Instantiates a new permissionScope and sets the default values.
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
     * Gets the adminConsentDescription property value. A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf of all users. This text appears in tenant-wide admin consent experiences.
     * @returns a string
     */
    public get adminConsentDescription() {
        return this._adminConsentDescription;
    };
    /**
     * Gets the adminConsentDisplayName property value. The permission's title, intended to be read by an administrator granting the permission on behalf of all users.
     * @returns a string
     */
    public get adminConsentDisplayName() {
        return this._adminConsentDisplayName;
    };
    /**
     * Gets the id property value. Unique delegated permission identifier inside the collection of delegated permissions defined for a resource application.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the isEnabled property value. When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false.  At that point, in a subsequent call, the permission may be removed.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Gets the origin property value. 
     * @returns a string
     */
    public get origin() {
        return this._origin;
    };
    /**
     * Gets the type property value. The possible values are: User and Admin. Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator consent should always be required. While Microsoft Graph defines the default consent requirement for each permission, the tenant administrator may override the behavior in their organization (by allowing, restricting, or limiting user consent to this delegated permission). For more information, see Configure how users consent to applications.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the userConsentDescription property value. A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
     * @returns a string
     */
    public get userConsentDescription() {
        return this._userConsentDescription;
    };
    /**
     * Gets the userConsentDisplayName property value. A title for the permission, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
     * @returns a string
     */
    public get userConsentDisplayName() {
        return this._userConsentDisplayName;
    };
    /**
     * Gets the value property value. Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["adminConsentDescription", (o, n) => { (o as unknown as PermissionScope).adminConsentDescription = n.getStringValue(); }],
            ["adminConsentDisplayName", (o, n) => { (o as unknown as PermissionScope).adminConsentDisplayName = n.getStringValue(); }],
            ["id", (o, n) => { (o as unknown as PermissionScope).id = n.getStringValue(); }],
            ["isEnabled", (o, n) => { (o as unknown as PermissionScope).isEnabled = n.getBooleanValue(); }],
            ["origin", (o, n) => { (o as unknown as PermissionScope).origin = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as PermissionScope).type = n.getStringValue(); }],
            ["userConsentDescription", (o, n) => { (o as unknown as PermissionScope).userConsentDescription = n.getStringValue(); }],
            ["userConsentDisplayName", (o, n) => { (o as unknown as PermissionScope).userConsentDisplayName = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as PermissionScope).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("adminConsentDescription", this.adminConsentDescription);
        writer.writeStringValue("adminConsentDisplayName", this.adminConsentDisplayName);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("origin", this.origin);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("userConsentDescription", this.userConsentDescription);
        writer.writeStringValue("userConsentDisplayName", this.userConsentDisplayName);
        writer.writeStringValue("value", this.value);
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
     * Sets the adminConsentDescription property value. A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf of all users. This text appears in tenant-wide admin consent experiences.
     * @param value Value to set for the adminConsentDescription property.
     */
    public set adminConsentDescription(value: string | undefined) {
        this._adminConsentDescription = value;
    };
    /**
     * Sets the adminConsentDisplayName property value. The permission's title, intended to be read by an administrator granting the permission on behalf of all users.
     * @param value Value to set for the adminConsentDisplayName property.
     */
    public set adminConsentDisplayName(value: string | undefined) {
        this._adminConsentDisplayName = value;
    };
    /**
     * Sets the id property value. Unique delegated permission identifier inside the collection of delegated permissions defined for a resource application.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the isEnabled property value. When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false.  At that point, in a subsequent call, the permission may be removed.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Sets the origin property value. 
     * @param value Value to set for the origin property.
     */
    public set origin(value: string | undefined) {
        this._origin = value;
    };
    /**
     * Sets the type property value. The possible values are: User and Admin. Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator consent should always be required. While Microsoft Graph defines the default consent requirement for each permission, the tenant administrator may override the behavior in their organization (by allowing, restricting, or limiting user consent to this delegated permission). For more information, see Configure how users consent to applications.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Sets the userConsentDescription property value. A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
     * @param value Value to set for the userConsentDescription property.
     */
    public set userConsentDescription(value: string | undefined) {
        this._userConsentDescription = value;
    };
    /**
     * Sets the userConsentDisplayName property value. A title for the permission, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
     * @param value Value to set for the userConsentDisplayName property.
     */
    public set userConsentDisplayName(value: string | undefined) {
        this._userConsentDisplayName = value;
    };
    /**
     * Sets the value property value. Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
