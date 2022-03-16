import {ComplianceStatus} from './complianceStatus';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceSettingState extends Entity implements Parsable {
    /** The DateTime when device compliance grace period expires  */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** The Device Id that is being reported  */
    private _deviceId?: string | undefined;
    /** The device model that is being reported  */
    private _deviceModel?: string | undefined;
    /** The Device Name that is being reported  */
    private _deviceName?: string | undefined;
    /** The setting class name and property name.  */
    private _setting?: string | undefined;
    /** The Setting Name that is being reported  */
    private _settingName?: string | undefined;
    /** The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.  */
    private _state?: ComplianceStatus | undefined;
    /** The User email address that is being reported  */
    private _userEmail?: string | undefined;
    /** The user Id that is being reported  */
    private _userId?: string | undefined;
    /** The User Name that is being reported  */
    private _userName?: string | undefined;
    /** The User PrincipalName that is being reported  */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        this._complianceGracePeriodExpirationDateTime = value;
    };
    /**
     * Instantiates a new deviceComplianceSettingState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceId property value. The Device Id that is being reported
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. The Device Id that is being reported
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Gets the deviceModel property value. The device model that is being reported
     * @returns a string
     */
    public get deviceModel() {
        return this._deviceModel;
    };
    /**
     * Sets the deviceModel property value. The device model that is being reported
     * @param value Value to set for the deviceModel property.
     */
    public set deviceModel(value: string | undefined) {
        this._deviceModel = value;
    };
    /**
     * Gets the deviceName property value. The Device Name that is being reported
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. The Device Name that is being reported
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["complianceGracePeriodExpirationDateTime", (o, n) => { (o as unknown as DeviceComplianceSettingState).complianceGracePeriodExpirationDateTime = n.getDateValue(); }],
            ["deviceId", (o, n) => { (o as unknown as DeviceComplianceSettingState).deviceId = n.getStringValue(); }],
            ["deviceModel", (o, n) => { (o as unknown as DeviceComplianceSettingState).deviceModel = n.getStringValue(); }],
            ["deviceName", (o, n) => { (o as unknown as DeviceComplianceSettingState).deviceName = n.getStringValue(); }],
            ["setting", (o, n) => { (o as unknown as DeviceComplianceSettingState).setting = n.getStringValue(); }],
            ["settingName", (o, n) => { (o as unknown as DeviceComplianceSettingState).settingName = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as DeviceComplianceSettingState).state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); }],
            ["userEmail", (o, n) => { (o as unknown as DeviceComplianceSettingState).userEmail = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as DeviceComplianceSettingState).userId = n.getStringValue(); }],
            ["userName", (o, n) => { (o as unknown as DeviceComplianceSettingState).userName = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as DeviceComplianceSettingState).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceModel", this.deviceModel);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("setting", this.setting);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        writer.writeStringValue("userEmail", this.userEmail);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userName", this.userName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the setting property value. The setting class name and property name.
     * @returns a string
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Sets the setting property value. The setting class name and property name.
     * @param value Value to set for the setting property.
     */
    public set setting(value: string | undefined) {
        this._setting = value;
    };
    /**
     * Gets the settingName property value. The Setting Name that is being reported
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Sets the settingName property value. The Setting Name that is being reported
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        this._settingName = value;
    };
    /**
     * Gets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @returns a complianceStatus
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @param value Value to set for the state property.
     */
    public set state(value: ComplianceStatus | undefined) {
        this._state = value;
    };
    /**
     * Gets the userEmail property value. The User email address that is being reported
     * @returns a string
     */
    public get userEmail() {
        return this._userEmail;
    };
    /**
     * Sets the userEmail property value. The User email address that is being reported
     * @param value Value to set for the userEmail property.
     */
    public set userEmail(value: string | undefined) {
        this._userEmail = value;
    };
    /**
     * Gets the userId property value. The user Id that is being reported
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user Id that is being reported
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userName property value. The User Name that is being reported
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. The User Name that is being reported
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
    /**
     * Gets the userPrincipalName property value. The User PrincipalName that is being reported
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The User PrincipalName that is being reported
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
