import {ComplianceState, ConfigurationManagerClientEnabledFeatures, DeviceActionResult, DeviceCategory, DeviceCompliancePolicyState, DeviceConfigurationState, DeviceEnrollmentType, DeviceHealthAttestationState, DeviceManagementExchangeAccessState, DeviceManagementExchangeAccessStateReason, DeviceRegistrationState, Entity, ManagedDeviceOwnerType, ManagedDevicePartnerReportedHealthState, ManagementAgentType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDevice extends Entity implements Parsable {
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only.  */
    private _activationLockBypassCode?: string | undefined;
    /** Android security patch level. This property is read-only.  */
    private _androidSecurityPatchLevel?: string | undefined;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only.  */
    private _azureADDeviceId?: string | undefined;
    /** Whether the device is Azure Active Directory registered. This property is read-only.  */
    private _azureADRegistered?: boolean | undefined;
    /** The DateTime when device compliance grace period expires. This property is read-only.  */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager.  */
    private _complianceState?: ComplianceState | undefined;
    /** ConfigrMgr client enabled features. This property is read-only.  */
    private _configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures | undefined;
    /** List of ComplexType deviceActionResult objects. This property is read-only.  */
    private _deviceActionResults?: DeviceActionResult[] | undefined;
    /** Device category  */
    private _deviceCategory?: DeviceCategory | undefined;
    /** Device category display name. This property is read-only.  */
    private _deviceCategoryDisplayName?: string | undefined;
    /** Device compliance policy states for this device.  */
    private _deviceCompliancePolicyStates?: DeviceCompliancePolicyState[] | undefined;
    /** Device configuration states for this device.  */
    private _deviceConfigurationStates?: DeviceConfigurationState[] | undefined;
    /** Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount.  */
    private _deviceEnrollmentType?: DeviceEnrollmentType | undefined;
    /** The device health attestation state. This property is read-only.  */
    private _deviceHealthAttestationState?: DeviceHealthAttestationState | undefined;
    /** Name of the device. This property is read-only.  */
    private _deviceName?: string | undefined;
    /** Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown.  */
    private _deviceRegistrationState?: DeviceRegistrationState | undefined;
    /** Whether the device is Exchange ActiveSync activated. This property is read-only.  */
    private _easActivated?: boolean | undefined;
    /** Exchange ActivationSync activation time of the device. This property is read-only.  */
    private _easActivationDateTime?: Date | undefined;
    /** Exchange ActiveSync Id of the device. This property is read-only.  */
    private _easDeviceId?: string | undefined;
    /** Email(s) for the user associated with the device. This property is read-only.  */
    private _emailAddress?: string | undefined;
    /** Enrollment time of the device. This property is read-only.  */
    private _enrolledDateTime?: Date | undefined;
    /** Ethernet MAC. This property is read-only.  */
    private _ethernetMacAddress?: string | undefined;
    /** The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined.  */
    private _exchangeAccessState?: DeviceManagementExchangeAccessState | undefined;
    /** The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp.  */
    private _exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason | undefined;
    /** Last time the device contacted Exchange. This property is read-only.  */
    private _exchangeLastSuccessfulSyncDateTime?: Date | undefined;
    /** Free Storage in Bytes. This property is read-only.  */
    private _freeStorageSpaceInBytes?: number | undefined;
    /** Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only.  */
    private _iccid?: string | undefined;
    /** IMEI. This property is read-only.  */
    private _imei?: string | undefined;
    /** Device encryption status. This property is read-only.  */
    private _isEncrypted?: boolean | undefined;
    /** Device supervised status. This property is read-only.  */
    private _isSupervised?: boolean | undefined;
    /** whether the device is jail broken or rooted. This property is read-only.  */
    private _jailBroken?: string | undefined;
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only.  */
    private _lastSyncDateTime?: Date | undefined;
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name.  */
    private _managedDeviceName?: string | undefined;
    /** Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.  */
    private _managedDeviceOwnerType?: ManagedDeviceOwnerType | undefined;
    /** Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController.  */
    private _managementAgent?: ManagementAgentType | undefined;
    /** Manufacturer of the device. This property is read-only.  */
    private _manufacturer?: string | undefined;
    /** MEID. This property is read-only.  */
    private _meid?: string | undefined;
    /** Model of the device. This property is read-only.  */
    private _model?: string | undefined;
    /** Notes on the device created by IT Admin  */
    private _notes?: string | undefined;
    /** Operating system of the device. Windows, iOS, etc. This property is read-only.  */
    private _operatingSystem?: string | undefined;
    /** Operating system version of the device. This property is read-only.  */
    private _osVersion?: string | undefined;
    /** Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured.  */
    private _partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState | undefined;
    /** Phone number of the device. This property is read-only.  */
    private _phoneNumber?: string | undefined;
    /** Total Memory in Bytes. This property is read-only.  */
    private _physicalMemoryInBytes?: number | undefined;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.  */
    private _remoteAssistanceSessionErrorDetails?: string | undefined;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only.  */
    private _remoteAssistanceSessionUrl?: string | undefined;
    /** SerialNumber. This property is read-only.  */
    private _serialNumber?: string | undefined;
    /** Subscriber Carrier. This property is read-only.  */
    private _subscriberCarrier?: string | undefined;
    /** Total Storage in Bytes. This property is read-only.  */
    private _totalStorageSpaceInBytes?: number | undefined;
    /** Unique Device Identifier for iOS and macOS devices. This property is read-only.  */
    private _udid?: string | undefined;
    /** User display name. This property is read-only.  */
    private _userDisplayName?: string | undefined;
    /** Unique Identifier for the user associated with the device. This property is read-only.  */
    private _userId?: string | undefined;
    /** Device user principal name. This property is read-only.  */
    private _userPrincipalName?: string | undefined;
    /** Wi-Fi MAC. This property is read-only.  */
    private _wiFiMacAddress?: string | undefined;
    /**
     * Instantiates a new managedDevice and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
     * @returns a string
     */
    public get activationLockBypassCode() {
        return this._activationLockBypassCode;
    };
    /**
     * Gets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
     * @returns a string
     */
    public get androidSecurityPatchLevel() {
        return this._androidSecurityPatchLevel;
    };
    /**
     * Gets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @returns a string
     */
    public get azureADDeviceId() {
        return this._azureADDeviceId;
    };
    /**
     * Gets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @returns a boolean
     */
    public get azureADRegistered() {
        return this._azureADRegistered;
    };
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Gets the complianceState property value. Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager.
     * @returns a complianceState
     */
    public get complianceState() {
        return this._complianceState;
    };
    /**
     * Gets the configurationManagerClientEnabledFeatures property value. ConfigrMgr client enabled features. This property is read-only.
     * @returns a configurationManagerClientEnabledFeatures
     */
    public get configurationManagerClientEnabledFeatures() {
        return this._configurationManagerClientEnabledFeatures;
    };
    /**
     * Gets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
     * @returns a deviceActionResult
     */
    public get deviceActionResults() {
        return this._deviceActionResults;
    };
    /**
     * Gets the deviceCategory property value. Device category
     * @returns a deviceCategory
     */
    public get deviceCategory() {
        return this._deviceCategory;
    };
    /**
     * Gets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
     * @returns a string
     */
    public get deviceCategoryDisplayName() {
        return this._deviceCategoryDisplayName;
    };
    /**
     * Gets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
     * @returns a deviceCompliancePolicyState
     */
    public get deviceCompliancePolicyStates() {
        return this._deviceCompliancePolicyStates;
    };
    /**
     * Gets the deviceConfigurationStates property value. Device configuration states for this device.
     * @returns a deviceConfigurationState
     */
    public get deviceConfigurationStates() {
        return this._deviceConfigurationStates;
    };
    /**
     * Gets the deviceEnrollmentType property value. Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount.
     * @returns a deviceEnrollmentType
     */
    public get deviceEnrollmentType() {
        return this._deviceEnrollmentType;
    };
    /**
     * Gets the deviceHealthAttestationState property value. The device health attestation state. This property is read-only.
     * @returns a deviceHealthAttestationState
     */
    public get deviceHealthAttestationState() {
        return this._deviceHealthAttestationState;
    };
    /**
     * Gets the deviceName property value. Name of the device. This property is read-only.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Gets the deviceRegistrationState property value. Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown.
     * @returns a deviceRegistrationState
     */
    public get deviceRegistrationState() {
        return this._deviceRegistrationState;
    };
    /**
     * Gets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
     * @returns a boolean
     */
    public get easActivated() {
        return this._easActivated;
    };
    /**
     * Gets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
     * @returns a Date
     */
    public get easActivationDateTime() {
        return this._easActivationDateTime;
    };
    /**
     * Gets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
     * @returns a string
     */
    public get easDeviceId() {
        return this._easDeviceId;
    };
    /**
     * Gets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Gets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
     * @returns a Date
     */
    public get enrolledDateTime() {
        return this._enrolledDateTime;
    };
    /**
     * Gets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
     * @returns a string
     */
    public get ethernetMacAddress() {
        return this._ethernetMacAddress;
    };
    /**
     * Gets the exchangeAccessState property value. The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined.
     * @returns a deviceManagementExchangeAccessState
     */
    public get exchangeAccessState() {
        return this._exchangeAccessState;
    };
    /**
     * Gets the exchangeAccessStateReason property value. The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp.
     * @returns a deviceManagementExchangeAccessStateReason
     */
    public get exchangeAccessStateReason() {
        return this._exchangeAccessStateReason;
    };
    /**
     * Gets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
     * @returns a Date
     */
    public get exchangeLastSuccessfulSyncDateTime() {
        return this._exchangeLastSuccessfulSyncDateTime;
    };
    /**
     * Gets the freeStorageSpaceInBytes property value. Free Storage in Bytes. This property is read-only.
     * @returns a int64
     */
    public get freeStorageSpaceInBytes() {
        return this._freeStorageSpaceInBytes;
    };
    /**
     * Gets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only.
     * @returns a string
     */
    public get iccid() {
        return this._iccid;
    };
    /**
     * Gets the imei property value. IMEI. This property is read-only.
     * @returns a string
     */
    public get imei() {
        return this._imei;
    };
    /**
     * Gets the isEncrypted property value. Device encryption status. This property is read-only.
     * @returns a boolean
     */
    public get isEncrypted() {
        return this._isEncrypted;
    };
    /**
     * Gets the isSupervised property value. Device supervised status. This property is read-only.
     * @returns a boolean
     */
    public get isSupervised() {
        return this._isSupervised;
    };
    /**
     * Gets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
     * @returns a string
     */
    public get jailBroken() {
        return this._jailBroken;
    };
    /**
     * Gets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Gets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     * @returns a string
     */
    public get managedDeviceName() {
        return this._managedDeviceName;
    };
    /**
     * Gets the managedDeviceOwnerType property value. Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.
     * @returns a managedDeviceOwnerType
     */
    public get managedDeviceOwnerType() {
        return this._managedDeviceOwnerType;
    };
    /**
     * Gets the managementAgent property value. Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController.
     * @returns a managementAgentType
     */
    public get managementAgent() {
        return this._managementAgent;
    };
    /**
     * Gets the manufacturer property value. Manufacturer of the device. This property is read-only.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Gets the meid property value. MEID. This property is read-only.
     * @returns a string
     */
    public get meid() {
        return this._meid;
    };
    /**
     * Gets the model property value. Model of the device. This property is read-only.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Gets the notes property value. Notes on the device created by IT Admin
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Gets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Gets the osVersion property value. Operating system version of the device. This property is read-only.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Gets the partnerReportedThreatState property value. Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured.
     * @returns a managedDevicePartnerReportedHealthState
     */
    public get partnerReportedThreatState() {
        return this._partnerReportedThreatState;
    };
    /**
     * Gets the phoneNumber property value. Phone number of the device. This property is read-only.
     * @returns a string
     */
    public get phoneNumber() {
        return this._phoneNumber;
    };
    /**
     * Gets the physicalMemoryInBytes property value. Total Memory in Bytes. This property is read-only.
     * @returns a int64
     */
    public get physicalMemoryInBytes() {
        return this._physicalMemoryInBytes;
    };
    /**
     * Gets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     * @returns a string
     */
    public get remoteAssistanceSessionErrorDetails() {
        return this._remoteAssistanceSessionErrorDetails;
    };
    /**
     * Gets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
     * @returns a string
     */
    public get remoteAssistanceSessionUrl() {
        return this._remoteAssistanceSessionUrl;
    };
    /**
     * Gets the serialNumber property value. SerialNumber. This property is read-only.
     * @returns a string
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Gets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
     * @returns a string
     */
    public get subscriberCarrier() {
        return this._subscriberCarrier;
    };
    /**
     * Gets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
     * @returns a int64
     */
    public get totalStorageSpaceInBytes() {
        return this._totalStorageSpaceInBytes;
    };
    /**
     * Gets the udid property value. Unique Device Identifier for iOS and macOS devices. This property is read-only.
     * @returns a string
     */
    public get udid() {
        return this._udid;
    };
    /**
     * Gets the userDisplayName property value. User display name. This property is read-only.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Gets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Gets the userPrincipalName property value. Device user principal name. This property is read-only.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Gets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
     * @returns a string
     */
    public get wiFiMacAddress() {
        return this._wiFiMacAddress;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activationLockBypassCode", (o, n) => { (o as unknown as ManagedDevice).activationLockBypassCode = n.getStringValue(); }],
            ["androidSecurityPatchLevel", (o, n) => { (o as unknown as ManagedDevice).androidSecurityPatchLevel = n.getStringValue(); }],
            ["azureADDeviceId", (o, n) => { (o as unknown as ManagedDevice).azureADDeviceId = n.getStringValue(); }],
            ["azureADRegistered", (o, n) => { (o as unknown as ManagedDevice).azureADRegistered = n.getBooleanValue(); }],
            ["complianceGracePeriodExpirationDateTime", (o, n) => { (o as unknown as ManagedDevice).complianceGracePeriodExpirationDateTime = n.getDateValue(); }],
            ["complianceState", (o, n) => { (o as unknown as ManagedDevice).complianceState = n.getEnumValue<ComplianceState>(ComplianceState); }],
            ["configurationManagerClientEnabledFeatures", (o, n) => { (o as unknown as ManagedDevice).configurationManagerClientEnabledFeatures = n.getObjectValue<ConfigurationManagerClientEnabledFeatures>(ConfigurationManagerClientEnabledFeatures); }],
            ["deviceActionResults", (o, n) => { (o as unknown as ManagedDevice).deviceActionResults = n.getCollectionOfObjectValues<DeviceActionResult>(DeviceActionResult); }],
            ["deviceCategory", (o, n) => { (o as unknown as ManagedDevice).deviceCategory = n.getObjectValue<DeviceCategory>(DeviceCategory); }],
            ["deviceCategoryDisplayName", (o, n) => { (o as unknown as ManagedDevice).deviceCategoryDisplayName = n.getStringValue(); }],
            ["deviceCompliancePolicyStates", (o, n) => { (o as unknown as ManagedDevice).deviceCompliancePolicyStates = n.getCollectionOfObjectValues<DeviceCompliancePolicyState>(DeviceCompliancePolicyState); }],
            ["deviceConfigurationStates", (o, n) => { (o as unknown as ManagedDevice).deviceConfigurationStates = n.getCollectionOfObjectValues<DeviceConfigurationState>(DeviceConfigurationState); }],
            ["deviceEnrollmentType", (o, n) => { (o as unknown as ManagedDevice).deviceEnrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); }],
            ["deviceHealthAttestationState", (o, n) => { (o as unknown as ManagedDevice).deviceHealthAttestationState = n.getObjectValue<DeviceHealthAttestationState>(DeviceHealthAttestationState); }],
            ["deviceName", (o, n) => { (o as unknown as ManagedDevice).deviceName = n.getStringValue(); }],
            ["deviceRegistrationState", (o, n) => { (o as unknown as ManagedDevice).deviceRegistrationState = n.getEnumValue<DeviceRegistrationState>(DeviceRegistrationState); }],
            ["easActivated", (o, n) => { (o as unknown as ManagedDevice).easActivated = n.getBooleanValue(); }],
            ["easActivationDateTime", (o, n) => { (o as unknown as ManagedDevice).easActivationDateTime = n.getDateValue(); }],
            ["easDeviceId", (o, n) => { (o as unknown as ManagedDevice).easDeviceId = n.getStringValue(); }],
            ["emailAddress", (o, n) => { (o as unknown as ManagedDevice).emailAddress = n.getStringValue(); }],
            ["enrolledDateTime", (o, n) => { (o as unknown as ManagedDevice).enrolledDateTime = n.getDateValue(); }],
            ["ethernetMacAddress", (o, n) => { (o as unknown as ManagedDevice).ethernetMacAddress = n.getStringValue(); }],
            ["exchangeAccessState", (o, n) => { (o as unknown as ManagedDevice).exchangeAccessState = n.getEnumValue<DeviceManagementExchangeAccessState>(DeviceManagementExchangeAccessState); }],
            ["exchangeAccessStateReason", (o, n) => { (o as unknown as ManagedDevice).exchangeAccessStateReason = n.getEnumValue<DeviceManagementExchangeAccessStateReason>(DeviceManagementExchangeAccessStateReason); }],
            ["exchangeLastSuccessfulSyncDateTime", (o, n) => { (o as unknown as ManagedDevice).exchangeLastSuccessfulSyncDateTime = n.getDateValue(); }],
            ["freeStorageSpaceInBytes", (o, n) => { (o as unknown as ManagedDevice).freeStorageSpaceInBytes = n.getNumberValue(); }],
            ["iccid", (o, n) => { (o as unknown as ManagedDevice).iccid = n.getStringValue(); }],
            ["imei", (o, n) => { (o as unknown as ManagedDevice).imei = n.getStringValue(); }],
            ["isEncrypted", (o, n) => { (o as unknown as ManagedDevice).isEncrypted = n.getBooleanValue(); }],
            ["isSupervised", (o, n) => { (o as unknown as ManagedDevice).isSupervised = n.getBooleanValue(); }],
            ["jailBroken", (o, n) => { (o as unknown as ManagedDevice).jailBroken = n.getStringValue(); }],
            ["lastSyncDateTime", (o, n) => { (o as unknown as ManagedDevice).lastSyncDateTime = n.getDateValue(); }],
            ["managedDeviceName", (o, n) => { (o as unknown as ManagedDevice).managedDeviceName = n.getStringValue(); }],
            ["managedDeviceOwnerType", (o, n) => { (o as unknown as ManagedDevice).managedDeviceOwnerType = n.getEnumValue<ManagedDeviceOwnerType>(ManagedDeviceOwnerType); }],
            ["managementAgent", (o, n) => { (o as unknown as ManagedDevice).managementAgent = n.getEnumValue<ManagementAgentType>(ManagementAgentType); }],
            ["manufacturer", (o, n) => { (o as unknown as ManagedDevice).manufacturer = n.getStringValue(); }],
            ["meid", (o, n) => { (o as unknown as ManagedDevice).meid = n.getStringValue(); }],
            ["model", (o, n) => { (o as unknown as ManagedDevice).model = n.getStringValue(); }],
            ["notes", (o, n) => { (o as unknown as ManagedDevice).notes = n.getStringValue(); }],
            ["operatingSystem", (o, n) => { (o as unknown as ManagedDevice).operatingSystem = n.getStringValue(); }],
            ["osVersion", (o, n) => { (o as unknown as ManagedDevice).osVersion = n.getStringValue(); }],
            ["partnerReportedThreatState", (o, n) => { (o as unknown as ManagedDevice).partnerReportedThreatState = n.getEnumValue<ManagedDevicePartnerReportedHealthState>(ManagedDevicePartnerReportedHealthState); }],
            ["phoneNumber", (o, n) => { (o as unknown as ManagedDevice).phoneNumber = n.getStringValue(); }],
            ["physicalMemoryInBytes", (o, n) => { (o as unknown as ManagedDevice).physicalMemoryInBytes = n.getNumberValue(); }],
            ["remoteAssistanceSessionErrorDetails", (o, n) => { (o as unknown as ManagedDevice).remoteAssistanceSessionErrorDetails = n.getStringValue(); }],
            ["remoteAssistanceSessionUrl", (o, n) => { (o as unknown as ManagedDevice).remoteAssistanceSessionUrl = n.getStringValue(); }],
            ["serialNumber", (o, n) => { (o as unknown as ManagedDevice).serialNumber = n.getStringValue(); }],
            ["subscriberCarrier", (o, n) => { (o as unknown as ManagedDevice).subscriberCarrier = n.getStringValue(); }],
            ["totalStorageSpaceInBytes", (o, n) => { (o as unknown as ManagedDevice).totalStorageSpaceInBytes = n.getNumberValue(); }],
            ["udid", (o, n) => { (o as unknown as ManagedDevice).udid = n.getStringValue(); }],
            ["userDisplayName", (o, n) => { (o as unknown as ManagedDevice).userDisplayName = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as ManagedDevice).userId = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as ManagedDevice).userPrincipalName = n.getStringValue(); }],
            ["wiFiMacAddress", (o, n) => { (o as unknown as ManagedDevice).wiFiMacAddress = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("activationLockBypassCode", this.activationLockBypassCode);
        writer.writeStringValue("androidSecurityPatchLevel", this.androidSecurityPatchLevel);
        writer.writeStringValue("azureADDeviceId", this.azureADDeviceId);
        writer.writeBooleanValue("azureADRegistered", this.azureADRegistered);
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        writer.writeEnumValue<ComplianceState>("complianceState", this.complianceState);
        writer.writeObjectValue<ConfigurationManagerClientEnabledFeatures>("configurationManagerClientEnabledFeatures", this.configurationManagerClientEnabledFeatures);
        writer.writeCollectionOfObjectValues<DeviceActionResult>("deviceActionResults", this.deviceActionResults);
        writer.writeObjectValue<DeviceCategory>("deviceCategory", this.deviceCategory);
        writer.writeStringValue("deviceCategoryDisplayName", this.deviceCategoryDisplayName);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("deviceCompliancePolicyStates", this.deviceCompliancePolicyStates);
        writer.writeCollectionOfObjectValues<DeviceConfigurationState>("deviceConfigurationStates", this.deviceConfigurationStates);
        writer.writeEnumValue<DeviceEnrollmentType>("deviceEnrollmentType", this.deviceEnrollmentType);
        writer.writeObjectValue<DeviceHealthAttestationState>("deviceHealthAttestationState", this.deviceHealthAttestationState);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeEnumValue<DeviceRegistrationState>("deviceRegistrationState", this.deviceRegistrationState);
        writer.writeBooleanValue("easActivated", this.easActivated);
        writer.writeDateValue("easActivationDateTime", this.easActivationDateTime);
        writer.writeStringValue("easDeviceId", this.easDeviceId);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeDateValue("enrolledDateTime", this.enrolledDateTime);
        writer.writeStringValue("ethernetMacAddress", this.ethernetMacAddress);
        writer.writeEnumValue<DeviceManagementExchangeAccessState>("exchangeAccessState", this.exchangeAccessState);
        writer.writeEnumValue<DeviceManagementExchangeAccessStateReason>("exchangeAccessStateReason", this.exchangeAccessStateReason);
        writer.writeDateValue("exchangeLastSuccessfulSyncDateTime", this.exchangeLastSuccessfulSyncDateTime);
        writer.writeNumberValue("freeStorageSpaceInBytes", this.freeStorageSpaceInBytes);
        writer.writeStringValue("iccid", this.iccid);
        writer.writeStringValue("imei", this.imei);
        writer.writeBooleanValue("isEncrypted", this.isEncrypted);
        writer.writeBooleanValue("isSupervised", this.isSupervised);
        writer.writeStringValue("jailBroken", this.jailBroken);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("managedDeviceName", this.managedDeviceName);
        writer.writeEnumValue<ManagedDeviceOwnerType>("managedDeviceOwnerType", this.managedDeviceOwnerType);
        writer.writeEnumValue<ManagementAgentType>("managementAgent", this.managementAgent);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("meid", this.meid);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("notes", this.notes);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeEnumValue<ManagedDevicePartnerReportedHealthState>("partnerReportedThreatState", this.partnerReportedThreatState);
        writer.writeStringValue("phoneNumber", this.phoneNumber);
        writer.writeNumberValue("physicalMemoryInBytes", this.physicalMemoryInBytes);
        writer.writeStringValue("remoteAssistanceSessionErrorDetails", this.remoteAssistanceSessionErrorDetails);
        writer.writeStringValue("remoteAssistanceSessionUrl", this.remoteAssistanceSessionUrl);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeStringValue("subscriberCarrier", this.subscriberCarrier);
        writer.writeNumberValue("totalStorageSpaceInBytes", this.totalStorageSpaceInBytes);
        writer.writeStringValue("udid", this.udid);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeStringValue("wiFiMacAddress", this.wiFiMacAddress);
    };
    /**
     * Sets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
     * @param value Value to set for the activationLockBypassCode property.
     */
    public set activationLockBypassCode(value: string | undefined) {
        this._activationLockBypassCode = value;
    };
    /**
     * Sets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
     * @param value Value to set for the androidSecurityPatchLevel property.
     */
    public set androidSecurityPatchLevel(value: string | undefined) {
        this._androidSecurityPatchLevel = value;
    };
    /**
     * Sets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @param value Value to set for the azureADDeviceId property.
     */
    public set azureADDeviceId(value: string | undefined) {
        this._azureADDeviceId = value;
    };
    /**
     * Sets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @param value Value to set for the azureADRegistered property.
     */
    public set azureADRegistered(value: boolean | undefined) {
        this._azureADRegistered = value;
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        this._complianceGracePeriodExpirationDateTime = value;
    };
    /**
     * Sets the complianceState property value. Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager.
     * @param value Value to set for the complianceState property.
     */
    public set complianceState(value: ComplianceState | undefined) {
        this._complianceState = value;
    };
    /**
     * Sets the configurationManagerClientEnabledFeatures property value. ConfigrMgr client enabled features. This property is read-only.
     * @param value Value to set for the configurationManagerClientEnabledFeatures property.
     */
    public set configurationManagerClientEnabledFeatures(value: ConfigurationManagerClientEnabledFeatures | undefined) {
        this._configurationManagerClientEnabledFeatures = value;
    };
    /**
     * Sets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
     * @param value Value to set for the deviceActionResults property.
     */
    public set deviceActionResults(value: DeviceActionResult[] | undefined) {
        this._deviceActionResults = value;
    };
    /**
     * Sets the deviceCategory property value. Device category
     * @param value Value to set for the deviceCategory property.
     */
    public set deviceCategory(value: DeviceCategory | undefined) {
        this._deviceCategory = value;
    };
    /**
     * Sets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
     * @param value Value to set for the deviceCategoryDisplayName property.
     */
    public set deviceCategoryDisplayName(value: string | undefined) {
        this._deviceCategoryDisplayName = value;
    };
    /**
     * Sets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
     * @param value Value to set for the deviceCompliancePolicyStates property.
     */
    public set deviceCompliancePolicyStates(value: DeviceCompliancePolicyState[] | undefined) {
        this._deviceCompliancePolicyStates = value;
    };
    /**
     * Sets the deviceConfigurationStates property value. Device configuration states for this device.
     * @param value Value to set for the deviceConfigurationStates property.
     */
    public set deviceConfigurationStates(value: DeviceConfigurationState[] | undefined) {
        this._deviceConfigurationStates = value;
    };
    /**
     * Sets the deviceEnrollmentType property value. Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount.
     * @param value Value to set for the deviceEnrollmentType property.
     */
    public set deviceEnrollmentType(value: DeviceEnrollmentType | undefined) {
        this._deviceEnrollmentType = value;
    };
    /**
     * Sets the deviceHealthAttestationState property value. The device health attestation state. This property is read-only.
     * @param value Value to set for the deviceHealthAttestationState property.
     */
    public set deviceHealthAttestationState(value: DeviceHealthAttestationState | undefined) {
        this._deviceHealthAttestationState = value;
    };
    /**
     * Sets the deviceName property value. Name of the device. This property is read-only.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Sets the deviceRegistrationState property value. Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown.
     * @param value Value to set for the deviceRegistrationState property.
     */
    public set deviceRegistrationState(value: DeviceRegistrationState | undefined) {
        this._deviceRegistrationState = value;
    };
    /**
     * Sets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
     * @param value Value to set for the easActivated property.
     */
    public set easActivated(value: boolean | undefined) {
        this._easActivated = value;
    };
    /**
     * Sets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
     * @param value Value to set for the easActivationDateTime property.
     */
    public set easActivationDateTime(value: Date | undefined) {
        this._easActivationDateTime = value;
    };
    /**
     * Sets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
     * @param value Value to set for the easDeviceId property.
     */
    public set easDeviceId(value: string | undefined) {
        this._easDeviceId = value;
    };
    /**
     * Sets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * Sets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
     * @param value Value to set for the enrolledDateTime property.
     */
    public set enrolledDateTime(value: Date | undefined) {
        this._enrolledDateTime = value;
    };
    /**
     * Sets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
     * @param value Value to set for the ethernetMacAddress property.
     */
    public set ethernetMacAddress(value: string | undefined) {
        this._ethernetMacAddress = value;
    };
    /**
     * Sets the exchangeAccessState property value. The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined.
     * @param value Value to set for the exchangeAccessState property.
     */
    public set exchangeAccessState(value: DeviceManagementExchangeAccessState | undefined) {
        this._exchangeAccessState = value;
    };
    /**
     * Sets the exchangeAccessStateReason property value. The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp.
     * @param value Value to set for the exchangeAccessStateReason property.
     */
    public set exchangeAccessStateReason(value: DeviceManagementExchangeAccessStateReason | undefined) {
        this._exchangeAccessStateReason = value;
    };
    /**
     * Sets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
     * @param value Value to set for the exchangeLastSuccessfulSyncDateTime property.
     */
    public set exchangeLastSuccessfulSyncDateTime(value: Date | undefined) {
        this._exchangeLastSuccessfulSyncDateTime = value;
    };
    /**
     * Sets the freeStorageSpaceInBytes property value. Free Storage in Bytes. This property is read-only.
     * @param value Value to set for the freeStorageSpaceInBytes property.
     */
    public set freeStorageSpaceInBytes(value: number | undefined) {
        this._freeStorageSpaceInBytes = value;
    };
    /**
     * Sets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only.
     * @param value Value to set for the iccid property.
     */
    public set iccid(value: string | undefined) {
        this._iccid = value;
    };
    /**
     * Sets the imei property value. IMEI. This property is read-only.
     * @param value Value to set for the imei property.
     */
    public set imei(value: string | undefined) {
        this._imei = value;
    };
    /**
     * Sets the isEncrypted property value. Device encryption status. This property is read-only.
     * @param value Value to set for the isEncrypted property.
     */
    public set isEncrypted(value: boolean | undefined) {
        this._isEncrypted = value;
    };
    /**
     * Sets the isSupervised property value. Device supervised status. This property is read-only.
     * @param value Value to set for the isSupervised property.
     */
    public set isSupervised(value: boolean | undefined) {
        this._isSupervised = value;
    };
    /**
     * Sets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
     * @param value Value to set for the jailBroken property.
     */
    public set jailBroken(value: string | undefined) {
        this._jailBroken = value;
    };
    /**
     * Sets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Sets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     * @param value Value to set for the managedDeviceName property.
     */
    public set managedDeviceName(value: string | undefined) {
        this._managedDeviceName = value;
    };
    /**
     * Sets the managedDeviceOwnerType property value. Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.
     * @param value Value to set for the managedDeviceOwnerType property.
     */
    public set managedDeviceOwnerType(value: ManagedDeviceOwnerType | undefined) {
        this._managedDeviceOwnerType = value;
    };
    /**
     * Sets the managementAgent property value. Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController.
     * @param value Value to set for the managementAgent property.
     */
    public set managementAgent(value: ManagementAgentType | undefined) {
        this._managementAgent = value;
    };
    /**
     * Sets the manufacturer property value. Manufacturer of the device. This property is read-only.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Sets the meid property value. MEID. This property is read-only.
     * @param value Value to set for the meid property.
     */
    public set meid(value: string | undefined) {
        this._meid = value;
    };
    /**
     * Sets the model property value. Model of the device. This property is read-only.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Sets the notes property value. Notes on the device created by IT Admin
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Sets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Sets the osVersion property value. Operating system version of the device. This property is read-only.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        this._osVersion = value;
    };
    /**
     * Sets the partnerReportedThreatState property value. Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured.
     * @param value Value to set for the partnerReportedThreatState property.
     */
    public set partnerReportedThreatState(value: ManagedDevicePartnerReportedHealthState | undefined) {
        this._partnerReportedThreatState = value;
    };
    /**
     * Sets the phoneNumber property value. Phone number of the device. This property is read-only.
     * @param value Value to set for the phoneNumber property.
     */
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    };
    /**
     * Sets the physicalMemoryInBytes property value. Total Memory in Bytes. This property is read-only.
     * @param value Value to set for the physicalMemoryInBytes property.
     */
    public set physicalMemoryInBytes(value: number | undefined) {
        this._physicalMemoryInBytes = value;
    };
    /**
     * Sets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     * @param value Value to set for the remoteAssistanceSessionErrorDetails property.
     */
    public set remoteAssistanceSessionErrorDetails(value: string | undefined) {
        this._remoteAssistanceSessionErrorDetails = value;
    };
    /**
     * Sets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
     * @param value Value to set for the remoteAssistanceSessionUrl property.
     */
    public set remoteAssistanceSessionUrl(value: string | undefined) {
        this._remoteAssistanceSessionUrl = value;
    };
    /**
     * Sets the serialNumber property value. SerialNumber. This property is read-only.
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: string | undefined) {
        this._serialNumber = value;
    };
    /**
     * Sets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
     * @param value Value to set for the subscriberCarrier property.
     */
    public set subscriberCarrier(value: string | undefined) {
        this._subscriberCarrier = value;
    };
    /**
     * Sets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
     * @param value Value to set for the totalStorageSpaceInBytes property.
     */
    public set totalStorageSpaceInBytes(value: number | undefined) {
        this._totalStorageSpaceInBytes = value;
    };
    /**
     * Sets the udid property value. Unique Device Identifier for iOS and macOS devices. This property is read-only.
     * @param value Value to set for the udid property.
     */
    public set udid(value: string | undefined) {
        this._udid = value;
    };
    /**
     * Sets the userDisplayName property value. User display name. This property is read-only.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Sets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Sets the userPrincipalName property value. Device user principal name. This property is read-only.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Sets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
     * @param value Value to set for the wiFiMacAddress property.
     */
    public set wiFiMacAddress(value: string | undefined) {
        this._wiFiMacAddress = value;
    };
}
