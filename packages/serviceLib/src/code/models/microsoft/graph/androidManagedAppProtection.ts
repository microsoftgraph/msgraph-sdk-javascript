import {ManagedAppPolicyDeploymentSummary, ManagedMobileApp, TargetedManagedAppProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidManagedAppProtection extends TargetedManagedAppProtection implements Parsable {
    /** List of apps to which the policy is deployed.  */
    private _apps?: ManagedMobileApp[] | undefined;
    /** Friendly name of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.  */
    private _customBrowserDisplayName?: string | undefined;
    /** Unique identifier of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.  */
    private _customBrowserPackageId?: string | undefined;
    /** Count of apps to which the current policy is deployed.  */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration.  */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled  */
    private _disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    /** Indicates whether application data for managed apps should be encrypted  */
    private _encryptAppData?: boolean | undefined;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app.  */
    private _minimumRequiredPatchVersion?: string | undefined;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app.  */
    private _minimumWarningPatchVersion?: string | undefined;
    /** Indicates whether a managed user can take screen captures of managed apps  */
    private _screenCaptureBlocked?: boolean | undefined;
    /**
     * Instantiates a new androidManagedAppProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the apps property value. List of apps to which the policy is deployed.
     * @returns a managedMobileApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Gets the customBrowserDisplayName property value. Friendly name of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     * @returns a string
     */
    public get customBrowserDisplayName() {
        return this._customBrowserDisplayName;
    };
    /**
     * Gets the customBrowserPackageId property value. Unique identifier of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     * @returns a string
     */
    public get customBrowserPackageId() {
        return this._customBrowserPackageId;
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
     * Gets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled
     * @returns a boolean
     */
    public get disableAppEncryptionIfDeviceEncryptionIsEnabled() {
        return this._disableAppEncryptionIfDeviceEncryptionIsEnabled;
    };
    /**
     * Gets the encryptAppData property value. Indicates whether application data for managed apps should be encrypted
     * @returns a boolean
     */
    public get encryptAppData() {
        return this._encryptAppData;
    };
    /**
     * Gets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app.
     * @returns a string
     */
    public get minimumRequiredPatchVersion() {
        return this._minimumRequiredPatchVersion;
    };
    /**
     * Gets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app.
     * @returns a string
     */
    public get minimumWarningPatchVersion() {
        return this._minimumWarningPatchVersion;
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether a managed user can take screen captures of managed apps
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
            ["apps", (o, n) => { (o as unknown as AndroidManagedAppProtection).apps = n.getCollectionOfObjectValues<ManagedMobileApp>(ManagedMobileApp); }],
            ["customBrowserDisplayName", (o, n) => { (o as unknown as AndroidManagedAppProtection).customBrowserDisplayName = n.getStringValue(); }],
            ["customBrowserPackageId", (o, n) => { (o as unknown as AndroidManagedAppProtection).customBrowserPackageId = n.getStringValue(); }],
            ["deployedAppCount", (o, n) => { (o as unknown as AndroidManagedAppProtection).deployedAppCount = n.getNumberValue(); }],
            ["deploymentSummary", (o, n) => { (o as unknown as AndroidManagedAppProtection).deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(ManagedAppPolicyDeploymentSummary); }],
            ["disableAppEncryptionIfDeviceEncryptionIsEnabled", (o, n) => { (o as unknown as AndroidManagedAppProtection).disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); }],
            ["encryptAppData", (o, n) => { (o as unknown as AndroidManagedAppProtection).encryptAppData = n.getBooleanValue(); }],
            ["minimumRequiredPatchVersion", (o, n) => { (o as unknown as AndroidManagedAppProtection).minimumRequiredPatchVersion = n.getStringValue(); }],
            ["minimumWarningPatchVersion", (o, n) => { (o as unknown as AndroidManagedAppProtection).minimumWarningPatchVersion = n.getStringValue(); }],
            ["screenCaptureBlocked", (o, n) => { (o as unknown as AndroidManagedAppProtection).screenCaptureBlocked = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", this.apps);
        writer.writeStringValue("customBrowserDisplayName", this.customBrowserDisplayName);
        writer.writeStringValue("customBrowserPackageId", this.customBrowserPackageId);
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", this.deploymentSummary);
        writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", this.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        writer.writeBooleanValue("encryptAppData", this.encryptAppData);
        writer.writeStringValue("minimumRequiredPatchVersion", this.minimumRequiredPatchVersion);
        writer.writeStringValue("minimumWarningPatchVersion", this.minimumWarningPatchVersion);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
    };
    /**
     * Sets the apps property value. List of apps to which the policy is deployed.
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        this._apps = value;
    };
    /**
     * Sets the customBrowserDisplayName property value. Friendly name of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     * @param value Value to set for the customBrowserDisplayName property.
     */
    public set customBrowserDisplayName(value: string | undefined) {
        this._customBrowserDisplayName = value;
    };
    /**
     * Sets the customBrowserPackageId property value. Unique identifier of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     * @param value Value to set for the customBrowserPackageId property.
     */
    public set customBrowserPackageId(value: string | undefined) {
        this._customBrowserPackageId = value;
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
     * Sets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled
     * @param value Value to set for the disableAppEncryptionIfDeviceEncryptionIsEnabled property.
     */
    public set disableAppEncryptionIfDeviceEncryptionIsEnabled(value: boolean | undefined) {
        this._disableAppEncryptionIfDeviceEncryptionIsEnabled = value;
    };
    /**
     * Sets the encryptAppData property value. Indicates whether application data for managed apps should be encrypted
     * @param value Value to set for the encryptAppData property.
     */
    public set encryptAppData(value: boolean | undefined) {
        this._encryptAppData = value;
    };
    /**
     * Sets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app.
     * @param value Value to set for the minimumRequiredPatchVersion property.
     */
    public set minimumRequiredPatchVersion(value: string | undefined) {
        this._minimumRequiredPatchVersion = value;
    };
    /**
     * Sets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app.
     * @param value Value to set for the minimumWarningPatchVersion property.
     */
    public set minimumWarningPatchVersion(value: string | undefined) {
        this._minimumWarningPatchVersion = value;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether a managed user can take screen captures of managed apps
     * @param value Value to set for the screenCaptureBlocked property.
     */
    public set screenCaptureBlocked(value: boolean | undefined) {
        this._screenCaptureBlocked = value;
    };
}
