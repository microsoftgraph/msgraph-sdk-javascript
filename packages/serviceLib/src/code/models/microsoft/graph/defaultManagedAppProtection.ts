import {KeyValuePair, ManagedAppDataEncryptionType, ManagedAppPolicyDeploymentSummary, ManagedAppProtection, ManagedMobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultManagedAppProtection extends ManagedAppProtection implements Parsable {
    /** Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.  */
    private _appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /** List of apps to which the policy is deployed.  */
    private _apps?: ManagedMobileApp[] | undefined;
    /** A set of string key and string value pairs to be sent to the affected users, unalterned by this service  */
    private _customSettings?: KeyValuePair[] | undefined;
    /** Count of apps to which the current policy is deployed.  */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration.  */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)  */
    private _disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /** Indicates whether managed-app data should be encrypted. (Android only)  */
    private _encryptAppData?: boolean | undefined;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)  */
    private _faceIdBlocked?: boolean | undefined;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)  */
    private _minimumRequiredPatchVersion?: string | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. (iOS Only)  */
    private _minimumRequiredSdkVersion?: string | undefined;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)  */
    private _minimumWarningPatchVersion?: string | undefined;
    /** Indicates whether screen capture is blocked. (Android only)  */
    private _screenCaptureBlocked?: boolean | undefined;
    /**
     * Instantiates a new defaultManagedAppProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @returns a managedAppDataEncryptionType
     */
    public get appDataEncryptionType() {
        return this._appDataEncryptionType;
    };
    /**
     * Gets the apps property value. List of apps to which the policy is deployed.
     * @returns a managedMobileApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Gets the customSettings property value. A set of string key and string value pairs to be sent to the affected users, unalterned by this service
     * @returns a keyValuePair
     */
    public get customSettings() {
        return this._customSettings;
    };
    /**
     * Gets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @returns a integer
     */
    public get deployedAppCount() {
        return this._deployedAppCount;
    };
    /**
     * Gets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @returns a managedAppPolicyDeploymentSummary
     */
    public get deploymentSummary() {
        return this._deploymentSummary;
    };
    /**
     * Gets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
     * @returns a boolean
     */
    public get disableAppEncryptionIfDeviceEncryptionIsEnabled() {
        return this._disableAppEncryptionIfDeviceEncryptionIsEnabled;
    };
    /**
     * Gets the encryptAppData property value. Indicates whether managed-app data should be encrypted. (Android only)
     * @returns a boolean
     */
    public get encryptAppData() {
        return this._encryptAppData;
    };
    /**
     * Gets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
     * @returns a boolean
     */
    public get faceIdBlocked() {
        return this._faceIdBlocked;
    };
    /**
     * Gets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
     * @returns a string
     */
    public get minimumRequiredPatchVersion() {
        return this._minimumRequiredPatchVersion;
    };
    /**
     * Gets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
     * @returns a string
     */
    public get minimumRequiredSdkVersion() {
        return this._minimumRequiredSdkVersion;
    };
    /**
     * Gets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
     * @returns a string
     */
    public get minimumWarningPatchVersion() {
        return this._minimumWarningPatchVersion;
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether screen capture is blocked. (Android only)
     * @returns a boolean
     */
    public get screenCaptureBlocked() {
        return this._screenCaptureBlocked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appDataEncryptionType", (o, n) => { (o as unknown as DefaultManagedAppProtection).appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType); }],
            ["apps", (o, n) => { (o as unknown as DefaultManagedAppProtection).apps = n.getCollectionOfObjectValues<ManagedMobileApp>(ManagedMobileApp); }],
            ["customSettings", (o, n) => { (o as unknown as DefaultManagedAppProtection).customSettings = n.getCollectionOfObjectValues<KeyValuePair>(KeyValuePair); }],
            ["deployedAppCount", (o, n) => { (o as unknown as DefaultManagedAppProtection).deployedAppCount = n.getNumberValue(); }],
            ["deploymentSummary", (o, n) => { (o as unknown as DefaultManagedAppProtection).deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(ManagedAppPolicyDeploymentSummary); }],
            ["disableAppEncryptionIfDeviceEncryptionIsEnabled", (o, n) => { (o as unknown as DefaultManagedAppProtection).disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); }],
            ["encryptAppData", (o, n) => { (o as unknown as DefaultManagedAppProtection).encryptAppData = n.getBooleanValue(); }],
            ["faceIdBlocked", (o, n) => { (o as unknown as DefaultManagedAppProtection).faceIdBlocked = n.getBooleanValue(); }],
            ["minimumRequiredPatchVersion", (o, n) => { (o as unknown as DefaultManagedAppProtection).minimumRequiredPatchVersion = n.getStringValue(); }],
            ["minimumRequiredSdkVersion", (o, n) => { (o as unknown as DefaultManagedAppProtection).minimumRequiredSdkVersion = n.getStringValue(); }],
            ["minimumWarningPatchVersion", (o, n) => { (o as unknown as DefaultManagedAppProtection).minimumWarningPatchVersion = n.getStringValue(); }],
            ["screenCaptureBlocked", (o, n) => { (o as unknown as DefaultManagedAppProtection).screenCaptureBlocked = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", this.appDataEncryptionType);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", this.apps);
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", this.customSettings);
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", this.deploymentSummary);
        writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", this.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        writer.writeBooleanValue("encryptAppData", this.encryptAppData);
        writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        writer.writeStringValue("minimumRequiredPatchVersion", this.minimumRequiredPatchVersion);
        writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
        writer.writeStringValue("minimumWarningPatchVersion", this.minimumWarningPatchVersion);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
    };
    /**
     * Sets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @param value Value to set for the appDataEncryptionType property.
     */
    public set appDataEncryptionType(value: ManagedAppDataEncryptionType | undefined) {
        this._appDataEncryptionType = value;
    };
    /**
     * Sets the apps property value. List of apps to which the policy is deployed.
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        this._apps = value;
    };
    /**
     * Sets the customSettings property value. A set of string key and string value pairs to be sent to the affected users, unalterned by this service
     * @param value Value to set for the customSettings property.
     */
    public set customSettings(value: KeyValuePair[] | undefined) {
        this._customSettings = value;
    };
    /**
     * Sets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @param value Value to set for the deployedAppCount property.
     */
    public set deployedAppCount(value: number | undefined) {
        this._deployedAppCount = value;
    };
    /**
     * Sets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @param value Value to set for the deploymentSummary property.
     */
    public set deploymentSummary(value: ManagedAppPolicyDeploymentSummary | undefined) {
        this._deploymentSummary = value;
    };
    /**
     * Sets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
     * @param value Value to set for the disableAppEncryptionIfDeviceEncryptionIsEnabled property.
     */
    public set disableAppEncryptionIfDeviceEncryptionIsEnabled(value: boolean | undefined) {
        this._disableAppEncryptionIfDeviceEncryptionIsEnabled = value;
    };
    /**
     * Sets the encryptAppData property value. Indicates whether managed-app data should be encrypted. (Android only)
     * @param value Value to set for the encryptAppData property.
     */
    public set encryptAppData(value: boolean | undefined) {
        this._encryptAppData = value;
    };
    /**
     * Sets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
     * @param value Value to set for the faceIdBlocked property.
     */
    public set faceIdBlocked(value: boolean | undefined) {
        this._faceIdBlocked = value;
    };
    /**
     * Sets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
     * @param value Value to set for the minimumRequiredPatchVersion property.
     */
    public set minimumRequiredPatchVersion(value: string | undefined) {
        this._minimumRequiredPatchVersion = value;
    };
    /**
     * Sets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
     * @param value Value to set for the minimumRequiredSdkVersion property.
     */
    public set minimumRequiredSdkVersion(value: string | undefined) {
        this._minimumRequiredSdkVersion = value;
    };
    /**
     * Sets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
     * @param value Value to set for the minimumWarningPatchVersion property.
     */
    public set minimumWarningPatchVersion(value: string | undefined) {
        this._minimumWarningPatchVersion = value;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether screen capture is blocked. (Android only)
     * @param value Value to set for the screenCaptureBlocked property.
     */
    public set screenCaptureBlocked(value: boolean | undefined) {
        this._screenCaptureBlocked = value;
    };
}
