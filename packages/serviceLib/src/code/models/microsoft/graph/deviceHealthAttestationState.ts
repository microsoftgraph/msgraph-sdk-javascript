import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceHealthAttestationState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key (EK) certificate.  */
    private _attestationIdentityKey?: string | undefined;
    /** On or Off of BitLocker Drive Encryption  */
    private _bitLockerStatus?: string | undefined;
    /** The security version number of the Boot Application  */
    private _bootAppSecurityVersion?: string | undefined;
    /** When bootDebugging is enabled, the device is used in development and testing  */
    private _bootDebugging?: string | undefined;
    /** The security version number of the Boot Application  */
    private _bootManagerSecurityVersion?: string | undefined;
    /** The version of the Boot Manager  */
    private _bootManagerVersion?: string | undefined;
    /** The Boot Revision List that was loaded during initial boot on the attested device  */
    private _bootRevisionListInfo?: string | undefined;
    /** When code integrity is enabled, code execution is restricted to integrity verified code  */
    private _codeIntegrity?: string | undefined;
    /** The version of the Boot Manager  */
    private _codeIntegrityCheckVersion?: string | undefined;
    /** The Code Integrity policy that is controlling the security of the boot environment  */
    private _codeIntegrityPolicy?: string | undefined;
    /** The DHA report version. (Namespace version)  */
    private _contentNamespaceUrl?: string | undefined;
    /** The HealthAttestation state schema version  */
    private _contentVersion?: string | undefined;
    /** DEP Policy defines a set of hardware and software technologies that perform additional checks on memory  */
    private _dataExcutionPolicy?: string | undefined;
    /** The DHA report version. (Namespace version)  */
    private _deviceHealthAttestationStatus?: string | undefined;
    /** ELAM provides protection for the computers in your network when they start up  */
    private _earlyLaunchAntiMalwareDriverProtection?: string | undefined;
    /** This attribute indicates if DHA is supported for the device  */
    private _healthAttestationSupportedStatus?: string | undefined;
    /** This attribute appears if DHA-Service detects an integrity issue  */
    private _healthStatusMismatchInfo?: string | undefined;
    /** The DateTime when device was evaluated or issued to MDM  */
    private _issuedDateTime?: Date | undefined;
    /** The Timestamp of the last update.  */
    private _lastUpdateDateTime?: string | undefined;
    /** When operatingSystemKernelDebugging is enabled, the device is used in development and testing  */
    private _operatingSystemKernelDebugging?: string | undefined;
    /** The Operating System Revision List that was loaded during initial boot on the attested device  */
    private _operatingSystemRevListInfo?: string | undefined;
    /** The measurement that is captured in PCR[0]  */
    private _pcr0?: string | undefined;
    /** Informational attribute that identifies the HASH algorithm that was used by TPM  */
    private _pcrHashAlgorithm?: string | undefined;
    /** The number of times a PC device has hibernated or resumed  */
    private _resetCount?: number | undefined;
    /** The number of times a PC device has rebooted  */
    private _restartCount?: number | undefined;
    /** Safe mode is a troubleshooting option for Windows that starts your computer in a limited state  */
    private _safeMode?: string | undefined;
    /** When Secure Boot is enabled, the core components must have the correct cryptographic signatures  */
    private _secureBoot?: string | undefined;
    /** Fingerprint of the Custom Secure Boot Configuration Policy  */
    private _secureBootConfigurationPolicyFingerPrint?: string | undefined;
    /** When test signing is allowed, the device does not enforce signature validation during boot  */
    private _testSigning?: string | undefined;
    /** The security version number of the Boot Application  */
    private _tpmVersion?: string | undefined;
    /** VSM is a container that protects high value assets from a compromised kernel  */
    private _virtualSecureMode?: string | undefined;
    /** Operating system running with limited services that is used to prepare a computer for Windows  */
    private _windowsPE?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the attestationIdentityKey property value. TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key (EK) certificate.
     * @returns a string
     */
    public get attestationIdentityKey() {
        return this._attestationIdentityKey;
    };
    /**
     * Sets the attestationIdentityKey property value. TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key (EK) certificate.
     * @param value Value to set for the attestationIdentityKey property.
     */
    public set attestationIdentityKey(value: string | undefined) {
        this._attestationIdentityKey = value;
    };
    /**
     * Gets the bitLockerStatus property value. On or Off of BitLocker Drive Encryption
     * @returns a string
     */
    public get bitLockerStatus() {
        return this._bitLockerStatus;
    };
    /**
     * Sets the bitLockerStatus property value. On or Off of BitLocker Drive Encryption
     * @param value Value to set for the bitLockerStatus property.
     */
    public set bitLockerStatus(value: string | undefined) {
        this._bitLockerStatus = value;
    };
    /**
     * Gets the bootAppSecurityVersion property value. The security version number of the Boot Application
     * @returns a string
     */
    public get bootAppSecurityVersion() {
        return this._bootAppSecurityVersion;
    };
    /**
     * Sets the bootAppSecurityVersion property value. The security version number of the Boot Application
     * @param value Value to set for the bootAppSecurityVersion property.
     */
    public set bootAppSecurityVersion(value: string | undefined) {
        this._bootAppSecurityVersion = value;
    };
    /**
     * Gets the bootDebugging property value. When bootDebugging is enabled, the device is used in development and testing
     * @returns a string
     */
    public get bootDebugging() {
        return this._bootDebugging;
    };
    /**
     * Sets the bootDebugging property value. When bootDebugging is enabled, the device is used in development and testing
     * @param value Value to set for the bootDebugging property.
     */
    public set bootDebugging(value: string | undefined) {
        this._bootDebugging = value;
    };
    /**
     * Gets the bootManagerSecurityVersion property value. The security version number of the Boot Application
     * @returns a string
     */
    public get bootManagerSecurityVersion() {
        return this._bootManagerSecurityVersion;
    };
    /**
     * Sets the bootManagerSecurityVersion property value. The security version number of the Boot Application
     * @param value Value to set for the bootManagerSecurityVersion property.
     */
    public set bootManagerSecurityVersion(value: string | undefined) {
        this._bootManagerSecurityVersion = value;
    };
    /**
     * Gets the bootManagerVersion property value. The version of the Boot Manager
     * @returns a string
     */
    public get bootManagerVersion() {
        return this._bootManagerVersion;
    };
    /**
     * Sets the bootManagerVersion property value. The version of the Boot Manager
     * @param value Value to set for the bootManagerVersion property.
     */
    public set bootManagerVersion(value: string | undefined) {
        this._bootManagerVersion = value;
    };
    /**
     * Gets the bootRevisionListInfo property value. The Boot Revision List that was loaded during initial boot on the attested device
     * @returns a string
     */
    public get bootRevisionListInfo() {
        return this._bootRevisionListInfo;
    };
    /**
     * Sets the bootRevisionListInfo property value. The Boot Revision List that was loaded during initial boot on the attested device
     * @param value Value to set for the bootRevisionListInfo property.
     */
    public set bootRevisionListInfo(value: string | undefined) {
        this._bootRevisionListInfo = value;
    };
    /**
     * Gets the codeIntegrity property value. When code integrity is enabled, code execution is restricted to integrity verified code
     * @returns a string
     */
    public get codeIntegrity() {
        return this._codeIntegrity;
    };
    /**
     * Sets the codeIntegrity property value. When code integrity is enabled, code execution is restricted to integrity verified code
     * @param value Value to set for the codeIntegrity property.
     */
    public set codeIntegrity(value: string | undefined) {
        this._codeIntegrity = value;
    };
    /**
     * Gets the codeIntegrityCheckVersion property value. The version of the Boot Manager
     * @returns a string
     */
    public get codeIntegrityCheckVersion() {
        return this._codeIntegrityCheckVersion;
    };
    /**
     * Sets the codeIntegrityCheckVersion property value. The version of the Boot Manager
     * @param value Value to set for the codeIntegrityCheckVersion property.
     */
    public set codeIntegrityCheckVersion(value: string | undefined) {
        this._codeIntegrityCheckVersion = value;
    };
    /**
     * Gets the codeIntegrityPolicy property value. The Code Integrity policy that is controlling the security of the boot environment
     * @returns a string
     */
    public get codeIntegrityPolicy() {
        return this._codeIntegrityPolicy;
    };
    /**
     * Sets the codeIntegrityPolicy property value. The Code Integrity policy that is controlling the security of the boot environment
     * @param value Value to set for the codeIntegrityPolicy property.
     */
    public set codeIntegrityPolicy(value: string | undefined) {
        this._codeIntegrityPolicy = value;
    };
    /**
     * Instantiates a new deviceHealthAttestationState and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the contentNamespaceUrl property value. The DHA report version. (Namespace version)
     * @returns a string
     */
    public get contentNamespaceUrl() {
        return this._contentNamespaceUrl;
    };
    /**
     * Sets the contentNamespaceUrl property value. The DHA report version. (Namespace version)
     * @param value Value to set for the contentNamespaceUrl property.
     */
    public set contentNamespaceUrl(value: string | undefined) {
        this._contentNamespaceUrl = value;
    };
    /**
     * Gets the contentVersion property value. The HealthAttestation state schema version
     * @returns a string
     */
    public get contentVersion() {
        return this._contentVersion;
    };
    /**
     * Sets the contentVersion property value. The HealthAttestation state schema version
     * @param value Value to set for the contentVersion property.
     */
    public set contentVersion(value: string | undefined) {
        this._contentVersion = value;
    };
    /**
     * Gets the dataExcutionPolicy property value. DEP Policy defines a set of hardware and software technologies that perform additional checks on memory
     * @returns a string
     */
    public get dataExcutionPolicy() {
        return this._dataExcutionPolicy;
    };
    /**
     * Sets the dataExcutionPolicy property value. DEP Policy defines a set of hardware and software technologies that perform additional checks on memory
     * @param value Value to set for the dataExcutionPolicy property.
     */
    public set dataExcutionPolicy(value: string | undefined) {
        this._dataExcutionPolicy = value;
    };
    /**
     * Gets the deviceHealthAttestationStatus property value. The DHA report version. (Namespace version)
     * @returns a string
     */
    public get deviceHealthAttestationStatus() {
        return this._deviceHealthAttestationStatus;
    };
    /**
     * Sets the deviceHealthAttestationStatus property value. The DHA report version. (Namespace version)
     * @param value Value to set for the deviceHealthAttestationStatus property.
     */
    public set deviceHealthAttestationStatus(value: string | undefined) {
        this._deviceHealthAttestationStatus = value;
    };
    /**
     * Gets the earlyLaunchAntiMalwareDriverProtection property value. ELAM provides protection for the computers in your network when they start up
     * @returns a string
     */
    public get earlyLaunchAntiMalwareDriverProtection() {
        return this._earlyLaunchAntiMalwareDriverProtection;
    };
    /**
     * Sets the earlyLaunchAntiMalwareDriverProtection property value. ELAM provides protection for the computers in your network when they start up
     * @param value Value to set for the earlyLaunchAntiMalwareDriverProtection property.
     */
    public set earlyLaunchAntiMalwareDriverProtection(value: string | undefined) {
        this._earlyLaunchAntiMalwareDriverProtection = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["attestationIdentityKey", (o, n) => { (o as unknown as DeviceHealthAttestationState).attestationIdentityKey = n.getStringValue(); }],
            ["bitLockerStatus", (o, n) => { (o as unknown as DeviceHealthAttestationState).bitLockerStatus = n.getStringValue(); }],
            ["bootAppSecurityVersion", (o, n) => { (o as unknown as DeviceHealthAttestationState).bootAppSecurityVersion = n.getStringValue(); }],
            ["bootDebugging", (o, n) => { (o as unknown as DeviceHealthAttestationState).bootDebugging = n.getStringValue(); }],
            ["bootManagerSecurityVersion", (o, n) => { (o as unknown as DeviceHealthAttestationState).bootManagerSecurityVersion = n.getStringValue(); }],
            ["bootManagerVersion", (o, n) => { (o as unknown as DeviceHealthAttestationState).bootManagerVersion = n.getStringValue(); }],
            ["bootRevisionListInfo", (o, n) => { (o as unknown as DeviceHealthAttestationState).bootRevisionListInfo = n.getStringValue(); }],
            ["codeIntegrity", (o, n) => { (o as unknown as DeviceHealthAttestationState).codeIntegrity = n.getStringValue(); }],
            ["codeIntegrityCheckVersion", (o, n) => { (o as unknown as DeviceHealthAttestationState).codeIntegrityCheckVersion = n.getStringValue(); }],
            ["codeIntegrityPolicy", (o, n) => { (o as unknown as DeviceHealthAttestationState).codeIntegrityPolicy = n.getStringValue(); }],
            ["contentNamespaceUrl", (o, n) => { (o as unknown as DeviceHealthAttestationState).contentNamespaceUrl = n.getStringValue(); }],
            ["contentVersion", (o, n) => { (o as unknown as DeviceHealthAttestationState).contentVersion = n.getStringValue(); }],
            ["dataExcutionPolicy", (o, n) => { (o as unknown as DeviceHealthAttestationState).dataExcutionPolicy = n.getStringValue(); }],
            ["deviceHealthAttestationStatus", (o, n) => { (o as unknown as DeviceHealthAttestationState).deviceHealthAttestationStatus = n.getStringValue(); }],
            ["earlyLaunchAntiMalwareDriverProtection", (o, n) => { (o as unknown as DeviceHealthAttestationState).earlyLaunchAntiMalwareDriverProtection = n.getStringValue(); }],
            ["healthAttestationSupportedStatus", (o, n) => { (o as unknown as DeviceHealthAttestationState).healthAttestationSupportedStatus = n.getStringValue(); }],
            ["healthStatusMismatchInfo", (o, n) => { (o as unknown as DeviceHealthAttestationState).healthStatusMismatchInfo = n.getStringValue(); }],
            ["issuedDateTime", (o, n) => { (o as unknown as DeviceHealthAttestationState).issuedDateTime = n.getDateValue(); }],
            ["lastUpdateDateTime", (o, n) => { (o as unknown as DeviceHealthAttestationState).lastUpdateDateTime = n.getStringValue(); }],
            ["operatingSystemKernelDebugging", (o, n) => { (o as unknown as DeviceHealthAttestationState).operatingSystemKernelDebugging = n.getStringValue(); }],
            ["operatingSystemRevListInfo", (o, n) => { (o as unknown as DeviceHealthAttestationState).operatingSystemRevListInfo = n.getStringValue(); }],
            ["pcr0", (o, n) => { (o as unknown as DeviceHealthAttestationState).pcr0 = n.getStringValue(); }],
            ["pcrHashAlgorithm", (o, n) => { (o as unknown as DeviceHealthAttestationState).pcrHashAlgorithm = n.getStringValue(); }],
            ["resetCount", (o, n) => { (o as unknown as DeviceHealthAttestationState).resetCount = n.getNumberValue(); }],
            ["restartCount", (o, n) => { (o as unknown as DeviceHealthAttestationState).restartCount = n.getNumberValue(); }],
            ["safeMode", (o, n) => { (o as unknown as DeviceHealthAttestationState).safeMode = n.getStringValue(); }],
            ["secureBoot", (o, n) => { (o as unknown as DeviceHealthAttestationState).secureBoot = n.getStringValue(); }],
            ["secureBootConfigurationPolicyFingerPrint", (o, n) => { (o as unknown as DeviceHealthAttestationState).secureBootConfigurationPolicyFingerPrint = n.getStringValue(); }],
            ["testSigning", (o, n) => { (o as unknown as DeviceHealthAttestationState).testSigning = n.getStringValue(); }],
            ["tpmVersion", (o, n) => { (o as unknown as DeviceHealthAttestationState).tpmVersion = n.getStringValue(); }],
            ["virtualSecureMode", (o, n) => { (o as unknown as DeviceHealthAttestationState).virtualSecureMode = n.getStringValue(); }],
            ["windowsPE", (o, n) => { (o as unknown as DeviceHealthAttestationState).windowsPE = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the healthAttestationSupportedStatus property value. This attribute indicates if DHA is supported for the device
     * @returns a string
     */
    public get healthAttestationSupportedStatus() {
        return this._healthAttestationSupportedStatus;
    };
    /**
     * Sets the healthAttestationSupportedStatus property value. This attribute indicates if DHA is supported for the device
     * @param value Value to set for the healthAttestationSupportedStatus property.
     */
    public set healthAttestationSupportedStatus(value: string | undefined) {
        this._healthAttestationSupportedStatus = value;
    };
    /**
     * Gets the healthStatusMismatchInfo property value. This attribute appears if DHA-Service detects an integrity issue
     * @returns a string
     */
    public get healthStatusMismatchInfo() {
        return this._healthStatusMismatchInfo;
    };
    /**
     * Sets the healthStatusMismatchInfo property value. This attribute appears if DHA-Service detects an integrity issue
     * @param value Value to set for the healthStatusMismatchInfo property.
     */
    public set healthStatusMismatchInfo(value: string | undefined) {
        this._healthStatusMismatchInfo = value;
    };
    /**
     * Gets the issuedDateTime property value. The DateTime when device was evaluated or issued to MDM
     * @returns a Date
     */
    public get issuedDateTime() {
        return this._issuedDateTime;
    };
    /**
     * Sets the issuedDateTime property value. The DateTime when device was evaluated or issued to MDM
     * @param value Value to set for the issuedDateTime property.
     */
    public set issuedDateTime(value: Date | undefined) {
        this._issuedDateTime = value;
    };
    /**
     * Gets the lastUpdateDateTime property value. The Timestamp of the last update.
     * @returns a string
     */
    public get lastUpdateDateTime() {
        return this._lastUpdateDateTime;
    };
    /**
     * Sets the lastUpdateDateTime property value. The Timestamp of the last update.
     * @param value Value to set for the lastUpdateDateTime property.
     */
    public set lastUpdateDateTime(value: string | undefined) {
        this._lastUpdateDateTime = value;
    };
    /**
     * Gets the operatingSystemKernelDebugging property value. When operatingSystemKernelDebugging is enabled, the device is used in development and testing
     * @returns a string
     */
    public get operatingSystemKernelDebugging() {
        return this._operatingSystemKernelDebugging;
    };
    /**
     * Sets the operatingSystemKernelDebugging property value. When operatingSystemKernelDebugging is enabled, the device is used in development and testing
     * @param value Value to set for the operatingSystemKernelDebugging property.
     */
    public set operatingSystemKernelDebugging(value: string | undefined) {
        this._operatingSystemKernelDebugging = value;
    };
    /**
     * Gets the operatingSystemRevListInfo property value. The Operating System Revision List that was loaded during initial boot on the attested device
     * @returns a string
     */
    public get operatingSystemRevListInfo() {
        return this._operatingSystemRevListInfo;
    };
    /**
     * Sets the operatingSystemRevListInfo property value. The Operating System Revision List that was loaded during initial boot on the attested device
     * @param value Value to set for the operatingSystemRevListInfo property.
     */
    public set operatingSystemRevListInfo(value: string | undefined) {
        this._operatingSystemRevListInfo = value;
    };
    /**
     * Gets the pcr0 property value. The measurement that is captured in PCR[0]
     * @returns a string
     */
    public get pcr0() {
        return this._pcr0;
    };
    /**
     * Sets the pcr0 property value. The measurement that is captured in PCR[0]
     * @param value Value to set for the pcr0 property.
     */
    public set pcr0(value: string | undefined) {
        this._pcr0 = value;
    };
    /**
     * Gets the pcrHashAlgorithm property value. Informational attribute that identifies the HASH algorithm that was used by TPM
     * @returns a string
     */
    public get pcrHashAlgorithm() {
        return this._pcrHashAlgorithm;
    };
    /**
     * Sets the pcrHashAlgorithm property value. Informational attribute that identifies the HASH algorithm that was used by TPM
     * @param value Value to set for the pcrHashAlgorithm property.
     */
    public set pcrHashAlgorithm(value: string | undefined) {
        this._pcrHashAlgorithm = value;
    };
    /**
     * Gets the resetCount property value. The number of times a PC device has hibernated or resumed
     * @returns a int64
     */
    public get resetCount() {
        return this._resetCount;
    };
    /**
     * Sets the resetCount property value. The number of times a PC device has hibernated or resumed
     * @param value Value to set for the resetCount property.
     */
    public set resetCount(value: number | undefined) {
        this._resetCount = value;
    };
    /**
     * Gets the restartCount property value. The number of times a PC device has rebooted
     * @returns a int64
     */
    public get restartCount() {
        return this._restartCount;
    };
    /**
     * Sets the restartCount property value. The number of times a PC device has rebooted
     * @param value Value to set for the restartCount property.
     */
    public set restartCount(value: number | undefined) {
        this._restartCount = value;
    };
    /**
     * Gets the safeMode property value. Safe mode is a troubleshooting option for Windows that starts your computer in a limited state
     * @returns a string
     */
    public get safeMode() {
        return this._safeMode;
    };
    /**
     * Sets the safeMode property value. Safe mode is a troubleshooting option for Windows that starts your computer in a limited state
     * @param value Value to set for the safeMode property.
     */
    public set safeMode(value: string | undefined) {
        this._safeMode = value;
    };
    /**
     * Gets the secureBoot property value. When Secure Boot is enabled, the core components must have the correct cryptographic signatures
     * @returns a string
     */
    public get secureBoot() {
        return this._secureBoot;
    };
    /**
     * Sets the secureBoot property value. When Secure Boot is enabled, the core components must have the correct cryptographic signatures
     * @param value Value to set for the secureBoot property.
     */
    public set secureBoot(value: string | undefined) {
        this._secureBoot = value;
    };
    /**
     * Gets the secureBootConfigurationPolicyFingerPrint property value. Fingerprint of the Custom Secure Boot Configuration Policy
     * @returns a string
     */
    public get secureBootConfigurationPolicyFingerPrint() {
        return this._secureBootConfigurationPolicyFingerPrint;
    };
    /**
     * Sets the secureBootConfigurationPolicyFingerPrint property value. Fingerprint of the Custom Secure Boot Configuration Policy
     * @param value Value to set for the secureBootConfigurationPolicyFingerPrint property.
     */
    public set secureBootConfigurationPolicyFingerPrint(value: string | undefined) {
        this._secureBootConfigurationPolicyFingerPrint = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("attestationIdentityKey", this.attestationIdentityKey);
        writer.writeStringValue("bitLockerStatus", this.bitLockerStatus);
        writer.writeStringValue("bootAppSecurityVersion", this.bootAppSecurityVersion);
        writer.writeStringValue("bootDebugging", this.bootDebugging);
        writer.writeStringValue("bootManagerSecurityVersion", this.bootManagerSecurityVersion);
        writer.writeStringValue("bootManagerVersion", this.bootManagerVersion);
        writer.writeStringValue("bootRevisionListInfo", this.bootRevisionListInfo);
        writer.writeStringValue("codeIntegrity", this.codeIntegrity);
        writer.writeStringValue("codeIntegrityCheckVersion", this.codeIntegrityCheckVersion);
        writer.writeStringValue("codeIntegrityPolicy", this.codeIntegrityPolicy);
        writer.writeStringValue("contentNamespaceUrl", this.contentNamespaceUrl);
        writer.writeStringValue("contentVersion", this.contentVersion);
        writer.writeStringValue("dataExcutionPolicy", this.dataExcutionPolicy);
        writer.writeStringValue("deviceHealthAttestationStatus", this.deviceHealthAttestationStatus);
        writer.writeStringValue("earlyLaunchAntiMalwareDriverProtection", this.earlyLaunchAntiMalwareDriverProtection);
        writer.writeStringValue("healthAttestationSupportedStatus", this.healthAttestationSupportedStatus);
        writer.writeStringValue("healthStatusMismatchInfo", this.healthStatusMismatchInfo);
        writer.writeDateValue("issuedDateTime", this.issuedDateTime);
        writer.writeStringValue("lastUpdateDateTime", this.lastUpdateDateTime);
        writer.writeStringValue("operatingSystemKernelDebugging", this.operatingSystemKernelDebugging);
        writer.writeStringValue("operatingSystemRevListInfo", this.operatingSystemRevListInfo);
        writer.writeStringValue("pcr0", this.pcr0);
        writer.writeStringValue("pcrHashAlgorithm", this.pcrHashAlgorithm);
        writer.writeNumberValue("resetCount", this.resetCount);
        writer.writeNumberValue("restartCount", this.restartCount);
        writer.writeStringValue("safeMode", this.safeMode);
        writer.writeStringValue("secureBoot", this.secureBoot);
        writer.writeStringValue("secureBootConfigurationPolicyFingerPrint", this.secureBootConfigurationPolicyFingerPrint);
        writer.writeStringValue("testSigning", this.testSigning);
        writer.writeStringValue("tpmVersion", this.tpmVersion);
        writer.writeStringValue("virtualSecureMode", this.virtualSecureMode);
        writer.writeStringValue("windowsPE", this.windowsPE);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the testSigning property value. When test signing is allowed, the device does not enforce signature validation during boot
     * @returns a string
     */
    public get testSigning() {
        return this._testSigning;
    };
    /**
     * Sets the testSigning property value. When test signing is allowed, the device does not enforce signature validation during boot
     * @param value Value to set for the testSigning property.
     */
    public set testSigning(value: string | undefined) {
        this._testSigning = value;
    };
    /**
     * Gets the tpmVersion property value. The security version number of the Boot Application
     * @returns a string
     */
    public get tpmVersion() {
        return this._tpmVersion;
    };
    /**
     * Sets the tpmVersion property value. The security version number of the Boot Application
     * @param value Value to set for the tpmVersion property.
     */
    public set tpmVersion(value: string | undefined) {
        this._tpmVersion = value;
    };
    /**
     * Gets the virtualSecureMode property value. VSM is a container that protects high value assets from a compromised kernel
     * @returns a string
     */
    public get virtualSecureMode() {
        return this._virtualSecureMode;
    };
    /**
     * Sets the virtualSecureMode property value. VSM is a container that protects high value assets from a compromised kernel
     * @param value Value to set for the virtualSecureMode property.
     */
    public set virtualSecureMode(value: string | undefined) {
        this._virtualSecureMode = value;
    };
    /**
     * Gets the windowsPE property value. Operating system running with limited services that is used to prepare a computer for Windows
     * @returns a string
     */
    public get windowsPE() {
        return this._windowsPE;
    };
    /**
     * Sets the windowsPE property value. Operating system running with limited services that is used to prepare a computer for Windows
     * @param value Value to set for the windowsPE property.
     */
    public set windowsPE(value: string | undefined) {
        this._windowsPE = value;
    };
}
