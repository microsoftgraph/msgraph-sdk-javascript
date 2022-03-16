import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue';
import {Entity, ManagedDeviceMobileAppConfigurationAssignment, ManagedDeviceMobileAppConfigurationDeviceStatus, ManagedDeviceMobileAppConfigurationDeviceSummary, ManagedDeviceMobileAppConfigurationUserStatus, ManagedDeviceMobileAppConfigurationUserSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfiguration extends Entity implements Parsable {
    /** The list of group assignemenets for app configration.  */
    private _assignments?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
    /** DateTime the object was created.  */
    private _createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration.  */
    private _description?: string | undefined;
    /** List of ManagedDeviceMobileAppConfigurationDeviceStatus.  */
    private _deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
    /** App configuration device status summary.  */
    private _deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined;
    /** Admin provided name of the device configuration.  */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** the associated app.  */
    private _targetedMobileApps?: string[] | undefined;
    /** List of ManagedDeviceMobileAppConfigurationUserStatus.  */
    private _userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined;
    /** App configuration user status summary.  */
    private _userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary | undefined;
    /** Version of the device configuration.  */
    private _version?: number | undefined;
    /**
     * Gets the assignments property value. The list of group assignemenets for app configration.
     * @returns a managedDeviceMobileAppConfigurationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of group assignemenets for app configration.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: ManagedDeviceMobileAppConfigurationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Instantiates a new managedDeviceMobileAppConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. DateTime the object was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. DateTime the object was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. Admin provided description of the Device Configuration.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Admin provided description of the Device Configuration.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the deviceStatuses property value. List of ManagedDeviceMobileAppConfigurationDeviceStatus.
     * @returns a managedDeviceMobileAppConfigurationDeviceStatus
     */
    public get deviceStatuses() {
        return this._deviceStatuses;
    };
    /**
     * Sets the deviceStatuses property value. List of ManagedDeviceMobileAppConfigurationDeviceStatus.
     * @param value Value to set for the deviceStatuses property.
     */
    public set deviceStatuses(value: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined) {
        this._deviceStatuses = value;
    };
    /**
     * Gets the deviceStatusSummary property value. App configuration device status summary.
     * @returns a managedDeviceMobileAppConfigurationDeviceSummary
     */
    public get deviceStatusSummary() {
        return this._deviceStatusSummary;
    };
    /**
     * Sets the deviceStatusSummary property value. App configuration device status summary.
     * @param value Value to set for the deviceStatusSummary property.
     */
    public set deviceStatusSummary(value: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined) {
        this._deviceStatusSummary = value;
    };
    /**
     * Gets the displayName property value. Admin provided name of the device configuration.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Admin provided name of the device configuration.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignments", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).assignments = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).description = n.getStringValue(); }],
            ["deviceStatuses", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).deviceStatuses = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>(createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue); }],
            ["deviceStatusSummary", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).deviceStatusSummary = n.getObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummary>(createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).lastModifiedDateTime = n.getDateValue(); }],
            ["targetedMobileApps", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).targetedMobileApps = n.getCollectionOfPrimitiveValues<string>(); }],
            ["userStatuses", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).userStatuses = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatus>(createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue); }],
            ["userStatusSummary", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).userStatusSummary = n.getObjectValue<ManagedDeviceMobileAppConfigurationUserSummary>(createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue); }],
            ["version", (o, n) => { (o as unknown as ManagedDeviceMobileAppConfiguration).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>("deviceStatuses", this.deviceStatuses);
        writer.writeObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummary>("deviceStatusSummary", this.deviceStatusSummary);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("targetedMobileApps", this.targetedMobileApps);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatus>("userStatuses", this.userStatuses);
        writer.writeObjectValue<ManagedDeviceMobileAppConfigurationUserSummary>("userStatusSummary", this.userStatusSummary);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Gets the targetedMobileApps property value. the associated app.
     * @returns a string
     */
    public get targetedMobileApps() {
        return this._targetedMobileApps;
    };
    /**
     * Sets the targetedMobileApps property value. the associated app.
     * @param value Value to set for the targetedMobileApps property.
     */
    public set targetedMobileApps(value: string[] | undefined) {
        this._targetedMobileApps = value;
    };
    /**
     * Gets the userStatuses property value. List of ManagedDeviceMobileAppConfigurationUserStatus.
     * @returns a managedDeviceMobileAppConfigurationUserStatus
     */
    public get userStatuses() {
        return this._userStatuses;
    };
    /**
     * Sets the userStatuses property value. List of ManagedDeviceMobileAppConfigurationUserStatus.
     * @param value Value to set for the userStatuses property.
     */
    public set userStatuses(value: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined) {
        this._userStatuses = value;
    };
    /**
     * Gets the userStatusSummary property value. App configuration user status summary.
     * @returns a managedDeviceMobileAppConfigurationUserSummary
     */
    public get userStatusSummary() {
        return this._userStatusSummary;
    };
    /**
     * Sets the userStatusSummary property value. App configuration user status summary.
     * @param value Value to set for the userStatusSummary property.
     */
    public set userStatusSummary(value: ManagedDeviceMobileAppConfigurationUserSummary | undefined) {
        this._userStatusSummary = value;
    };
    /**
     * Gets the version property value. Version of the device configuration.
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the device configuration.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
}
