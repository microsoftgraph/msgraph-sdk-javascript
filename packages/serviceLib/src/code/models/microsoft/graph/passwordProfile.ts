import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordProfile implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon.  */
    private _forceChangePasswordNextSignIn?: boolean | undefined;
    /** If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.  */
    private _forceChangePasswordNextSignInWithMfa?: boolean | undefined;
    /** The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.  */
    private _password?: string | undefined;
    /**
     * Instantiates a new passwordProfile and sets the default values.
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
     * Gets the forceChangePasswordNextSignIn property value. true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon.
     * @returns a boolean
     */
    public get forceChangePasswordNextSignIn() {
        return this._forceChangePasswordNextSignIn;
    };
    /**
     * Gets the forceChangePasswordNextSignInWithMfa property value. If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.
     * @returns a boolean
     */
    public get forceChangePasswordNextSignInWithMfa() {
        return this._forceChangePasswordNextSignInWithMfa;
    };
    /**
     * Gets the password property value. The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["forceChangePasswordNextSignIn", (o, n) => { (o as unknown as PasswordProfile).forceChangePasswordNextSignIn = n.getBooleanValue(); }],
            ["forceChangePasswordNextSignInWithMfa", (o, n) => { (o as unknown as PasswordProfile).forceChangePasswordNextSignInWithMfa = n.getBooleanValue(); }],
            ["password", (o, n) => { (o as unknown as PasswordProfile).password = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("forceChangePasswordNextSignIn", this.forceChangePasswordNextSignIn);
        writer.writeBooleanValue("forceChangePasswordNextSignInWithMfa", this.forceChangePasswordNextSignInWithMfa);
        writer.writeStringValue("password", this.password);
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
     * Sets the forceChangePasswordNextSignIn property value. true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon.
     * @param value Value to set for the forceChangePasswordNextSignIn property.
     */
    public set forceChangePasswordNextSignIn(value: boolean | undefined) {
        this._forceChangePasswordNextSignIn = value;
    };
    /**
     * Sets the forceChangePasswordNextSignInWithMfa property value. If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.
     * @param value Value to set for the forceChangePasswordNextSignInWithMfa property.
     */
    public set forceChangePasswordNextSignInWithMfa(value: boolean | undefined) {
        this._forceChangePasswordNextSignInWithMfa = value;
    };
    /**
     * Sets the password property value. The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
}
