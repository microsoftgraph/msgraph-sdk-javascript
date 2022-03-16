import {AllowInvitesFrom} from './allowInvitesFrom';
import {createDefaultUserRolePermissionsFromDiscriminatorValue} from './createDefaultUserRolePermissionsFromDiscriminatorValue';
import {DefaultUserRolePermissions, PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthorizationPolicy extends PolicyBase implements Parsable {
    /** Indicates whether users can sign up for email based subscriptions.  */
    private _allowedToSignUpEmailBasedSubscriptions?: boolean | undefined;
    /** Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant.  */
    private _allowedToUseSSPR?: boolean | undefined;
    /** Indicates whether a user can join the tenant by email validation.  */
    private _allowEmailVerifiedUsersToJoinOrganization?: boolean | undefined;
    /** Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below.  */
    private _allowInvitesFrom?: AllowInvitesFrom | undefined;
    /** To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph.  */
    private _blockMsolPowerShell?: boolean | undefined;
    private _defaultUserRolePermissions?: DefaultUserRolePermissions | undefined;
    /** Represents role templateId for the role that should be granted to guest user. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b).  */
    private _guestUserRoleId?: string | undefined;
    /**
     * Gets the allowedToSignUpEmailBasedSubscriptions property value. Indicates whether users can sign up for email based subscriptions.
     * @returns a boolean
     */
    public get allowedToSignUpEmailBasedSubscriptions() {
        return this._allowedToSignUpEmailBasedSubscriptions;
    };
    /**
     * Sets the allowedToSignUpEmailBasedSubscriptions property value. Indicates whether users can sign up for email based subscriptions.
     * @param value Value to set for the allowedToSignUpEmailBasedSubscriptions property.
     */
    public set allowedToSignUpEmailBasedSubscriptions(value: boolean | undefined) {
        this._allowedToSignUpEmailBasedSubscriptions = value;
    };
    /**
     * Gets the allowedToUseSSPR property value. Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant.
     * @returns a boolean
     */
    public get allowedToUseSSPR() {
        return this._allowedToUseSSPR;
    };
    /**
     * Sets the allowedToUseSSPR property value. Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant.
     * @param value Value to set for the allowedToUseSSPR property.
     */
    public set allowedToUseSSPR(value: boolean | undefined) {
        this._allowedToUseSSPR = value;
    };
    /**
     * Gets the allowEmailVerifiedUsersToJoinOrganization property value. Indicates whether a user can join the tenant by email validation.
     * @returns a boolean
     */
    public get allowEmailVerifiedUsersToJoinOrganization() {
        return this._allowEmailVerifiedUsersToJoinOrganization;
    };
    /**
     * Sets the allowEmailVerifiedUsersToJoinOrganization property value. Indicates whether a user can join the tenant by email validation.
     * @param value Value to set for the allowEmailVerifiedUsersToJoinOrganization property.
     */
    public set allowEmailVerifiedUsersToJoinOrganization(value: boolean | undefined) {
        this._allowEmailVerifiedUsersToJoinOrganization = value;
    };
    /**
     * Gets the allowInvitesFrom property value. Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below.
     * @returns a allowInvitesFrom
     */
    public get allowInvitesFrom() {
        return this._allowInvitesFrom;
    };
    /**
     * Sets the allowInvitesFrom property value. Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone.  everyone is the default setting for all cloud environments except US Government. See more in the table below.
     * @param value Value to set for the allowInvitesFrom property.
     */
    public set allowInvitesFrom(value: AllowInvitesFrom | undefined) {
        this._allowInvitesFrom = value;
    };
    /**
     * Gets the blockMsolPowerShell property value. To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph.
     * @returns a boolean
     */
    public get blockMsolPowerShell() {
        return this._blockMsolPowerShell;
    };
    /**
     * Sets the blockMsolPowerShell property value. To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph.
     * @param value Value to set for the blockMsolPowerShell property.
     */
    public set blockMsolPowerShell(value: boolean | undefined) {
        this._blockMsolPowerShell = value;
    };
    /**
     * Instantiates a new authorizationPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultUserRolePermissions property value. 
     * @returns a defaultUserRolePermissions
     */
    public get defaultUserRolePermissions() {
        return this._defaultUserRolePermissions;
    };
    /**
     * Sets the defaultUserRolePermissions property value. 
     * @param value Value to set for the defaultUserRolePermissions property.
     */
    public set defaultUserRolePermissions(value: DefaultUserRolePermissions | undefined) {
        this._defaultUserRolePermissions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allowedToSignUpEmailBasedSubscriptions", (o, n) => { (o as unknown as AuthorizationPolicy).allowedToSignUpEmailBasedSubscriptions = n.getBooleanValue(); }],
            ["allowedToUseSSPR", (o, n) => { (o as unknown as AuthorizationPolicy).allowedToUseSSPR = n.getBooleanValue(); }],
            ["allowEmailVerifiedUsersToJoinOrganization", (o, n) => { (o as unknown as AuthorizationPolicy).allowEmailVerifiedUsersToJoinOrganization = n.getBooleanValue(); }],
            ["allowInvitesFrom", (o, n) => { (o as unknown as AuthorizationPolicy).allowInvitesFrom = n.getEnumValue<AllowInvitesFrom>(AllowInvitesFrom); }],
            ["blockMsolPowerShell", (o, n) => { (o as unknown as AuthorizationPolicy).blockMsolPowerShell = n.getBooleanValue(); }],
            ["defaultUserRolePermissions", (o, n) => { (o as unknown as AuthorizationPolicy).defaultUserRolePermissions = n.getObjectValue<DefaultUserRolePermissions>(createDefaultUserRolePermissionsFromDiscriminatorValue); }],
            ["guestUserRoleId", (o, n) => { (o as unknown as AuthorizationPolicy).guestUserRoleId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the guestUserRoleId property value. Represents role templateId for the role that should be granted to guest user. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b).
     * @returns a string
     */
    public get guestUserRoleId() {
        return this._guestUserRoleId;
    };
    /**
     * Sets the guestUserRoleId property value. Represents role templateId for the role that should be granted to guest user. Currently following roles are supported:  User (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User (2af84b1e-32c8-42b7-82bc-daa82404023b).
     * @param value Value to set for the guestUserRoleId property.
     */
    public set guestUserRoleId(value: string | undefined) {
        this._guestUserRoleId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowedToSignUpEmailBasedSubscriptions", this.allowedToSignUpEmailBasedSubscriptions);
        writer.writeBooleanValue("allowedToUseSSPR", this.allowedToUseSSPR);
        writer.writeBooleanValue("allowEmailVerifiedUsersToJoinOrganization", this.allowEmailVerifiedUsersToJoinOrganization);
        writer.writeEnumValue<AllowInvitesFrom>("allowInvitesFrom", this.allowInvitesFrom);
        writer.writeBooleanValue("blockMsolPowerShell", this.blockMsolPowerShell);
        writer.writeObjectValue<DefaultUserRolePermissions>("defaultUserRolePermissions", this.defaultUserRolePermissions);
        writer.writeStringValue("guestUserRoleId", this.guestUserRoleId);
    };
}
