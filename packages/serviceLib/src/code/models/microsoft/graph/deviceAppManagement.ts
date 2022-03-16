import {createAndroidManagedAppProtectionFromDiscriminatorValue} from './createAndroidManagedAppProtectionFromDiscriminatorValue';
import {createDefaultManagedAppProtectionFromDiscriminatorValue} from './createDefaultManagedAppProtectionFromDiscriminatorValue';
import {createIosManagedAppProtectionFromDiscriminatorValue} from './createIosManagedAppProtectionFromDiscriminatorValue';
import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {createManagedAppStatusFromDiscriminatorValue} from './createManagedAppStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationFromDiscriminatorValue';
import {createManagedEBookFromDiscriminatorValue} from './createManagedEBookFromDiscriminatorValue';
import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {createVppTokenFromDiscriminatorValue} from './createVppTokenFromDiscriminatorValue';
import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {AndroidManagedAppProtection, DefaultManagedAppProtection, Entity, IosManagedAppProtection, ManagedAppPolicy, ManagedAppRegistration, ManagedAppStatus, ManagedDeviceMobileAppConfiguration, ManagedEBook, MdmWindowsInformationProtectionPolicy, MobileApp, MobileAppCategory, TargetedManagedAppConfiguration, VppToken, WindowsInformationProtectionPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Singleton entity that acts as a container for all device app management functionality.  */
export class DeviceAppManagement extends Entity implements Parsable {
    /** Android managed app policies.  */
    private _androidManagedAppProtections?: AndroidManagedAppProtection[] | undefined;
    /** Default managed app policies.  */
    private _defaultManagedAppProtections?: DefaultManagedAppProtection[] | undefined;
    /** iOS managed app policies.  */
    private _iosManagedAppProtections?: IosManagedAppProtection[] | undefined;
    /** Whether the account is enabled for syncing applications from the Microsoft Store for Business.  */
    private _isEnabledForMicrosoftStoreForBusiness?: boolean | undefined;
    /** Managed app policies.  */
    private _managedAppPolicies?: ManagedAppPolicy[] | undefined;
    /** The managed app registrations.  */
    private _managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /** The managed app statuses.  */
    private _managedAppStatuses?: ManagedAppStatus[] | undefined;
    /** The Managed eBook.  */
    private _managedEBooks?: ManagedEBook[] | undefined;
    /** Windows information protection for apps running on devices which are MDM enrolled.  */
    private _mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[] | undefined;
    /** The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.  */
    private _microsoftStoreForBusinessLanguage?: string | undefined;
    /** The last time an application sync from the Microsoft Store for Business was completed.  */
    private _microsoftStoreForBusinessLastCompletedApplicationSyncTime?: Date | undefined;
    /** The last time the apps from the Microsoft Store for Business were synced successfully for the account.  */
    private _microsoftStoreForBusinessLastSuccessfulSyncDateTime?: Date | undefined;
    /** The mobile app categories.  */
    private _mobileAppCategories?: MobileAppCategory[] | undefined;
    /** The Managed Device Mobile Application Configurations.  */
    private _mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[] | undefined;
    /** The mobile apps.  */
    private _mobileApps?: MobileApp[] | undefined;
    /** Targeted managed app configurations.  */
    private _targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[] | undefined;
    /** List of Vpp tokens for this organization.  */
    private _vppTokens?: VppToken[] | undefined;
    /** Windows information protection for apps running on devices which are not MDM enrolled.  */
    private _windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[] | undefined;
    /**
     * Gets the androidManagedAppProtections property value. Android managed app policies.
     * @returns a androidManagedAppProtection
     */
    public get androidManagedAppProtections() {
        return this._androidManagedAppProtections;
    };
    /**
     * Sets the androidManagedAppProtections property value. Android managed app policies.
     * @param value Value to set for the androidManagedAppProtections property.
     */
    public set androidManagedAppProtections(value: AndroidManagedAppProtection[] | undefined) {
        this._androidManagedAppProtections = value;
    };
    /**
     * Instantiates a new deviceAppManagement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultManagedAppProtections property value. Default managed app policies.
     * @returns a defaultManagedAppProtection
     */
    public get defaultManagedAppProtections() {
        return this._defaultManagedAppProtections;
    };
    /**
     * Sets the defaultManagedAppProtections property value. Default managed app policies.
     * @param value Value to set for the defaultManagedAppProtections property.
     */
    public set defaultManagedAppProtections(value: DefaultManagedAppProtection[] | undefined) {
        this._defaultManagedAppProtections = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["androidManagedAppProtections", (o, n) => { (o as unknown as DeviceAppManagement).androidManagedAppProtections = n.getCollectionOfObjectValues<AndroidManagedAppProtection>(createAndroidManagedAppProtectionFromDiscriminatorValue); }],
            ["defaultManagedAppProtections", (o, n) => { (o as unknown as DeviceAppManagement).defaultManagedAppProtections = n.getCollectionOfObjectValues<DefaultManagedAppProtection>(createDefaultManagedAppProtectionFromDiscriminatorValue); }],
            ["iosManagedAppProtections", (o, n) => { (o as unknown as DeviceAppManagement).iosManagedAppProtections = n.getCollectionOfObjectValues<IosManagedAppProtection>(createIosManagedAppProtectionFromDiscriminatorValue); }],
            ["isEnabledForMicrosoftStoreForBusiness", (o, n) => { (o as unknown as DeviceAppManagement).isEnabledForMicrosoftStoreForBusiness = n.getBooleanValue(); }],
            ["managedAppPolicies", (o, n) => { (o as unknown as DeviceAppManagement).managedAppPolicies = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); }],
            ["managedAppRegistrations", (o, n) => { (o as unknown as DeviceAppManagement).managedAppRegistrations = n.getCollectionOfObjectValues<ManagedAppRegistration>(createManagedAppRegistrationFromDiscriminatorValue); }],
            ["managedAppStatuses", (o, n) => { (o as unknown as DeviceAppManagement).managedAppStatuses = n.getCollectionOfObjectValues<ManagedAppStatus>(createManagedAppStatusFromDiscriminatorValue); }],
            ["managedEBooks", (o, n) => { (o as unknown as DeviceAppManagement).managedEBooks = n.getCollectionOfObjectValues<ManagedEBook>(createManagedEBookFromDiscriminatorValue); }],
            ["mdmWindowsInformationProtectionPolicies", (o, n) => { (o as unknown as DeviceAppManagement).mdmWindowsInformationProtectionPolicies = n.getCollectionOfObjectValues<MdmWindowsInformationProtectionPolicy>(createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue); }],
            ["microsoftStoreForBusinessLanguage", (o, n) => { (o as unknown as DeviceAppManagement).microsoftStoreForBusinessLanguage = n.getStringValue(); }],
            ["microsoftStoreForBusinessLastCompletedApplicationSyncTime", (o, n) => { (o as unknown as DeviceAppManagement).microsoftStoreForBusinessLastCompletedApplicationSyncTime = n.getDateValue(); }],
            ["microsoftStoreForBusinessLastSuccessfulSyncDateTime", (o, n) => { (o as unknown as DeviceAppManagement).microsoftStoreForBusinessLastSuccessfulSyncDateTime = n.getDateValue(); }],
            ["mobileAppCategories", (o, n) => { (o as unknown as DeviceAppManagement).mobileAppCategories = n.getCollectionOfObjectValues<MobileAppCategory>(createMobileAppCategoryFromDiscriminatorValue); }],
            ["mobileAppConfigurations", (o, n) => { (o as unknown as DeviceAppManagement).mobileAppConfigurations = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfiguration>(createManagedDeviceMobileAppConfigurationFromDiscriminatorValue); }],
            ["mobileApps", (o, n) => { (o as unknown as DeviceAppManagement).mobileApps = n.getCollectionOfObjectValues<MobileApp>(createMobileAppFromDiscriminatorValue); }],
            ["targetedManagedAppConfigurations", (o, n) => { (o as unknown as DeviceAppManagement).targetedManagedAppConfigurations = n.getCollectionOfObjectValues<TargetedManagedAppConfiguration>(createTargetedManagedAppConfigurationFromDiscriminatorValue); }],
            ["vppTokens", (o, n) => { (o as unknown as DeviceAppManagement).vppTokens = n.getCollectionOfObjectValues<VppToken>(createVppTokenFromDiscriminatorValue); }],
            ["windowsInformationProtectionPolicies", (o, n) => { (o as unknown as DeviceAppManagement).windowsInformationProtectionPolicies = n.getCollectionOfObjectValues<WindowsInformationProtectionPolicy>(createWindowsInformationProtectionPolicyFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the iosManagedAppProtections property value. iOS managed app policies.
     * @returns a iosManagedAppProtection
     */
    public get iosManagedAppProtections() {
        return this._iosManagedAppProtections;
    };
    /**
     * Sets the iosManagedAppProtections property value. iOS managed app policies.
     * @param value Value to set for the iosManagedAppProtections property.
     */
    public set iosManagedAppProtections(value: IosManagedAppProtection[] | undefined) {
        this._iosManagedAppProtections = value;
    };
    /**
     * Gets the isEnabledForMicrosoftStoreForBusiness property value. Whether the account is enabled for syncing applications from the Microsoft Store for Business.
     * @returns a boolean
     */
    public get isEnabledForMicrosoftStoreForBusiness() {
        return this._isEnabledForMicrosoftStoreForBusiness;
    };
    /**
     * Sets the isEnabledForMicrosoftStoreForBusiness property value. Whether the account is enabled for syncing applications from the Microsoft Store for Business.
     * @param value Value to set for the isEnabledForMicrosoftStoreForBusiness property.
     */
    public set isEnabledForMicrosoftStoreForBusiness(value: boolean | undefined) {
        this._isEnabledForMicrosoftStoreForBusiness = value;
    };
    /**
     * Gets the managedAppPolicies property value. Managed app policies.
     * @returns a managedAppPolicy
     */
    public get managedAppPolicies() {
        return this._managedAppPolicies;
    };
    /**
     * Sets the managedAppPolicies property value. Managed app policies.
     * @param value Value to set for the managedAppPolicies property.
     */
    public set managedAppPolicies(value: ManagedAppPolicy[] | undefined) {
        this._managedAppPolicies = value;
    };
    /**
     * Gets the managedAppRegistrations property value. The managed app registrations.
     * @returns a managedAppRegistration
     */
    public get managedAppRegistrations() {
        return this._managedAppRegistrations;
    };
    /**
     * Sets the managedAppRegistrations property value. The managed app registrations.
     * @param value Value to set for the managedAppRegistrations property.
     */
    public set managedAppRegistrations(value: ManagedAppRegistration[] | undefined) {
        this._managedAppRegistrations = value;
    };
    /**
     * Gets the managedAppStatuses property value. The managed app statuses.
     * @returns a managedAppStatus
     */
    public get managedAppStatuses() {
        return this._managedAppStatuses;
    };
    /**
     * Sets the managedAppStatuses property value. The managed app statuses.
     * @param value Value to set for the managedAppStatuses property.
     */
    public set managedAppStatuses(value: ManagedAppStatus[] | undefined) {
        this._managedAppStatuses = value;
    };
    /**
     * Gets the managedEBooks property value. The Managed eBook.
     * @returns a managedEBook
     */
    public get managedEBooks() {
        return this._managedEBooks;
    };
    /**
     * Sets the managedEBooks property value. The Managed eBook.
     * @param value Value to set for the managedEBooks property.
     */
    public set managedEBooks(value: ManagedEBook[] | undefined) {
        this._managedEBooks = value;
    };
    /**
     * Gets the mdmWindowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are MDM enrolled.
     * @returns a mdmWindowsInformationProtectionPolicy
     */
    public get mdmWindowsInformationProtectionPolicies() {
        return this._mdmWindowsInformationProtectionPolicies;
    };
    /**
     * Sets the mdmWindowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are MDM enrolled.
     * @param value Value to set for the mdmWindowsInformationProtectionPolicies property.
     */
    public set mdmWindowsInformationProtectionPolicies(value: MdmWindowsInformationProtectionPolicy[] | undefined) {
        this._mdmWindowsInformationProtectionPolicies = value;
    };
    /**
     * Gets the microsoftStoreForBusinessLanguage property value. The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
     * @returns a string
     */
    public get microsoftStoreForBusinessLanguage() {
        return this._microsoftStoreForBusinessLanguage;
    };
    /**
     * Sets the microsoftStoreForBusinessLanguage property value. The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
     * @param value Value to set for the microsoftStoreForBusinessLanguage property.
     */
    public set microsoftStoreForBusinessLanguage(value: string | undefined) {
        this._microsoftStoreForBusinessLanguage = value;
    };
    /**
     * Gets the microsoftStoreForBusinessLastCompletedApplicationSyncTime property value. The last time an application sync from the Microsoft Store for Business was completed.
     * @returns a Date
     */
    public get microsoftStoreForBusinessLastCompletedApplicationSyncTime() {
        return this._microsoftStoreForBusinessLastCompletedApplicationSyncTime;
    };
    /**
     * Sets the microsoftStoreForBusinessLastCompletedApplicationSyncTime property value. The last time an application sync from the Microsoft Store for Business was completed.
     * @param value Value to set for the microsoftStoreForBusinessLastCompletedApplicationSyncTime property.
     */
    public set microsoftStoreForBusinessLastCompletedApplicationSyncTime(value: Date | undefined) {
        this._microsoftStoreForBusinessLastCompletedApplicationSyncTime = value;
    };
    /**
     * Gets the microsoftStoreForBusinessLastSuccessfulSyncDateTime property value. The last time the apps from the Microsoft Store for Business were synced successfully for the account.
     * @returns a Date
     */
    public get microsoftStoreForBusinessLastSuccessfulSyncDateTime() {
        return this._microsoftStoreForBusinessLastSuccessfulSyncDateTime;
    };
    /**
     * Sets the microsoftStoreForBusinessLastSuccessfulSyncDateTime property value. The last time the apps from the Microsoft Store for Business were synced successfully for the account.
     * @param value Value to set for the microsoftStoreForBusinessLastSuccessfulSyncDateTime property.
     */
    public set microsoftStoreForBusinessLastSuccessfulSyncDateTime(value: Date | undefined) {
        this._microsoftStoreForBusinessLastSuccessfulSyncDateTime = value;
    };
    /**
     * Gets the mobileAppCategories property value. The mobile app categories.
     * @returns a mobileAppCategory
     */
    public get mobileAppCategories() {
        return this._mobileAppCategories;
    };
    /**
     * Sets the mobileAppCategories property value. The mobile app categories.
     * @param value Value to set for the mobileAppCategories property.
     */
    public set mobileAppCategories(value: MobileAppCategory[] | undefined) {
        this._mobileAppCategories = value;
    };
    /**
     * Gets the mobileAppConfigurations property value. The Managed Device Mobile Application Configurations.
     * @returns a managedDeviceMobileAppConfiguration
     */
    public get mobileAppConfigurations() {
        return this._mobileAppConfigurations;
    };
    /**
     * Sets the mobileAppConfigurations property value. The Managed Device Mobile Application Configurations.
     * @param value Value to set for the mobileAppConfigurations property.
     */
    public set mobileAppConfigurations(value: ManagedDeviceMobileAppConfiguration[] | undefined) {
        this._mobileAppConfigurations = value;
    };
    /**
     * Gets the mobileApps property value. The mobile apps.
     * @returns a mobileApp
     */
    public get mobileApps() {
        return this._mobileApps;
    };
    /**
     * Sets the mobileApps property value. The mobile apps.
     * @param value Value to set for the mobileApps property.
     */
    public set mobileApps(value: MobileApp[] | undefined) {
        this._mobileApps = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AndroidManagedAppProtection>("androidManagedAppProtections", this.androidManagedAppProtections);
        writer.writeCollectionOfObjectValues<DefaultManagedAppProtection>("defaultManagedAppProtections", this.defaultManagedAppProtections);
        writer.writeCollectionOfObjectValues<IosManagedAppProtection>("iosManagedAppProtections", this.iosManagedAppProtections);
        writer.writeBooleanValue("isEnabledForMicrosoftStoreForBusiness", this.isEnabledForMicrosoftStoreForBusiness);
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("managedAppPolicies", this.managedAppPolicies);
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("managedAppRegistrations", this.managedAppRegistrations);
        writer.writeCollectionOfObjectValues<ManagedAppStatus>("managedAppStatuses", this.managedAppStatuses);
        writer.writeCollectionOfObjectValues<ManagedEBook>("managedEBooks", this.managedEBooks);
        writer.writeCollectionOfObjectValues<MdmWindowsInformationProtectionPolicy>("mdmWindowsInformationProtectionPolicies", this.mdmWindowsInformationProtectionPolicies);
        writer.writeStringValue("microsoftStoreForBusinessLanguage", this.microsoftStoreForBusinessLanguage);
        writer.writeDateValue("microsoftStoreForBusinessLastCompletedApplicationSyncTime", this.microsoftStoreForBusinessLastCompletedApplicationSyncTime);
        writer.writeDateValue("microsoftStoreForBusinessLastSuccessfulSyncDateTime", this.microsoftStoreForBusinessLastSuccessfulSyncDateTime);
        writer.writeCollectionOfObjectValues<MobileAppCategory>("mobileAppCategories", this.mobileAppCategories);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfiguration>("mobileAppConfigurations", this.mobileAppConfigurations);
        writer.writeCollectionOfObjectValues<MobileApp>("mobileApps", this.mobileApps);
        writer.writeCollectionOfObjectValues<TargetedManagedAppConfiguration>("targetedManagedAppConfigurations", this.targetedManagedAppConfigurations);
        writer.writeCollectionOfObjectValues<VppToken>("vppTokens", this.vppTokens);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionPolicy>("windowsInformationProtectionPolicies", this.windowsInformationProtectionPolicies);
    };
    /**
     * Gets the targetedManagedAppConfigurations property value. Targeted managed app configurations.
     * @returns a targetedManagedAppConfiguration
     */
    public get targetedManagedAppConfigurations() {
        return this._targetedManagedAppConfigurations;
    };
    /**
     * Sets the targetedManagedAppConfigurations property value. Targeted managed app configurations.
     * @param value Value to set for the targetedManagedAppConfigurations property.
     */
    public set targetedManagedAppConfigurations(value: TargetedManagedAppConfiguration[] | undefined) {
        this._targetedManagedAppConfigurations = value;
    };
    /**
     * Gets the vppTokens property value. List of Vpp tokens for this organization.
     * @returns a vppToken
     */
    public get vppTokens() {
        return this._vppTokens;
    };
    /**
     * Sets the vppTokens property value. List of Vpp tokens for this organization.
     * @param value Value to set for the vppTokens property.
     */
    public set vppTokens(value: VppToken[] | undefined) {
        this._vppTokens = value;
    };
    /**
     * Gets the windowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are not MDM enrolled.
     * @returns a windowsInformationProtectionPolicy
     */
    public get windowsInformationProtectionPolicies() {
        return this._windowsInformationProtectionPolicies;
    };
    /**
     * Sets the windowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are not MDM enrolled.
     * @param value Value to set for the windowsInformationProtectionPolicies property.
     */
    public set windowsInformationProtectionPolicies(value: WindowsInformationProtectionPolicy[] | undefined) {
        this._windowsInformationProtectionPolicies = value;
    };
}
