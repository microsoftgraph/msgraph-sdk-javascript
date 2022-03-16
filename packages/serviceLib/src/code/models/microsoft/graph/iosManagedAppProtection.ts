import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {ManagedAppPolicyDeploymentSummary, ManagedMobileApp, TargetedManagedAppProtection} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosManagedAppProtection extends TargetedManagedAppProtection implements Parsable {
    /** Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.  */
    private _appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    /** List of apps to which the policy is deployed.  */
    private _apps?: ManagedMobileApp[] | undefined;
    /** A custom browser protocol to open weblink on iOS. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.  */
    private _customBrowserProtocol?: string | undefined;
    /** Count of apps to which the current policy is deployed.  */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration.  */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.  */
    private _faceIdBlocked?: boolean | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data.  */
    private _minimumRequiredSdkVersion?: string | undefined;
    /**
     * Gets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @returns a managedAppDataEncryptionType
     */
    public get appDataEncryptionType() {
        return this._appDataEncryptionType;
    };
    /**
     * Sets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     * @param value Value to set for the appDataEncryptionType property.
     */
    public set appDataEncryptionType(value: ManagedAppDataEncryptionType | undefined) {
        this._appDataEncryptionType = value;
    };
    /**
     * Gets the apps property value. List of apps to which the policy is deployed.
     * @returns a managedMobileApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Sets the apps property value. List of apps to which the policy is deployed.
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        this._apps = value;
    };
    /**
     * Instantiates a new iosManagedAppProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the customBrowserProtocol property value. A custom browser protocol to open weblink on iOS. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     * @returns a string
     */
    public get customBrowserProtocol() {
        return this._customBrowserProtocol;
    };
    /**
     * Sets the customBrowserProtocol property value. A custom browser protocol to open weblink on iOS. When this property is configured, ManagedBrowserToOpenLinksRequired should be true.
     * @param value Value to set for the customBrowserProtocol property.
     */
    public set customBrowserProtocol(value: string | undefined) {
        this._customBrowserProtocol = value;
    };
    /**
     * Gets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @returns a integer
     */
    public get deployedAppCount() {
        return this._deployedAppCount;
    };
    /**
     * Sets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @param value Value to set for the deployedAppCount property.
     */
    public set deployedAppCount(value: number | undefined) {
        this._deployedAppCount = value;
    };
    /**
     * Gets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @returns a managedAppPolicyDeploymentSummary
     */
    public get deploymentSummary() {
        return this._deploymentSummary;
    };
    /**
     * Sets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @param value Value to set for the deploymentSummary property.
     */
    public set deploymentSummary(value: ManagedAppPolicyDeploymentSummary | undefined) {
        this._deploymentSummary = value;
    };
    /**
     * Gets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
     * @returns a boolean
     */
    public get faceIdBlocked() {
        return this._faceIdBlocked;
    };
    /**
     * Sets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
     * @param value Value to set for the faceIdBlocked property.
     */
    public set faceIdBlocked(value: boolean | undefined) {
        this._faceIdBlocked = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appDataEncryptionType", (o, n) => { (o as unknown as IosManagedAppProtection).appDataEncryptionType = n.getEnumValue<ManagedAppDataEncryptionType>(ManagedAppDataEncryptionType); }],
            ["apps", (o, n) => { (o as unknown as IosManagedAppProtection).apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); }],
            ["customBrowserProtocol", (o, n) => { (o as unknown as IosManagedAppProtection).customBrowserProtocol = n.getStringValue(); }],
            ["deployedAppCount", (o, n) => { (o as unknown as IosManagedAppProtection).deployedAppCount = n.getNumberValue(); }],
            ["deploymentSummary", (o, n) => { (o as unknown as IosManagedAppProtection).deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); }],
            ["faceIdBlocked", (o, n) => { (o as unknown as IosManagedAppProtection).faceIdBlocked = n.getBooleanValue(); }],
            ["minimumRequiredSdkVersion", (o, n) => { (o as unknown as IosManagedAppProtection).minimumRequiredSdkVersion = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @returns a string
     */
    public get minimumRequiredSdkVersion() {
        return this._minimumRequiredSdkVersion;
    };
    /**
     * Sets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @param value Value to set for the minimumRequiredSdkVersion property.
     */
    public set minimumRequiredSdkVersion(value: string | undefined) {
        this._minimumRequiredSdkVersion = value;
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
        writer.writeStringValue("customBrowserProtocol", this.customBrowserProtocol);
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", this.deploymentSummary);
        writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
    };
}
