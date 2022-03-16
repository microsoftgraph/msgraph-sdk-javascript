import {createManagedAppOperationFromDiscriminatorValue} from './createManagedAppOperationFromDiscriminatorValue';
import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {Entity, ManagedAppOperation, ManagedAppPolicy, MobileAppIdentifier} from './index';
import {ManagedAppFlaggedReason} from './managedAppFlaggedReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppRegistration extends Entity implements Parsable {
    /** The app package Identifier  */
    private _appIdentifier?: MobileAppIdentifier | undefined;
    /** App version  */
    private _applicationVersion?: string | undefined;
    /** Zero or more policys already applied on the registered app when it last synchronized with managment service.  */
    private _appliedPolicies?: ManagedAppPolicy[] | undefined;
    /** Date and time of creation  */
    private _createdDateTime?: Date | undefined;
    /** Host device name  */
    private _deviceName?: string | undefined;
    /** App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.  */
    private _deviceTag?: string | undefined;
    /** Host device type  */
    private _deviceType?: string | undefined;
    /** Zero or more reasons an app registration is flagged. E.g. app running on rooted device  */
    private _flaggedReasons?: ManagedAppFlaggedReason[] | undefined;
    /** Zero or more policies admin intended for the app as of now.  */
    private _intendedPolicies?: ManagedAppPolicy[] | undefined;
    /** Date and time of last the app synced with management service.  */
    private _lastSyncDateTime?: Date | undefined;
    /** App management SDK version  */
    private _managementSdkVersion?: string | undefined;
    /** Zero or more long running operations triggered on the app registration.  */
    private _operations?: ManagedAppOperation[] | undefined;
    /** Operating System version  */
    private _platformVersion?: string | undefined;
    /** The user Id to who this app registration belongs.  */
    private _userId?: string | undefined;
    /** Version of the entity.  */
    private _version?: string | undefined;
    /**
     * Gets the appIdentifier property value. The app package Identifier
     * @returns a mobileAppIdentifier
     */
    public get appIdentifier() {
        return this._appIdentifier;
    };
    /**
     * Sets the appIdentifier property value. The app package Identifier
     * @param value Value to set for the appIdentifier property.
     */
    public set appIdentifier(value: MobileAppIdentifier | undefined) {
        this._appIdentifier = value;
    };
    /**
     * Gets the applicationVersion property value. App version
     * @returns a string
     */
    public get applicationVersion() {
        return this._applicationVersion;
    };
    /**
     * Sets the applicationVersion property value. App version
     * @param value Value to set for the applicationVersion property.
     */
    public set applicationVersion(value: string | undefined) {
        this._applicationVersion = value;
    };
    /**
     * Gets the appliedPolicies property value. Zero or more policys already applied on the registered app when it last synchronized with managment service.
     * @returns a managedAppPolicy
     */
    public get appliedPolicies() {
        return this._appliedPolicies;
    };
    /**
     * Sets the appliedPolicies property value. Zero or more policys already applied on the registered app when it last synchronized with managment service.
     * @param value Value to set for the appliedPolicies property.
     */
    public set appliedPolicies(value: ManagedAppPolicy[] | undefined) {
        this._appliedPolicies = value;
    };
    /**
     * Instantiates a new managedAppRegistration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date and time of creation
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of creation
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deviceName property value. Host device name
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Host device name
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the deviceTag property value. App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
     * @returns a string
     */
    public get deviceTag() {
        return this._deviceTag;
    };
    /**
     * Sets the deviceTag property value. App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
     * @param value Value to set for the deviceTag property.
     */
    public set deviceTag(value: string | undefined) {
        this._deviceTag = value;
    };
    /**
     * Gets the deviceType property value. Host device type
     * @returns a string
     */
    public get deviceType() {
        return this._deviceType;
    };
    /**
     * Sets the deviceType property value. Host device type
     * @param value Value to set for the deviceType property.
     */
    public set deviceType(value: string | undefined) {
        this._deviceType = value;
    };
    /**
     * Gets the flaggedReasons property value. Zero or more reasons an app registration is flagged. E.g. app running on rooted device
     * @returns a managedAppFlaggedReason
     */
    public get flaggedReasons() {
        return this._flaggedReasons;
    };
    /**
     * Sets the flaggedReasons property value. Zero or more reasons an app registration is flagged. E.g. app running on rooted device
     * @param value Value to set for the flaggedReasons property.
     */
    public set flaggedReasons(value: ManagedAppFlaggedReason[] | undefined) {
        this._flaggedReasons = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appIdentifier", (o, n) => { (o as unknown as ManagedAppRegistration).appIdentifier = n.getObjectValue<MobileAppIdentifier>(createMobileAppIdentifierFromDiscriminatorValue); }],
            ["applicationVersion", (o, n) => { (o as unknown as ManagedAppRegistration).applicationVersion = n.getStringValue(); }],
            ["appliedPolicies", (o, n) => { (o as unknown as ManagedAppRegistration).appliedPolicies = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as ManagedAppRegistration).createdDateTime = n.getDateValue(); }],
            ["deviceName", (o, n) => { (o as unknown as ManagedAppRegistration).deviceName = n.getStringValue(); }],
            ["deviceTag", (o, n) => { (o as unknown as ManagedAppRegistration).deviceTag = n.getStringValue(); }],
            ["deviceType", (o, n) => { (o as unknown as ManagedAppRegistration).deviceType = n.getStringValue(); }],
            ["flaggedReasons", (o, n) => { (o as unknown as ManagedAppRegistration).flaggedReasons = n.getEnumValues<ManagedAppFlaggedReason>(ManagedAppFlaggedReason); }],
            ["intendedPolicies", (o, n) => { (o as unknown as ManagedAppRegistration).intendedPolicies = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); }],
            ["lastSyncDateTime", (o, n) => { (o as unknown as ManagedAppRegistration).lastSyncDateTime = n.getDateValue(); }],
            ["managementSdkVersion", (o, n) => { (o as unknown as ManagedAppRegistration).managementSdkVersion = n.getStringValue(); }],
            ["operations", (o, n) => { (o as unknown as ManagedAppRegistration).operations = n.getCollectionOfObjectValues<ManagedAppOperation>(createManagedAppOperationFromDiscriminatorValue); }],
            ["platformVersion", (o, n) => { (o as unknown as ManagedAppRegistration).platformVersion = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as ManagedAppRegistration).userId = n.getStringValue(); }],
            ["version", (o, n) => { (o as unknown as ManagedAppRegistration).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the intendedPolicies property value. Zero or more policies admin intended for the app as of now.
     * @returns a managedAppPolicy
     */
    public get intendedPolicies() {
        return this._intendedPolicies;
    };
    /**
     * Sets the intendedPolicies property value. Zero or more policies admin intended for the app as of now.
     * @param value Value to set for the intendedPolicies property.
     */
    public set intendedPolicies(value: ManagedAppPolicy[] | undefined) {
        this._intendedPolicies = value;
    };
    /**
     * Gets the lastSyncDateTime property value. Date and time of last the app synced with management service.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. Date and time of last the app synced with management service.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the managementSdkVersion property value. App management SDK version
     * @returns a string
     */
    public get managementSdkVersion() {
        return this._managementSdkVersion;
    };
    /**
     * Sets the managementSdkVersion property value. App management SDK version
     * @param value Value to set for the managementSdkVersion property.
     */
    public set managementSdkVersion(value: string | undefined) {
        this._managementSdkVersion = value;
    };
    /**
     * Gets the operations property value. Zero or more long running operations triggered on the app registration.
     * @returns a managedAppOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. Zero or more long running operations triggered on the app registration.
     * @param value Value to set for the operations property.
     */
    public set operations(value: ManagedAppOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the platformVersion property value. Operating System version
     * @returns a string
     */
    public get platformVersion() {
        return this._platformVersion;
    };
    /**
     * Sets the platformVersion property value. Operating System version
     * @param value Value to set for the platformVersion property.
     */
    public set platformVersion(value: string | undefined) {
        this._platformVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<MobileAppIdentifier>("appIdentifier", this.appIdentifier);
        writer.writeStringValue("applicationVersion", this.applicationVersion);
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("appliedPolicies", this.appliedPolicies);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("deviceTag", this.deviceTag);
        writer.writeStringValue("deviceType", this.deviceType);
        this.flaggedReasons && writer.writeEnumValue<ManagedAppFlaggedReason>("flaggedReasons", ...this.flaggedReasons);
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("intendedPolicies", this.intendedPolicies);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("managementSdkVersion", this.managementSdkVersion);
        writer.writeCollectionOfObjectValues<ManagedAppOperation>("operations", this.operations);
        writer.writeStringValue("platformVersion", this.platformVersion);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the userId property value. The user Id to who this app registration belongs.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user Id to who this app registration belongs.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
