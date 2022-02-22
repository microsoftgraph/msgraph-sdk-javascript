import {ApplePushNotificationCertificate, ComplianceManagementPartner, DetectedApp, DeviceAndAppManagementRoleAssignment, DeviceCategory, DeviceCompliancePolicy, DeviceCompliancePolicyDeviceStateSummary, DeviceCompliancePolicySettingStateSummary, DeviceConfiguration, DeviceConfigurationDeviceStateSummary, DeviceEnrollmentConfiguration, DeviceManagementExchangeConnector, DeviceManagementPartner, DeviceManagementReports, DeviceManagementSettings, DeviceManagementSubscriptionState, DeviceManagementTroubleshootingEvent, Entity, ImportedWindowsAutopilotDeviceIdentity, IntuneBrand, IosUpdateDeviceStatus, ManagedDevice, ManagedDeviceOverview, MobileThreatDefenseConnector, NotificationMessageTemplate, OnPremisesConditionalAccessSettings, RemoteAssistancePartner, ResourceOperation, RoleDefinition, SoftwareUpdateStatusSummary, TelecomExpenseManagementPartner, TermsAndConditions, WindowsAutopilotDeviceIdentity, WindowsInformationProtectionAppLearningSummary, WindowsInformationProtectionNetworkLearningSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagement extends Entity implements Parsable {
    /** Apple push notification certificate.  */
    private _applePushNotificationCertificate?: ApplePushNotificationCertificate | undefined;
    /** The list of Compliance Management Partners configured by the tenant.  */
    private _complianceManagementPartners?: ComplianceManagementPartner[] | undefined;
    /** The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access  */
    private _conditionalAccessSettings?: OnPremisesConditionalAccessSettings | undefined;
    /** The list of detected apps associated with a device.  */
    private _detectedApps?: DetectedApp[] | undefined;
    /** The list of device categories with the tenant.  */
    private _deviceCategories?: DeviceCategory[] | undefined;
    /** The device compliance policies.  */
    private _deviceCompliancePolicies?: DeviceCompliancePolicy[] | undefined;
    /** The device compliance state summary for this account.  */
    private _deviceCompliancePolicyDeviceStateSummary?: DeviceCompliancePolicyDeviceStateSummary | undefined;
    /** The summary states of compliance policy settings for this account.  */
    private _deviceCompliancePolicySettingStateSummaries?: DeviceCompliancePolicySettingStateSummary[] | undefined;
    /** The device configuration device state summary for this account.  */
    private _deviceConfigurationDeviceStateSummaries?: DeviceConfigurationDeviceStateSummary | undefined;
    /** The device configurations.  */
    private _deviceConfigurations?: DeviceConfiguration[] | undefined;
    /** The list of device enrollment configurations  */
    private _deviceEnrollmentConfigurations?: DeviceEnrollmentConfiguration[] | undefined;
    /** The list of Device Management Partners configured by the tenant.  */
    private _deviceManagementPartners?: DeviceManagementPartner[] | undefined;
    /** The list of Exchange Connectors configured by the tenant.  */
    private _exchangeConnectors?: DeviceManagementExchangeConnector[] | undefined;
    /** Collection of imported Windows autopilot devices.  */
    private _importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /** Intune Account Id for given tenant  */
    private _intuneAccountId?: string | undefined;
    /** intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.  */
    private _intuneBrand?: IntuneBrand | undefined;
    /** The IOS software update installation statuses for this account.  */
    private _iosUpdateStatuses?: IosUpdateDeviceStatus[] | undefined;
    /** Device overview  */
    private _managedDeviceOverview?: ManagedDeviceOverview | undefined;
    /** The list of managed devices.  */
    private _managedDevices?: ManagedDevice[] | undefined;
    /** The list of Mobile threat Defense connectors configured by the tenant.  */
    private _mobileThreatDefenseConnectors?: MobileThreatDefenseConnector[] | undefined;
    /** The Notification Message Templates.  */
    private _notificationMessageTemplates?: NotificationMessageTemplate[] | undefined;
    /** The remote assist partners.  */
    private _remoteAssistancePartners?: RemoteAssistancePartner[] | undefined;
    /** Reports singleton  */
    private _reports?: DeviceManagementReports | undefined;
    /** The Resource Operations.  */
    private _resourceOperations?: ResourceOperation[] | undefined;
    /** The Role Assignments.  */
    private _roleAssignments?: DeviceAndAppManagementRoleAssignment[] | undefined;
    /** The Role Definitions.  */
    private _roleDefinitions?: RoleDefinition[] | undefined;
    /** Account level settings.  */
    private _settings?: DeviceManagementSettings | undefined;
    /** The software update status summary.  */
    private _softwareUpdateStatusSummary?: SoftwareUpdateStatusSummary | undefined;
    /** Tenant mobile device management subscription state. Possible values are: pending, active, warning, disabled, deleted, blocked, lockedOut.  */
    private _subscriptionState?: DeviceManagementSubscriptionState | undefined;
    /** The telecom expense management partners.  */
    private _telecomExpenseManagementPartners?: TelecomExpenseManagementPartner[] | undefined;
    /** The terms and conditions associated with device management of the company.  */
    private _termsAndConditions?: TermsAndConditions[] | undefined;
    /** The list of troubleshooting events for the tenant.  */
    private _troubleshootingEvents?: DeviceManagementTroubleshootingEvent[] | undefined;
    /** The Windows autopilot device identities contained collection.  */
    private _windowsAutopilotDeviceIdentities?: WindowsAutopilotDeviceIdentity[] | undefined;
    /** The windows information protection app learning summaries.  */
    private _windowsInformationProtectionAppLearningSummaries?: WindowsInformationProtectionAppLearningSummary[] | undefined;
    /** The windows information protection network learning summaries.  */
    private _windowsInformationProtectionNetworkLearningSummaries?: WindowsInformationProtectionNetworkLearningSummary[] | undefined;
    /**
     * Instantiates a new deviceManagement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the applePushNotificationCertificate property value. Apple push notification certificate.
     * @returns a applePushNotificationCertificate
     */
    public get applePushNotificationCertificate() {
        return this._applePushNotificationCertificate;
    };
    /**
     * Gets the complianceManagementPartners property value. The list of Compliance Management Partners configured by the tenant.
     * @returns a complianceManagementPartner
     */
    public get complianceManagementPartners() {
        return this._complianceManagementPartners;
    };
    /**
     * Gets the conditionalAccessSettings property value. The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
     * @returns a onPremisesConditionalAccessSettings
     */
    public get conditionalAccessSettings() {
        return this._conditionalAccessSettings;
    };
    /**
     * Gets the detectedApps property value. The list of detected apps associated with a device.
     * @returns a detectedApp
     */
    public get detectedApps() {
        return this._detectedApps;
    };
    /**
     * Gets the deviceCategories property value. The list of device categories with the tenant.
     * @returns a deviceCategory
     */
    public get deviceCategories() {
        return this._deviceCategories;
    };
    /**
     * Gets the deviceCompliancePolicies property value. The device compliance policies.
     * @returns a deviceCompliancePolicy
     */
    public get deviceCompliancePolicies() {
        return this._deviceCompliancePolicies;
    };
    /**
     * Gets the deviceCompliancePolicyDeviceStateSummary property value. The device compliance state summary for this account.
     * @returns a deviceCompliancePolicyDeviceStateSummary
     */
    public get deviceCompliancePolicyDeviceStateSummary() {
        return this._deviceCompliancePolicyDeviceStateSummary;
    };
    /**
     * Gets the deviceCompliancePolicySettingStateSummaries property value. The summary states of compliance policy settings for this account.
     * @returns a deviceCompliancePolicySettingStateSummary
     */
    public get deviceCompliancePolicySettingStateSummaries() {
        return this._deviceCompliancePolicySettingStateSummaries;
    };
    /**
     * Gets the deviceConfigurationDeviceStateSummaries property value. The device configuration device state summary for this account.
     * @returns a deviceConfigurationDeviceStateSummary
     */
    public get deviceConfigurationDeviceStateSummaries() {
        return this._deviceConfigurationDeviceStateSummaries;
    };
    /**
     * Gets the deviceConfigurations property value. The device configurations.
     * @returns a deviceConfiguration
     */
    public get deviceConfigurations() {
        return this._deviceConfigurations;
    };
    /**
     * Gets the deviceEnrollmentConfigurations property value. The list of device enrollment configurations
     * @returns a deviceEnrollmentConfiguration
     */
    public get deviceEnrollmentConfigurations() {
        return this._deviceEnrollmentConfigurations;
    };
    /**
     * Gets the deviceManagementPartners property value. The list of Device Management Partners configured by the tenant.
     * @returns a deviceManagementPartner
     */
    public get deviceManagementPartners() {
        return this._deviceManagementPartners;
    };
    /**
     * Gets the exchangeConnectors property value. The list of Exchange Connectors configured by the tenant.
     * @returns a deviceManagementExchangeConnector
     */
    public get exchangeConnectors() {
        return this._exchangeConnectors;
    };
    /**
     * Gets the importedWindowsAutopilotDeviceIdentities property value. Collection of imported Windows autopilot devices.
     * @returns a importedWindowsAutopilotDeviceIdentity
     */
    public get importedWindowsAutopilotDeviceIdentities() {
        return this._importedWindowsAutopilotDeviceIdentities;
    };
    /**
     * Gets the intuneAccountId property value. Intune Account Id for given tenant
     * @returns a string
     */
    public get intuneAccountId() {
        return this._intuneAccountId;
    };
    /**
     * Gets the intuneBrand property value. intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.
     * @returns a intuneBrand
     */
    public get intuneBrand() {
        return this._intuneBrand;
    };
    /**
     * Gets the iosUpdateStatuses property value. The IOS software update installation statuses for this account.
     * @returns a iosUpdateDeviceStatus
     */
    public get iosUpdateStatuses() {
        return this._iosUpdateStatuses;
    };
    /**
     * Gets the managedDeviceOverview property value. Device overview
     * @returns a managedDeviceOverview
     */
    public get managedDeviceOverview() {
        return this._managedDeviceOverview;
    };
    /**
     * Gets the managedDevices property value. The list of managed devices.
     * @returns a managedDevice
     */
    public get managedDevices() {
        return this._managedDevices;
    };
    /**
     * Gets the mobileThreatDefenseConnectors property value. The list of Mobile threat Defense connectors configured by the tenant.
     * @returns a mobileThreatDefenseConnector
     */
    public get mobileThreatDefenseConnectors() {
        return this._mobileThreatDefenseConnectors;
    };
    /**
     * Gets the notificationMessageTemplates property value. The Notification Message Templates.
     * @returns a notificationMessageTemplate
     */
    public get notificationMessageTemplates() {
        return this._notificationMessageTemplates;
    };
    /**
     * Gets the remoteAssistancePartners property value. The remote assist partners.
     * @returns a remoteAssistancePartner
     */
    public get remoteAssistancePartners() {
        return this._remoteAssistancePartners;
    };
    /**
     * Gets the reports property value. Reports singleton
     * @returns a deviceManagementReports
     */
    public get reports() {
        return this._reports;
    };
    /**
     * Gets the resourceOperations property value. The Resource Operations.
     * @returns a resourceOperation
     */
    public get resourceOperations() {
        return this._resourceOperations;
    };
    /**
     * Gets the roleAssignments property value. The Role Assignments.
     * @returns a deviceAndAppManagementRoleAssignment
     */
    public get roleAssignments() {
        return this._roleAssignments;
    };
    /**
     * Gets the roleDefinitions property value. The Role Definitions.
     * @returns a roleDefinition
     */
    public get roleDefinitions() {
        return this._roleDefinitions;
    };
    /**
     * Gets the settings property value. Account level settings.
     * @returns a deviceManagementSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Gets the softwareUpdateStatusSummary property value. The software update status summary.
     * @returns a softwareUpdateStatusSummary
     */
    public get softwareUpdateStatusSummary() {
        return this._softwareUpdateStatusSummary;
    };
    /**
     * Gets the subscriptionState property value. Tenant mobile device management subscription state. Possible values are: pending, active, warning, disabled, deleted, blocked, lockedOut.
     * @returns a deviceManagementSubscriptionState
     */
    public get subscriptionState() {
        return this._subscriptionState;
    };
    /**
     * Gets the telecomExpenseManagementPartners property value. The telecom expense management partners.
     * @returns a telecomExpenseManagementPartner
     */
    public get telecomExpenseManagementPartners() {
        return this._telecomExpenseManagementPartners;
    };
    /**
     * Gets the termsAndConditions property value. The terms and conditions associated with device management of the company.
     * @returns a termsAndConditions
     */
    public get termsAndConditions() {
        return this._termsAndConditions;
    };
    /**
     * Gets the troubleshootingEvents property value. The list of troubleshooting events for the tenant.
     * @returns a deviceManagementTroubleshootingEvent
     */
    public get troubleshootingEvents() {
        return this._troubleshootingEvents;
    };
    /**
     * Gets the windowsAutopilotDeviceIdentities property value. The Windows autopilot device identities contained collection.
     * @returns a windowsAutopilotDeviceIdentity
     */
    public get windowsAutopilotDeviceIdentities() {
        return this._windowsAutopilotDeviceIdentities;
    };
    /**
     * Gets the windowsInformationProtectionAppLearningSummaries property value. The windows information protection app learning summaries.
     * @returns a windowsInformationProtectionAppLearningSummary
     */
    public get windowsInformationProtectionAppLearningSummaries() {
        return this._windowsInformationProtectionAppLearningSummaries;
    };
    /**
     * Gets the windowsInformationProtectionNetworkLearningSummaries property value. The windows information protection network learning summaries.
     * @returns a windowsInformationProtectionNetworkLearningSummary
     */
    public get windowsInformationProtectionNetworkLearningSummaries() {
        return this._windowsInformationProtectionNetworkLearningSummaries;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["applePushNotificationCertificate", (o, n) => { (o as unknown as DeviceManagement).applePushNotificationCertificate = n.getObjectValue<ApplePushNotificationCertificate>(ApplePushNotificationCertificate); }],
            ["complianceManagementPartners", (o, n) => { (o as unknown as DeviceManagement).complianceManagementPartners = n.getCollectionOfObjectValues<ComplianceManagementPartner>(ComplianceManagementPartner); }],
            ["conditionalAccessSettings", (o, n) => { (o as unknown as DeviceManagement).conditionalAccessSettings = n.getObjectValue<OnPremisesConditionalAccessSettings>(OnPremisesConditionalAccessSettings); }],
            ["detectedApps", (o, n) => { (o as unknown as DeviceManagement).detectedApps = n.getCollectionOfObjectValues<DetectedApp>(DetectedApp); }],
            ["deviceCategories", (o, n) => { (o as unknown as DeviceManagement).deviceCategories = n.getCollectionOfObjectValues<DeviceCategory>(DeviceCategory); }],
            ["deviceCompliancePolicies", (o, n) => { (o as unknown as DeviceManagement).deviceCompliancePolicies = n.getCollectionOfObjectValues<DeviceCompliancePolicy>(DeviceCompliancePolicy); }],
            ["deviceCompliancePolicyDeviceStateSummary", (o, n) => { (o as unknown as DeviceManagement).deviceCompliancePolicyDeviceStateSummary = n.getObjectValue<DeviceCompliancePolicyDeviceStateSummary>(DeviceCompliancePolicyDeviceStateSummary); }],
            ["deviceCompliancePolicySettingStateSummaries", (o, n) => { (o as unknown as DeviceManagement).deviceCompliancePolicySettingStateSummaries = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>(DeviceCompliancePolicySettingStateSummary); }],
            ["deviceConfigurationDeviceStateSummaries", (o, n) => { (o as unknown as DeviceManagement).deviceConfigurationDeviceStateSummaries = n.getObjectValue<DeviceConfigurationDeviceStateSummary>(DeviceConfigurationDeviceStateSummary); }],
            ["deviceConfigurations", (o, n) => { (o as unknown as DeviceManagement).deviceConfigurations = n.getCollectionOfObjectValues<DeviceConfiguration>(DeviceConfiguration); }],
            ["deviceEnrollmentConfigurations", (o, n) => { (o as unknown as DeviceManagement).deviceEnrollmentConfigurations = n.getCollectionOfObjectValues<DeviceEnrollmentConfiguration>(DeviceEnrollmentConfiguration); }],
            ["deviceManagementPartners", (o, n) => { (o as unknown as DeviceManagement).deviceManagementPartners = n.getCollectionOfObjectValues<DeviceManagementPartner>(DeviceManagementPartner); }],
            ["exchangeConnectors", (o, n) => { (o as unknown as DeviceManagement).exchangeConnectors = n.getCollectionOfObjectValues<DeviceManagementExchangeConnector>(DeviceManagementExchangeConnector); }],
            ["importedWindowsAutopilotDeviceIdentities", (o, n) => { (o as unknown as DeviceManagement).importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(ImportedWindowsAutopilotDeviceIdentity); }],
            ["intuneAccountId", (o, n) => { (o as unknown as DeviceManagement).intuneAccountId = n.getStringValue(); }],
            ["intuneBrand", (o, n) => { (o as unknown as DeviceManagement).intuneBrand = n.getObjectValue<IntuneBrand>(IntuneBrand); }],
            ["iosUpdateStatuses", (o, n) => { (o as unknown as DeviceManagement).iosUpdateStatuses = n.getCollectionOfObjectValues<IosUpdateDeviceStatus>(IosUpdateDeviceStatus); }],
            ["managedDeviceOverview", (o, n) => { (o as unknown as DeviceManagement).managedDeviceOverview = n.getObjectValue<ManagedDeviceOverview>(ManagedDeviceOverview); }],
            ["managedDevices", (o, n) => { (o as unknown as DeviceManagement).managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(ManagedDevice); }],
            ["mobileThreatDefenseConnectors", (o, n) => { (o as unknown as DeviceManagement).mobileThreatDefenseConnectors = n.getCollectionOfObjectValues<MobileThreatDefenseConnector>(MobileThreatDefenseConnector); }],
            ["notificationMessageTemplates", (o, n) => { (o as unknown as DeviceManagement).notificationMessageTemplates = n.getCollectionOfObjectValues<NotificationMessageTemplate>(NotificationMessageTemplate); }],
            ["remoteAssistancePartners", (o, n) => { (o as unknown as DeviceManagement).remoteAssistancePartners = n.getCollectionOfObjectValues<RemoteAssistancePartner>(RemoteAssistancePartner); }],
            ["reports", (o, n) => { (o as unknown as DeviceManagement).reports = n.getObjectValue<DeviceManagementReports>(DeviceManagementReports); }],
            ["resourceOperations", (o, n) => { (o as unknown as DeviceManagement).resourceOperations = n.getCollectionOfObjectValues<ResourceOperation>(ResourceOperation); }],
            ["roleAssignments", (o, n) => { (o as unknown as DeviceManagement).roleAssignments = n.getCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>(DeviceAndAppManagementRoleAssignment); }],
            ["roleDefinitions", (o, n) => { (o as unknown as DeviceManagement).roleDefinitions = n.getCollectionOfObjectValues<RoleDefinition>(RoleDefinition); }],
            ["settings", (o, n) => { (o as unknown as DeviceManagement).settings = n.getObjectValue<DeviceManagementSettings>(DeviceManagementSettings); }],
            ["softwareUpdateStatusSummary", (o, n) => { (o as unknown as DeviceManagement).softwareUpdateStatusSummary = n.getObjectValue<SoftwareUpdateStatusSummary>(SoftwareUpdateStatusSummary); }],
            ["subscriptionState", (o, n) => { (o as unknown as DeviceManagement).subscriptionState = n.getEnumValue<DeviceManagementSubscriptionState>(DeviceManagementSubscriptionState); }],
            ["telecomExpenseManagementPartners", (o, n) => { (o as unknown as DeviceManagement).telecomExpenseManagementPartners = n.getCollectionOfObjectValues<TelecomExpenseManagementPartner>(TelecomExpenseManagementPartner); }],
            ["termsAndConditions", (o, n) => { (o as unknown as DeviceManagement).termsAndConditions = n.getCollectionOfObjectValues<TermsAndConditions>(TermsAndConditions); }],
            ["troubleshootingEvents", (o, n) => { (o as unknown as DeviceManagement).troubleshootingEvents = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>(DeviceManagementTroubleshootingEvent); }],
            ["windowsAutopilotDeviceIdentities", (o, n) => { (o as unknown as DeviceManagement).windowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>(WindowsAutopilotDeviceIdentity); }],
            ["windowsInformationProtectionAppLearningSummaries", (o, n) => { (o as unknown as DeviceManagement).windowsInformationProtectionAppLearningSummaries = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>(WindowsInformationProtectionAppLearningSummary); }],
            ["windowsInformationProtectionNetworkLearningSummaries", (o, n) => { (o as unknown as DeviceManagement).windowsInformationProtectionNetworkLearningSummaries = n.getCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummary>(WindowsInformationProtectionNetworkLearningSummary); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ApplePushNotificationCertificate>("applePushNotificationCertificate", this.applePushNotificationCertificate);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartner>("complianceManagementPartners", this.complianceManagementPartners);
        writer.writeObjectValue<OnPremisesConditionalAccessSettings>("conditionalAccessSettings", this.conditionalAccessSettings);
        writer.writeCollectionOfObjectValues<DetectedApp>("detectedApps", this.detectedApps);
        writer.writeCollectionOfObjectValues<DeviceCategory>("deviceCategories", this.deviceCategories);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicy>("deviceCompliancePolicies", this.deviceCompliancePolicies);
        writer.writeObjectValue<DeviceCompliancePolicyDeviceStateSummary>("deviceCompliancePolicyDeviceStateSummary", this.deviceCompliancePolicyDeviceStateSummary);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>("deviceCompliancePolicySettingStateSummaries", this.deviceCompliancePolicySettingStateSummaries);
        writer.writeObjectValue<DeviceConfigurationDeviceStateSummary>("deviceConfigurationDeviceStateSummaries", this.deviceConfigurationDeviceStateSummaries);
        writer.writeCollectionOfObjectValues<DeviceConfiguration>("deviceConfigurations", this.deviceConfigurations);
        writer.writeCollectionOfObjectValues<DeviceEnrollmentConfiguration>("deviceEnrollmentConfigurations", this.deviceEnrollmentConfigurations);
        writer.writeCollectionOfObjectValues<DeviceManagementPartner>("deviceManagementPartners", this.deviceManagementPartners);
        writer.writeCollectionOfObjectValues<DeviceManagementExchangeConnector>("exchangeConnectors", this.exchangeConnectors);
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", this.importedWindowsAutopilotDeviceIdentities);
        writer.writeStringValue("intuneAccountId", this.intuneAccountId);
        writer.writeObjectValue<IntuneBrand>("intuneBrand", this.intuneBrand);
        writer.writeCollectionOfObjectValues<IosUpdateDeviceStatus>("iosUpdateStatuses", this.iosUpdateStatuses);
        writer.writeObjectValue<ManagedDeviceOverview>("managedDeviceOverview", this.managedDeviceOverview);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", this.managedDevices);
        writer.writeCollectionOfObjectValues<MobileThreatDefenseConnector>("mobileThreatDefenseConnectors", this.mobileThreatDefenseConnectors);
        writer.writeCollectionOfObjectValues<NotificationMessageTemplate>("notificationMessageTemplates", this.notificationMessageTemplates);
        writer.writeCollectionOfObjectValues<RemoteAssistancePartner>("remoteAssistancePartners", this.remoteAssistancePartners);
        writer.writeObjectValue<DeviceManagementReports>("reports", this.reports);
        writer.writeCollectionOfObjectValues<ResourceOperation>("resourceOperations", this.resourceOperations);
        writer.writeCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>("roleAssignments", this.roleAssignments);
        writer.writeCollectionOfObjectValues<RoleDefinition>("roleDefinitions", this.roleDefinitions);
        writer.writeObjectValue<DeviceManagementSettings>("settings", this.settings);
        writer.writeObjectValue<SoftwareUpdateStatusSummary>("softwareUpdateStatusSummary", this.softwareUpdateStatusSummary);
        writer.writeEnumValue<DeviceManagementSubscriptionState>("subscriptionState", this.subscriptionState);
        writer.writeCollectionOfObjectValues<TelecomExpenseManagementPartner>("telecomExpenseManagementPartners", this.telecomExpenseManagementPartners);
        writer.writeCollectionOfObjectValues<TermsAndConditions>("termsAndConditions", this.termsAndConditions);
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("troubleshootingEvents", this.troubleshootingEvents);
        writer.writeCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>("windowsAutopilotDeviceIdentities", this.windowsAutopilotDeviceIdentities);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>("windowsInformationProtectionAppLearningSummaries", this.windowsInformationProtectionAppLearningSummaries);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummary>("windowsInformationProtectionNetworkLearningSummaries", this.windowsInformationProtectionNetworkLearningSummaries);
    };
    /**
     * Sets the applePushNotificationCertificate property value. Apple push notification certificate.
     * @param value Value to set for the applePushNotificationCertificate property.
     */
    public set applePushNotificationCertificate(value: ApplePushNotificationCertificate | undefined) {
        this._applePushNotificationCertificate = value;
    };
    /**
     * Sets the complianceManagementPartners property value. The list of Compliance Management Partners configured by the tenant.
     * @param value Value to set for the complianceManagementPartners property.
     */
    public set complianceManagementPartners(value: ComplianceManagementPartner[] | undefined) {
        this._complianceManagementPartners = value;
    };
    /**
     * Sets the conditionalAccessSettings property value. The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
     * @param value Value to set for the conditionalAccessSettings property.
     */
    public set conditionalAccessSettings(value: OnPremisesConditionalAccessSettings | undefined) {
        this._conditionalAccessSettings = value;
    };
    /**
     * Sets the detectedApps property value. The list of detected apps associated with a device.
     * @param value Value to set for the detectedApps property.
     */
    public set detectedApps(value: DetectedApp[] | undefined) {
        this._detectedApps = value;
    };
    /**
     * Sets the deviceCategories property value. The list of device categories with the tenant.
     * @param value Value to set for the deviceCategories property.
     */
    public set deviceCategories(value: DeviceCategory[] | undefined) {
        this._deviceCategories = value;
    };
    /**
     * Sets the deviceCompliancePolicies property value. The device compliance policies.
     * @param value Value to set for the deviceCompliancePolicies property.
     */
    public set deviceCompliancePolicies(value: DeviceCompliancePolicy[] | undefined) {
        this._deviceCompliancePolicies = value;
    };
    /**
     * Sets the deviceCompliancePolicyDeviceStateSummary property value. The device compliance state summary for this account.
     * @param value Value to set for the deviceCompliancePolicyDeviceStateSummary property.
     */
    public set deviceCompliancePolicyDeviceStateSummary(value: DeviceCompliancePolicyDeviceStateSummary | undefined) {
        this._deviceCompliancePolicyDeviceStateSummary = value;
    };
    /**
     * Sets the deviceCompliancePolicySettingStateSummaries property value. The summary states of compliance policy settings for this account.
     * @param value Value to set for the deviceCompliancePolicySettingStateSummaries property.
     */
    public set deviceCompliancePolicySettingStateSummaries(value: DeviceCompliancePolicySettingStateSummary[] | undefined) {
        this._deviceCompliancePolicySettingStateSummaries = value;
    };
    /**
     * Sets the deviceConfigurationDeviceStateSummaries property value. The device configuration device state summary for this account.
     * @param value Value to set for the deviceConfigurationDeviceStateSummaries property.
     */
    public set deviceConfigurationDeviceStateSummaries(value: DeviceConfigurationDeviceStateSummary | undefined) {
        this._deviceConfigurationDeviceStateSummaries = value;
    };
    /**
     * Sets the deviceConfigurations property value. The device configurations.
     * @param value Value to set for the deviceConfigurations property.
     */
    public set deviceConfigurations(value: DeviceConfiguration[] | undefined) {
        this._deviceConfigurations = value;
    };
    /**
     * Sets the deviceEnrollmentConfigurations property value. The list of device enrollment configurations
     * @param value Value to set for the deviceEnrollmentConfigurations property.
     */
    public set deviceEnrollmentConfigurations(value: DeviceEnrollmentConfiguration[] | undefined) {
        this._deviceEnrollmentConfigurations = value;
    };
    /**
     * Sets the deviceManagementPartners property value. The list of Device Management Partners configured by the tenant.
     * @param value Value to set for the deviceManagementPartners property.
     */
    public set deviceManagementPartners(value: DeviceManagementPartner[] | undefined) {
        this._deviceManagementPartners = value;
    };
    /**
     * Sets the exchangeConnectors property value. The list of Exchange Connectors configured by the tenant.
     * @param value Value to set for the exchangeConnectors property.
     */
    public set exchangeConnectors(value: DeviceManagementExchangeConnector[] | undefined) {
        this._exchangeConnectors = value;
    };
    /**
     * Sets the importedWindowsAutopilotDeviceIdentities property value. Collection of imported Windows autopilot devices.
     * @param value Value to set for the importedWindowsAutopilotDeviceIdentities property.
     */
    public set importedWindowsAutopilotDeviceIdentities(value: ImportedWindowsAutopilotDeviceIdentity[] | undefined) {
        this._importedWindowsAutopilotDeviceIdentities = value;
    };
    /**
     * Sets the intuneAccountId property value. Intune Account Id for given tenant
     * @param value Value to set for the intuneAccountId property.
     */
    public set intuneAccountId(value: string | undefined) {
        this._intuneAccountId = value;
    };
    /**
     * Sets the intuneBrand property value. intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.
     * @param value Value to set for the intuneBrand property.
     */
    public set intuneBrand(value: IntuneBrand | undefined) {
        this._intuneBrand = value;
    };
    /**
     * Sets the iosUpdateStatuses property value. The IOS software update installation statuses for this account.
     * @param value Value to set for the iosUpdateStatuses property.
     */
    public set iosUpdateStatuses(value: IosUpdateDeviceStatus[] | undefined) {
        this._iosUpdateStatuses = value;
    };
    /**
     * Sets the managedDeviceOverview property value. Device overview
     * @param value Value to set for the managedDeviceOverview property.
     */
    public set managedDeviceOverview(value: ManagedDeviceOverview | undefined) {
        this._managedDeviceOverview = value;
    };
    /**
     * Sets the managedDevices property value. The list of managed devices.
     * @param value Value to set for the managedDevices property.
     */
    public set managedDevices(value: ManagedDevice[] | undefined) {
        this._managedDevices = value;
    };
    /**
     * Sets the mobileThreatDefenseConnectors property value. The list of Mobile threat Defense connectors configured by the tenant.
     * @param value Value to set for the mobileThreatDefenseConnectors property.
     */
    public set mobileThreatDefenseConnectors(value: MobileThreatDefenseConnector[] | undefined) {
        this._mobileThreatDefenseConnectors = value;
    };
    /**
     * Sets the notificationMessageTemplates property value. The Notification Message Templates.
     * @param value Value to set for the notificationMessageTemplates property.
     */
    public set notificationMessageTemplates(value: NotificationMessageTemplate[] | undefined) {
        this._notificationMessageTemplates = value;
    };
    /**
     * Sets the remoteAssistancePartners property value. The remote assist partners.
     * @param value Value to set for the remoteAssistancePartners property.
     */
    public set remoteAssistancePartners(value: RemoteAssistancePartner[] | undefined) {
        this._remoteAssistancePartners = value;
    };
    /**
     * Sets the reports property value. Reports singleton
     * @param value Value to set for the reports property.
     */
    public set reports(value: DeviceManagementReports | undefined) {
        this._reports = value;
    };
    /**
     * Sets the resourceOperations property value. The Resource Operations.
     * @param value Value to set for the resourceOperations property.
     */
    public set resourceOperations(value: ResourceOperation[] | undefined) {
        this._resourceOperations = value;
    };
    /**
     * Sets the roleAssignments property value. The Role Assignments.
     * @param value Value to set for the roleAssignments property.
     */
    public set roleAssignments(value: DeviceAndAppManagementRoleAssignment[] | undefined) {
        this._roleAssignments = value;
    };
    /**
     * Sets the roleDefinitions property value. The Role Definitions.
     * @param value Value to set for the roleDefinitions property.
     */
    public set roleDefinitions(value: RoleDefinition[] | undefined) {
        this._roleDefinitions = value;
    };
    /**
     * Sets the settings property value. Account level settings.
     * @param value Value to set for the settings property.
     */
    public set settings(value: DeviceManagementSettings | undefined) {
        this._settings = value;
    };
    /**
     * Sets the softwareUpdateStatusSummary property value. The software update status summary.
     * @param value Value to set for the softwareUpdateStatusSummary property.
     */
    public set softwareUpdateStatusSummary(value: SoftwareUpdateStatusSummary | undefined) {
        this._softwareUpdateStatusSummary = value;
    };
    /**
     * Sets the subscriptionState property value. Tenant mobile device management subscription state. Possible values are: pending, active, warning, disabled, deleted, blocked, lockedOut.
     * @param value Value to set for the subscriptionState property.
     */
    public set subscriptionState(value: DeviceManagementSubscriptionState | undefined) {
        this._subscriptionState = value;
    };
    /**
     * Sets the telecomExpenseManagementPartners property value. The telecom expense management partners.
     * @param value Value to set for the telecomExpenseManagementPartners property.
     */
    public set telecomExpenseManagementPartners(value: TelecomExpenseManagementPartner[] | undefined) {
        this._telecomExpenseManagementPartners = value;
    };
    /**
     * Sets the termsAndConditions property value. The terms and conditions associated with device management of the company.
     * @param value Value to set for the termsAndConditions property.
     */
    public set termsAndConditions(value: TermsAndConditions[] | undefined) {
        this._termsAndConditions = value;
    };
    /**
     * Sets the troubleshootingEvents property value. The list of troubleshooting events for the tenant.
     * @param value Value to set for the troubleshootingEvents property.
     */
    public set troubleshootingEvents(value: DeviceManagementTroubleshootingEvent[] | undefined) {
        this._troubleshootingEvents = value;
    };
    /**
     * Sets the windowsAutopilotDeviceIdentities property value. The Windows autopilot device identities contained collection.
     * @param value Value to set for the windowsAutopilotDeviceIdentities property.
     */
    public set windowsAutopilotDeviceIdentities(value: WindowsAutopilotDeviceIdentity[] | undefined) {
        this._windowsAutopilotDeviceIdentities = value;
    };
    /**
     * Sets the windowsInformationProtectionAppLearningSummaries property value. The windows information protection app learning summaries.
     * @param value Value to set for the windowsInformationProtectionAppLearningSummaries property.
     */
    public set windowsInformationProtectionAppLearningSummaries(value: WindowsInformationProtectionAppLearningSummary[] | undefined) {
        this._windowsInformationProtectionAppLearningSummaries = value;
    };
    /**
     * Sets the windowsInformationProtectionNetworkLearningSummaries property value. The windows information protection network learning summaries.
     * @param value Value to set for the windowsInformationProtectionNetworkLearningSummaries property.
     */
    public set windowsInformationProtectionNetworkLearningSummaries(value: WindowsInformationProtectionNetworkLearningSummary[] | undefined) {
        this._windowsInformationProtectionNetworkLearningSummaries = value;
    };
}
