import {EmailRole, LogonType, UserAccountSecurityType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSecurityState implements Parsable {
    /** AAD User object identifier (GUID) - represents the physical/multi-account user entity.  */
    private _aadUserId?: string | undefined;
    /** Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).  */
    private _accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** NetBIOS/Active Directory domain of user account (that is, domain/account format).  */
    private _domainName?: string | undefined;
    /** For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.  */
    private _emailRole?: EmailRole | undefined;
    /** Indicates whether the user logged on through a VPN.  */
    private _isVpn?: boolean | undefined;
    /** Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _logonDateTime?: Date | undefined;
    /** User sign-in ID.  */
    private _logonId?: string | undefined;
    /** IP Address the sign-in request originated from.  */
    private _logonIp?: string | undefined;
    /** Location (by IP address mapping) associated with a user sign-in event by this user.  */
    private _logonLocation?: string | undefined;
    /** Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.  */
    private _logonType?: LogonType | undefined;
    /** Active Directory (on-premises) Security Identifier (SID) of the user.  */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage.  */
    private _riskScore?: string | undefined;
    /** User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator.  */
    private _userAccountType?: UserAccountSecurityType | undefined;
    /** User sign-in name - internet format: (user account name)@(user account DNS domain name).  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new userSecurityState and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the aadUserId property value. AAD User object identifier (GUID) - represents the physical/multi-account user entity.
     * @returns a string
     */
    public get aadUserId() {
        return this._aadUserId;
    };
    /**
     * Gets the accountName property value. Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).
     * @returns a string
     */
    public get accountName() {
        return this._accountName;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the domainName property value. NetBIOS/Active Directory domain of user account (that is, domain/account format).
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Gets the emailRole property value. For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.
     * @returns a emailRole
     */
    public get emailRole() {
        return this._emailRole;
    };
    /**
     * Gets the isVpn property value. Indicates whether the user logged on through a VPN.
     * @returns a boolean
     */
    public get isVpn() {
        return this._isVpn;
    };
    /**
     * Gets the logonDateTime property value. Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get logonDateTime() {
        return this._logonDateTime;
    };
    /**
     * Gets the logonId property value. User sign-in ID.
     * @returns a string
     */
    public get logonId() {
        return this._logonId;
    };
    /**
     * Gets the logonIp property value. IP Address the sign-in request originated from.
     * @returns a string
     */
    public get logonIp() {
        return this._logonIp;
    };
    /**
     * Gets the logonLocation property value. Location (by IP address mapping) associated with a user sign-in event by this user.
     * @returns a string
     */
    public get logonLocation() {
        return this._logonLocation;
    };
    /**
     * Gets the logonType property value. Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.
     * @returns a logonType
     */
    public get logonType() {
        return this._logonType;
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Active Directory (on-premises) Security Identifier (SID) of the user.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Gets the riskScore property value. Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Gets the userAccountType property value. User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator.
     * @returns a userAccountSecurityType
     */
    public get userAccountType() {
        return this._userAccountType;
    };
    /**
     * Gets the userPrincipalName property value. User sign-in name - internet format: (user account name)@(user account DNS domain name).
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["aadUserId", (o, n) => { (o as unknown as UserSecurityState).aadUserId = n.getStringValue(); }],
            ["accountName", (o, n) => { (o as unknown as UserSecurityState).accountName = n.getStringValue(); }],
            ["domainName", (o, n) => { (o as unknown as UserSecurityState).domainName = n.getStringValue(); }],
            ["emailRole", (o, n) => { (o as unknown as UserSecurityState).emailRole = n.getEnumValue<EmailRole>(EmailRole); }],
            ["isVpn", (o, n) => { (o as unknown as UserSecurityState).isVpn = n.getBooleanValue(); }],
            ["logonDateTime", (o, n) => { (o as unknown as UserSecurityState).logonDateTime = n.getDateValue(); }],
            ["logonId", (o, n) => { (o as unknown as UserSecurityState).logonId = n.getStringValue(); }],
            ["logonIp", (o, n) => { (o as unknown as UserSecurityState).logonIp = n.getStringValue(); }],
            ["logonLocation", (o, n) => { (o as unknown as UserSecurityState).logonLocation = n.getStringValue(); }],
            ["logonType", (o, n) => { (o as unknown as UserSecurityState).logonType = n.getEnumValue<LogonType>(LogonType); }],
            ["onPremisesSecurityIdentifier", (o, n) => { (o as unknown as UserSecurityState).onPremisesSecurityIdentifier = n.getStringValue(); }],
            ["riskScore", (o, n) => { (o as unknown as UserSecurityState).riskScore = n.getStringValue(); }],
            ["userAccountType", (o, n) => { (o as unknown as UserSecurityState).userAccountType = n.getEnumValue<UserAccountSecurityType>(UserAccountSecurityType); }],
            ["userPrincipalName", (o, n) => { (o as unknown as UserSecurityState).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("aadUserId", this.aadUserId);
        writer.writeStringValue("accountName", this.accountName);
        writer.writeStringValue("domainName", this.domainName);
        writer.writeEnumValue<EmailRole>("emailRole", this.emailRole);
        writer.writeBooleanValue("isVpn", this.isVpn);
        writer.writeDateValue("logonDateTime", this.logonDateTime);
        writer.writeStringValue("logonId", this.logonId);
        writer.writeStringValue("logonIp", this.logonIp);
        writer.writeStringValue("logonLocation", this.logonLocation);
        writer.writeEnumValue<LogonType>("logonType", this.logonType);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeStringValue("riskScore", this.riskScore);
        writer.writeEnumValue<UserAccountSecurityType>("userAccountType", this.userAccountType);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the aadUserId property value. AAD User object identifier (GUID) - represents the physical/multi-account user entity.
     * @param value Value to set for the aadUserId property.
     */
    public set aadUserId(value: string | undefined) {
        this._aadUserId = value;
    };
    /**
     * Sets the accountName property value. Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).
     * @param value Value to set for the accountName property.
     */
    public set accountName(value: string | undefined) {
        this._accountName = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the domainName property value. NetBIOS/Active Directory domain of user account (that is, domain/account format).
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * Sets the emailRole property value. For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.
     * @param value Value to set for the emailRole property.
     */
    public set emailRole(value: EmailRole | undefined) {
        this._emailRole = value;
    };
    /**
     * Sets the isVpn property value. Indicates whether the user logged on through a VPN.
     * @param value Value to set for the isVpn property.
     */
    public set isVpn(value: boolean | undefined) {
        this._isVpn = value;
    };
    /**
     * Sets the logonDateTime property value. Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the logonDateTime property.
     */
    public set logonDateTime(value: Date | undefined) {
        this._logonDateTime = value;
    };
    /**
     * Sets the logonId property value. User sign-in ID.
     * @param value Value to set for the logonId property.
     */
    public set logonId(value: string | undefined) {
        this._logonId = value;
    };
    /**
     * Sets the logonIp property value. IP Address the sign-in request originated from.
     * @param value Value to set for the logonIp property.
     */
    public set logonIp(value: string | undefined) {
        this._logonIp = value;
    };
    /**
     * Sets the logonLocation property value. Location (by IP address mapping) associated with a user sign-in event by this user.
     * @param value Value to set for the logonLocation property.
     */
    public set logonLocation(value: string | undefined) {
        this._logonLocation = value;
    };
    /**
     * Sets the logonType property value. Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.
     * @param value Value to set for the logonType property.
     */
    public set logonType(value: LogonType | undefined) {
        this._logonType = value;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Active Directory (on-premises) Security Identifier (SID) of the user.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        this._onPremisesSecurityIdentifier = value;
    };
    /**
     * Sets the riskScore property value. Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Sets the userAccountType property value. User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator.
     * @param value Value to set for the userAccountType property.
     */
    public set userAccountType(value: UserAccountSecurityType | undefined) {
        this._userAccountType = value;
    };
    /**
     * Sets the userPrincipalName property value. User sign-in name - internet format: (user account name)@(user account DNS domain name).
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
