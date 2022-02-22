import {AlternativeSecurityId, DirectoryObject, Extension} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Device extends DirectoryObject implements Parsable {
    /** true if the account is enabled; otherwise, false. Required. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.  */
    private _accountEnabled?: boolean | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le).  */
    private _alternativeSecurityIds?: AlternativeSecurityId[] | undefined;
    /** The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.  */
    private _approximateLastSignInDateTime?: Date | undefined;
    /** The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _complianceExpirationDateTime?: Date | undefined;
    /** Unique identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith).  */
    private _deviceId?: string | undefined;
    /** For internal use only. Set to null.  */
    private _deviceMetadata?: string | undefined;
    /** For internal use only.  */
    private _deviceVersion?: number | undefined;
    /** The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.  */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for the device. Read-only. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).  */
    private _isCompliant?: boolean | undefined;
    /** true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).  */
    private _isManaged?: boolean | undefined;
    /** Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).  */
    private _mdmAppId?: string | undefined;
    /** Groups that this device is a member of. Read-only. Nullable. Supports $expand.  */
    private _memberOf?: DirectoryObject[] | undefined;
    /** The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).  */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).  */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).  */
    private _operatingSystem?: string | undefined;
    /** The version of the operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).  */
    private _operatingSystemVersion?: string | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith).  */
    private _physicalIds?: string[] | undefined;
    /** The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.  */
    private _profileType?: string | undefined;
    /** The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.  */
    private _registeredOwners?: DirectoryObject[] | undefined;
    /** Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.  */
    private _registeredUsers?: DirectoryObject[] | undefined;
    /** List of labels applied to the device by the system.  */
    private _systemLabels?: string[] | undefined;
    /** Groups that the device is a member of. This operation is transitive. Supports $expand.  */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** Type of trust for the joined device. Read-only. Possible values:  Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory  */
    private _trustType?: string | undefined;
    /**
     * Instantiates a new device and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. Required. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Gets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a alternativeSecurityId
     */
    public get alternativeSecurityIds() {
        return this._alternativeSecurityIds;
    };
    /**
     * Gets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.
     * @returns a Date
     */
    public get approximateLastSignInDateTime() {
        return this._approximateLastSignInDateTime;
    };
    /**
     * Gets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get complianceExpirationDateTime() {
        return this._complianceExpirationDateTime;
    };
    /**
     * Gets the deviceId property value. Unique identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith).
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Gets the deviceMetadata property value. For internal use only. Set to null.
     * @returns a string
     */
    public get deviceMetadata() {
        return this._deviceMetadata;
    };
    /**
     * Gets the deviceVersion property value. For internal use only.
     * @returns a integer
     */
    public get deviceVersion() {
        return this._deviceVersion;
    };
    /**
     * Gets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isCompliant() {
        return this._isCompliant;
    };
    /**
     * Gets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isManaged() {
        return this._isManaged;
    };
    /**
     * Gets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).
     * @returns a string
     */
    public get mdmAppId() {
        return this._mdmAppId;
    };
    /**
     * Gets the memberOf property value. Groups that this device is a member of. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Gets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Gets the operatingSystemVersion property value. The version of the operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @returns a string
     */
    public get operatingSystemVersion() {
        return this._operatingSystemVersion;
    };
    /**
     * Gets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get physicalIds() {
        return this._physicalIds;
    };
    /**
     * Gets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
     * @returns a string
     */
    public get profileType() {
        return this._profileType;
    };
    /**
     * Gets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get registeredOwners() {
        return this._registeredOwners;
    };
    /**
     * Gets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get registeredUsers() {
        return this._registeredUsers;
    };
    /**
     * Gets the systemLabels property value. List of labels applied to the device by the system.
     * @returns a string
     */
    public get systemLabels() {
        return this._systemLabels;
    };
    /**
     * Gets the transitiveMemberOf property value. Groups that the device is a member of. This operation is transitive. Supports $expand.
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Gets the trustType property value. Type of trust for the joined device. Read-only. Possible values:  Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
     * @returns a string
     */
    public get trustType() {
        return this._trustType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accountEnabled", (o, n) => { (o as unknown as Device).accountEnabled = n.getBooleanValue(); }],
            ["alternativeSecurityIds", (o, n) => { (o as unknown as Device).alternativeSecurityIds = n.getCollectionOfObjectValues<AlternativeSecurityId>(AlternativeSecurityId); }],
            ["approximateLastSignInDateTime", (o, n) => { (o as unknown as Device).approximateLastSignInDateTime = n.getDateValue(); }],
            ["complianceExpirationDateTime", (o, n) => { (o as unknown as Device).complianceExpirationDateTime = n.getDateValue(); }],
            ["deviceId", (o, n) => { (o as unknown as Device).deviceId = n.getStringValue(); }],
            ["deviceMetadata", (o, n) => { (o as unknown as Device).deviceMetadata = n.getStringValue(); }],
            ["deviceVersion", (o, n) => { (o as unknown as Device).deviceVersion = n.getNumberValue(); }],
            ["displayName", (o, n) => { (o as unknown as Device).displayName = n.getStringValue(); }],
            ["extensions", (o, n) => { (o as unknown as Device).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["isCompliant", (o, n) => { (o as unknown as Device).isCompliant = n.getBooleanValue(); }],
            ["isManaged", (o, n) => { (o as unknown as Device).isManaged = n.getBooleanValue(); }],
            ["mdmAppId", (o, n) => { (o as unknown as Device).mdmAppId = n.getStringValue(); }],
            ["memberOf", (o, n) => { (o as unknown as Device).memberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["onPremisesLastSyncDateTime", (o, n) => { (o as unknown as Device).onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesSyncEnabled", (o, n) => { (o as unknown as Device).onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["operatingSystem", (o, n) => { (o as unknown as Device).operatingSystem = n.getStringValue(); }],
            ["operatingSystemVersion", (o, n) => { (o as unknown as Device).operatingSystemVersion = n.getStringValue(); }],
            ["physicalIds", (o, n) => { (o as unknown as Device).physicalIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["profileType", (o, n) => { (o as unknown as Device).profileType = n.getStringValue(); }],
            ["registeredOwners", (o, n) => { (o as unknown as Device).registeredOwners = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["registeredUsers", (o, n) => { (o as unknown as Device).registeredUsers = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["systemLabels", (o, n) => { (o as unknown as Device).systemLabels = n.getCollectionOfPrimitiveValues<string>(); }],
            ["transitiveMemberOf", (o, n) => { (o as unknown as Device).transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["trustType", (o, n) => { (o as unknown as Device).trustType = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues<AlternativeSecurityId>("alternativeSecurityIds", this.alternativeSecurityIds);
        writer.writeDateValue("approximateLastSignInDateTime", this.approximateLastSignInDateTime);
        writer.writeDateValue("complianceExpirationDateTime", this.complianceExpirationDateTime);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceMetadata", this.deviceMetadata);
        writer.writeNumberValue("deviceVersion", this.deviceVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeBooleanValue("isCompliant", this.isCompliant);
        writer.writeBooleanValue("isManaged", this.isManaged);
        writer.writeStringValue("mdmAppId", this.mdmAppId);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("operatingSystemVersion", this.operatingSystemVersion);
        writer.writeCollectionOfPrimitiveValues<string>("physicalIds", this.physicalIds);
        writer.writeStringValue("profileType", this.profileType);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredOwners", this.registeredOwners);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredUsers", this.registeredUsers);
        writer.writeCollectionOfPrimitiveValues<string>("systemLabels", this.systemLabels);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeStringValue("trustType", this.trustType);
    };
    /**
     * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. Required. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        this._accountEnabled = value;
    };
    /**
     * Sets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the alternativeSecurityIds property.
     */
    public set alternativeSecurityIds(value: AlternativeSecurityId[] | undefined) {
        this._alternativeSecurityIds = value;
    };
    /**
     * Sets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.
     * @param value Value to set for the approximateLastSignInDateTime property.
     */
    public set approximateLastSignInDateTime(value: Date | undefined) {
        this._approximateLastSignInDateTime = value;
    };
    /**
     * Sets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the complianceExpirationDateTime property.
     */
    public set complianceExpirationDateTime(value: Date | undefined) {
        this._complianceExpirationDateTime = value;
    };
    /**
     * Sets the deviceId property value. Unique identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith).
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Sets the deviceMetadata property value. For internal use only. Set to null.
     * @param value Value to set for the deviceMetadata property.
     */
    public set deviceMetadata(value: string | undefined) {
        this._deviceMetadata = value;
    };
    /**
     * Sets the deviceVersion property value. For internal use only.
     * @param value Value to set for the deviceVersion property.
     */
    public set deviceVersion(value: number | undefined) {
        this._deviceVersion = value;
    };
    /**
     * Sets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @param value Value to set for the isCompliant property.
     */
    public set isCompliant(value: boolean | undefined) {
        this._isCompliant = value;
    };
    /**
     * Sets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @param value Value to set for the isManaged property.
     */
    public set isManaged(value: boolean | undefined) {
        this._isManaged = value;
    };
    /**
     * Sets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).
     * @param value Value to set for the mdmAppId property.
     */
    public set mdmAppId(value: string | undefined) {
        this._mdmAppId = value;
    };
    /**
     * Sets the memberOf property value. Groups that this device is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Sets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Sets the operatingSystemVersion property value. The version of the operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @param value Value to set for the operatingSystemVersion property.
     */
    public set operatingSystemVersion(value: string | undefined) {
        this._operatingSystemVersion = value;
    };
    /**
     * Sets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the physicalIds property.
     */
    public set physicalIds(value: string[] | undefined) {
        this._physicalIds = value;
    };
    /**
     * Sets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
     * @param value Value to set for the profileType property.
     */
    public set profileType(value: string | undefined) {
        this._profileType = value;
    };
    /**
     * Sets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredOwners property.
     */
    public set registeredOwners(value: DirectoryObject[] | undefined) {
        this._registeredOwners = value;
    };
    /**
     * Sets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredUsers property.
     */
    public set registeredUsers(value: DirectoryObject[] | undefined) {
        this._registeredUsers = value;
    };
    /**
     * Sets the systemLabels property value. List of labels applied to the device by the system.
     * @param value Value to set for the systemLabels property.
     */
    public set systemLabels(value: string[] | undefined) {
        this._systemLabels = value;
    };
    /**
     * Sets the transitiveMemberOf property value. Groups that the device is a member of. This operation is transitive. Supports $expand.
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
    /**
     * Sets the trustType property value. Type of trust for the joined device. Read-only. Possible values:  Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
     * @param value Value to set for the trustType property.
     */
    public set trustType(value: string | undefined) {
        this._trustType = value;
    };
}
