import {ComplianceStatus, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfigurationDeviceStatus extends Entity implements Parsable {
    /** The DateTime when device compliance grace period expires  */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus.  */
    private _deviceDisplayName?: string | undefined;
    /** The device model that is being reported  */
    private _deviceModel?: string | undefined;
    /** Last modified date time of the policy report.  */
    private _lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.  */
    private _status?: ComplianceStatus | undefined;
    /** The User Name that is being reported  */
    private _userName?: string | undefined;
    /** UserPrincipalName.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new managedDeviceMobileAppConfigurationDeviceStatus and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Gets the deviceDisplayName property value. Device name of the DevicePolicyStatus.
     * @returns a string
     */
    public get deviceDisplayName() {
        return this._deviceDisplayName;
    };
    /**
     * Gets the deviceModel property value. The device model that is being reported
     * @returns a string
     */
    public get deviceModel() {
        return this._deviceModel;
    };
    /**
     * Gets the lastReportedDateTime property value. Last modified date time of the policy report.
     * @returns a Date
     */
    public get lastReportedDateTime() {
        return this._lastReportedDateTime;
    };
    /**
     * Gets the status property value. Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @returns a complianceStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the userName property value. The User Name that is being reported
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Gets the userPrincipalName property value. UserPrincipalName.
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
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["complianceGracePeriodExpirationDateTime", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).complianceGracePeriodExpirationDateTime = n.getDateValue(); }],
            ["deviceDisplayName", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).deviceDisplayName = n.getStringValue(); }],
            ["deviceModel", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).deviceModel = n.getStringValue(); }],
            ["lastReportedDateTime", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).lastReportedDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); }],
            ["userName", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).userName = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfigurationDeviceStatus).userPrincipalName = n.getStringValue(); }],
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
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        writer.writeStringValue("deviceModel", this.deviceModel);
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", this.status);
        writer.writeStringValue("userName", this.userName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        this._complianceGracePeriodExpirationDateTime = value;
    };
    /**
     * Sets the deviceDisplayName property value. Device name of the DevicePolicyStatus.
     * @param value Value to set for the deviceDisplayName property.
     */
    public set deviceDisplayName(value: string | undefined) {
        this._deviceDisplayName = value;
    };
    /**
     * Sets the deviceModel property value. The device model that is being reported
     * @param value Value to set for the deviceModel property.
     */
    public set deviceModel(value: string | undefined) {
        this._deviceModel = value;
    };
    /**
     * Sets the lastReportedDateTime property value. Last modified date time of the policy report.
     * @param value Value to set for the lastReportedDateTime property.
     */
    public set lastReportedDateTime(value: Date | undefined) {
        this._lastReportedDateTime = value;
    };
    /**
     * Sets the status property value. Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @param value Value to set for the status property.
     */
    public set status(value: ComplianceStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the userName property value. The User Name that is being reported
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
    /**
     * Sets the userPrincipalName property value. UserPrincipalName.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
