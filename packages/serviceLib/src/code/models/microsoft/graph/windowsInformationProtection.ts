import {ManagedAppPolicy, TargetedManagedAppPolicyAssignment, WindowsInformationProtectionApp, WindowsInformationProtectionAppLockerFile, WindowsInformationProtectionDataRecoveryCertificate, WindowsInformationProtectionEnforcementLevel, WindowsInformationProtectionIPRangeCollection, WindowsInformationProtectionProxiedDomainCollection, WindowsInformationProtectionResourceCollection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtection extends ManagedAppPolicy implements Parsable {
    /** Navigation property to list of security groups targeted for policy.  */
    private _assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Specifies whether to allow Azure RMS encryption for WIP  */
    private _azureRightsManagementServicesAllowed?: boolean | undefined;
    /** Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)  */
    private _dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate | undefined;
    /** WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.  */
    private _enforcementLevel?: WindowsInformationProtectionEnforcementLevel | undefined;
    /** Primary enterprise domain  */
    private _enterpriseDomain?: string | undefined;
    /** This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies  */
    private _enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to  */
    private _enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[] | undefined;
    /** Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false  */
    private _enterpriseIPRangesAreAuthoritative?: boolean | undefined;
    /** This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to  */
    private _enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** List of enterprise domains to be protected  */
    private _enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy  */
    private _enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[] | undefined;
    /** This is a list of proxy servers. Any server not on this list is considered non-enterprise  */
    private _enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false  */
    private _enterpriseProxyServersAreAuthoritative?: boolean | undefined;
    /** Another way to input exempt apps through xml files  */
    private _exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /** Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.  */
    private _exemptApps?: WindowsInformationProtectionApp[] | undefined;
    /** Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app  */
    private _iconsVisible?: boolean | undefined;
    /** This switch is for the Windows Search Indexer, to allow or disallow indexing of items  */
    private _indexingEncryptedStoresOrItemsBlocked?: boolean | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not.  */
    private _isAssigned?: boolean | undefined;
    /** List of domain names that can used for work or personal resource  */
    private _neutralDomainResources?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Another way to input protected apps through xml files  */
    private _protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /** Protected applications can access enterprise data and the data handled by those applications are protected with encryption  */
    private _protectedApps?: WindowsInformationProtectionApp[] | undefined;
    /** Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured  */
    private _protectionUnderLockConfigRequired?: boolean | undefined;
    /** This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.  */
    private _revokeOnUnenrollDisabled?: boolean | undefined;
    /** TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access  */
    private _rightsManagementServicesTemplateId?: string | undefined;
    /** Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary  */
    private _smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Instantiates a new windowsInformationProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignments property value. Navigation property to list of security groups targeted for policy.
     * @returns a targetedManagedAppPolicyAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the azureRightsManagementServicesAllowed property value. Specifies whether to allow Azure RMS encryption for WIP
     * @returns a boolean
     */
    public get azureRightsManagementServicesAllowed() {
        return this._azureRightsManagementServicesAllowed;
    };
    /**
     * Gets the dataRecoveryCertificate property value. Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
     * @returns a windowsInformationProtectionDataRecoveryCertificate
     */
    public get dataRecoveryCertificate() {
        return this._dataRecoveryCertificate;
    };
    /**
     * Gets the enforcementLevel property value. WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
     * @returns a windowsInformationProtectionEnforcementLevel
     */
    public get enforcementLevel() {
        return this._enforcementLevel;
    };
    /**
     * Gets the enterpriseDomain property value. Primary enterprise domain
     * @returns a string
     */
    public get enterpriseDomain() {
        return this._enterpriseDomain;
    };
    /**
     * Gets the enterpriseInternalProxyServers property value. This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     * @returns a windowsInformationProtectionResourceCollection
     */
    public get enterpriseInternalProxyServers() {
        return this._enterpriseInternalProxyServers;
    };
    /**
     * Gets the enterpriseIPRanges property value. Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
     * @returns a windowsInformationProtectionIPRangeCollection
     */
    public get enterpriseIPRanges() {
        return this._enterpriseIPRanges;
    };
    /**
     * Gets the enterpriseIPRangesAreAuthoritative property value. Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
     * @returns a boolean
     */
    public get enterpriseIPRangesAreAuthoritative() {
        return this._enterpriseIPRangesAreAuthoritative;
    };
    /**
     * Gets the enterpriseNetworkDomainNames property value. This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
     * @returns a windowsInformationProtectionResourceCollection
     */
    public get enterpriseNetworkDomainNames() {
        return this._enterpriseNetworkDomainNames;
    };
    /**
     * Gets the enterpriseProtectedDomainNames property value. List of enterprise domains to be protected
     * @returns a windowsInformationProtectionResourceCollection
     */
    public get enterpriseProtectedDomainNames() {
        return this._enterpriseProtectedDomainNames;
    };
    /**
     * Gets the enterpriseProxiedDomains property value. Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
     * @returns a windowsInformationProtectionProxiedDomainCollection
     */
    public get enterpriseProxiedDomains() {
        return this._enterpriseProxiedDomains;
    };
    /**
     * Gets the enterpriseProxyServers property value. This is a list of proxy servers. Any server not on this list is considered non-enterprise
     * @returns a windowsInformationProtectionResourceCollection
     */
    public get enterpriseProxyServers() {
        return this._enterpriseProxyServers;
    };
    /**
     * Gets the enterpriseProxyServersAreAuthoritative property value. Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
     * @returns a boolean
     */
    public get enterpriseProxyServersAreAuthoritative() {
        return this._enterpriseProxyServersAreAuthoritative;
    };
    /**
     * Gets the exemptAppLockerFiles property value. Another way to input exempt apps through xml files
     * @returns a windowsInformationProtectionAppLockerFile
     */
    public get exemptAppLockerFiles() {
        return this._exemptAppLockerFiles;
    };
    /**
     * Gets the exemptApps property value. Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
     * @returns a windowsInformationProtectionApp
     */
    public get exemptApps() {
        return this._exemptApps;
    };
    /**
     * Gets the iconsVisible property value. Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
     * @returns a boolean
     */
    public get iconsVisible() {
        return this._iconsVisible;
    };
    /**
     * Gets the indexingEncryptedStoresOrItemsBlocked property value. This switch is for the Windows Search Indexer, to allow or disallow indexing of items
     * @returns a boolean
     */
    public get indexingEncryptedStoresOrItemsBlocked() {
        return this._indexingEncryptedStoresOrItemsBlocked;
    };
    /**
     * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @returns a boolean
     */
    public get isAssigned() {
        return this._isAssigned;
    };
    /**
     * Gets the neutralDomainResources property value. List of domain names that can used for work or personal resource
     * @returns a windowsInformationProtectionResourceCollection
     */
    public get neutralDomainResources() {
        return this._neutralDomainResources;
    };
    /**
     * Gets the protectedAppLockerFiles property value. Another way to input protected apps through xml files
     * @returns a windowsInformationProtectionAppLockerFile
     */
    public get protectedAppLockerFiles() {
        return this._protectedAppLockerFiles;
    };
    /**
     * Gets the protectedApps property value. Protected applications can access enterprise data and the data handled by those applications are protected with encryption
     * @returns a windowsInformationProtectionApp
     */
    public get protectedApps() {
        return this._protectedApps;
    };
    /**
     * Gets the protectionUnderLockConfigRequired property value. Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
     * @returns a boolean
     */
    public get protectionUnderLockConfigRequired() {
        return this._protectionUnderLockConfigRequired;
    };
    /**
     * Gets the revokeOnUnenrollDisabled property value. This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     * @returns a boolean
     */
    public get revokeOnUnenrollDisabled() {
        return this._revokeOnUnenrollDisabled;
    };
    /**
     * Gets the rightsManagementServicesTemplateId property value. TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
     * @returns a string
     */
    public get rightsManagementServicesTemplateId() {
        return this._rightsManagementServicesTemplateId;
    };
    /**
     * Gets the smbAutoEncryptedFileExtensions property value. Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
     * @returns a windowsInformationProtectionResourceCollection
     */
    public get smbAutoEncryptedFileExtensions() {
        return this._smbAutoEncryptedFileExtensions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignments", (o, n) => { (o as unknown as WindowsInformationProtection).assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(TargetedManagedAppPolicyAssignment); }],
            ["azureRightsManagementServicesAllowed", (o, n) => { (o as unknown as WindowsInformationProtection).azureRightsManagementServicesAllowed = n.getBooleanValue(); }],
            ["dataRecoveryCertificate", (o, n) => { (o as unknown as WindowsInformationProtection).dataRecoveryCertificate = n.getObjectValue<WindowsInformationProtectionDataRecoveryCertificate>(WindowsInformationProtectionDataRecoveryCertificate); }],
            ["enforcementLevel", (o, n) => { (o as unknown as WindowsInformationProtection).enforcementLevel = n.getEnumValue<WindowsInformationProtectionEnforcementLevel>(WindowsInformationProtectionEnforcementLevel); }],
            ["enterpriseDomain", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseDomain = n.getStringValue(); }],
            ["enterpriseInternalProxyServers", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseInternalProxyServers = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(WindowsInformationProtectionResourceCollection); }],
            ["enterpriseIPRanges", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseIPRanges = n.getCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollection>(WindowsInformationProtectionIPRangeCollection); }],
            ["enterpriseIPRangesAreAuthoritative", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseIPRangesAreAuthoritative = n.getBooleanValue(); }],
            ["enterpriseNetworkDomainNames", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseNetworkDomainNames = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(WindowsInformationProtectionResourceCollection); }],
            ["enterpriseProtectedDomainNames", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseProtectedDomainNames = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(WindowsInformationProtectionResourceCollection); }],
            ["enterpriseProxiedDomains", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseProxiedDomains = n.getCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollection>(WindowsInformationProtectionProxiedDomainCollection); }],
            ["enterpriseProxyServers", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseProxyServers = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(WindowsInformationProtectionResourceCollection); }],
            ["enterpriseProxyServersAreAuthoritative", (o, n) => { (o as unknown as WindowsInformationProtection).enterpriseProxyServersAreAuthoritative = n.getBooleanValue(); }],
            ["exemptAppLockerFiles", (o, n) => { (o as unknown as WindowsInformationProtection).exemptAppLockerFiles = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>(WindowsInformationProtectionAppLockerFile); }],
            ["exemptApps", (o, n) => { (o as unknown as WindowsInformationProtection).exemptApps = n.getCollectionOfObjectValues<WindowsInformationProtectionApp>(WindowsInformationProtectionApp); }],
            ["iconsVisible", (o, n) => { (o as unknown as WindowsInformationProtection).iconsVisible = n.getBooleanValue(); }],
            ["indexingEncryptedStoresOrItemsBlocked", (o, n) => { (o as unknown as WindowsInformationProtection).indexingEncryptedStoresOrItemsBlocked = n.getBooleanValue(); }],
            ["isAssigned", (o, n) => { (o as unknown as WindowsInformationProtection).isAssigned = n.getBooleanValue(); }],
            ["neutralDomainResources", (o, n) => { (o as unknown as WindowsInformationProtection).neutralDomainResources = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(WindowsInformationProtectionResourceCollection); }],
            ["protectedAppLockerFiles", (o, n) => { (o as unknown as WindowsInformationProtection).protectedAppLockerFiles = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>(WindowsInformationProtectionAppLockerFile); }],
            ["protectedApps", (o, n) => { (o as unknown as WindowsInformationProtection).protectedApps = n.getCollectionOfObjectValues<WindowsInformationProtectionApp>(WindowsInformationProtectionApp); }],
            ["protectionUnderLockConfigRequired", (o, n) => { (o as unknown as WindowsInformationProtection).protectionUnderLockConfigRequired = n.getBooleanValue(); }],
            ["revokeOnUnenrollDisabled", (o, n) => { (o as unknown as WindowsInformationProtection).revokeOnUnenrollDisabled = n.getBooleanValue(); }],
            ["rightsManagementServicesTemplateId", (o, n) => { (o as unknown as WindowsInformationProtection).rightsManagementServicesTemplateId = n.getStringValue(); }],
            ["smbAutoEncryptedFileExtensions", (o, n) => { (o as unknown as WindowsInformationProtection).smbAutoEncryptedFileExtensions = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(WindowsInformationProtectionResourceCollection); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", this.assignments);
        writer.writeBooleanValue("azureRightsManagementServicesAllowed", this.azureRightsManagementServicesAllowed);
        writer.writeObjectValue<WindowsInformationProtectionDataRecoveryCertificate>("dataRecoveryCertificate", this.dataRecoveryCertificate);
        writer.writeEnumValue<WindowsInformationProtectionEnforcementLevel>("enforcementLevel", this.enforcementLevel);
        writer.writeStringValue("enterpriseDomain", this.enterpriseDomain);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseInternalProxyServers", this.enterpriseInternalProxyServers);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollection>("enterpriseIPRanges", this.enterpriseIPRanges);
        writer.writeBooleanValue("enterpriseIPRangesAreAuthoritative", this.enterpriseIPRangesAreAuthoritative);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseNetworkDomainNames", this.enterpriseNetworkDomainNames);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseProtectedDomainNames", this.enterpriseProtectedDomainNames);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollection>("enterpriseProxiedDomains", this.enterpriseProxiedDomains);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseProxyServers", this.enterpriseProxyServers);
        writer.writeBooleanValue("enterpriseProxyServersAreAuthoritative", this.enterpriseProxyServersAreAuthoritative);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>("exemptAppLockerFiles", this.exemptAppLockerFiles);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionApp>("exemptApps", this.exemptApps);
        writer.writeBooleanValue("iconsVisible", this.iconsVisible);
        writer.writeBooleanValue("indexingEncryptedStoresOrItemsBlocked", this.indexingEncryptedStoresOrItemsBlocked);
        writer.writeBooleanValue("isAssigned", this.isAssigned);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("neutralDomainResources", this.neutralDomainResources);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>("protectedAppLockerFiles", this.protectedAppLockerFiles);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionApp>("protectedApps", this.protectedApps);
        writer.writeBooleanValue("protectionUnderLockConfigRequired", this.protectionUnderLockConfigRequired);
        writer.writeBooleanValue("revokeOnUnenrollDisabled", this.revokeOnUnenrollDisabled);
        writer.writeStringValue("rightsManagementServicesTemplateId", this.rightsManagementServicesTemplateId);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("smbAutoEncryptedFileExtensions", this.smbAutoEncryptedFileExtensions);
    };
    /**
     * Sets the assignments property value. Navigation property to list of security groups targeted for policy.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TargetedManagedAppPolicyAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the azureRightsManagementServicesAllowed property value. Specifies whether to allow Azure RMS encryption for WIP
     * @param value Value to set for the azureRightsManagementServicesAllowed property.
     */
    public set azureRightsManagementServicesAllowed(value: boolean | undefined) {
        this._azureRightsManagementServicesAllowed = value;
    };
    /**
     * Sets the dataRecoveryCertificate property value. Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
     * @param value Value to set for the dataRecoveryCertificate property.
     */
    public set dataRecoveryCertificate(value: WindowsInformationProtectionDataRecoveryCertificate | undefined) {
        this._dataRecoveryCertificate = value;
    };
    /**
     * Sets the enforcementLevel property value. WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
     * @param value Value to set for the enforcementLevel property.
     */
    public set enforcementLevel(value: WindowsInformationProtectionEnforcementLevel | undefined) {
        this._enforcementLevel = value;
    };
    /**
     * Sets the enterpriseDomain property value. Primary enterprise domain
     * @param value Value to set for the enterpriseDomain property.
     */
    public set enterpriseDomain(value: string | undefined) {
        this._enterpriseDomain = value;
    };
    /**
     * Sets the enterpriseInternalProxyServers property value. This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     * @param value Value to set for the enterpriseInternalProxyServers property.
     */
    public set enterpriseInternalProxyServers(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        this._enterpriseInternalProxyServers = value;
    };
    /**
     * Sets the enterpriseIPRanges property value. Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
     * @param value Value to set for the enterpriseIPRanges property.
     */
    public set enterpriseIPRanges(value: WindowsInformationProtectionIPRangeCollection[] | undefined) {
        this._enterpriseIPRanges = value;
    };
    /**
     * Sets the enterpriseIPRangesAreAuthoritative property value. Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
     * @param value Value to set for the enterpriseIPRangesAreAuthoritative property.
     */
    public set enterpriseIPRangesAreAuthoritative(value: boolean | undefined) {
        this._enterpriseIPRangesAreAuthoritative = value;
    };
    /**
     * Sets the enterpriseNetworkDomainNames property value. This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
     * @param value Value to set for the enterpriseNetworkDomainNames property.
     */
    public set enterpriseNetworkDomainNames(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        this._enterpriseNetworkDomainNames = value;
    };
    /**
     * Sets the enterpriseProtectedDomainNames property value. List of enterprise domains to be protected
     * @param value Value to set for the enterpriseProtectedDomainNames property.
     */
    public set enterpriseProtectedDomainNames(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        this._enterpriseProtectedDomainNames = value;
    };
    /**
     * Sets the enterpriseProxiedDomains property value. Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
     * @param value Value to set for the enterpriseProxiedDomains property.
     */
    public set enterpriseProxiedDomains(value: WindowsInformationProtectionProxiedDomainCollection[] | undefined) {
        this._enterpriseProxiedDomains = value;
    };
    /**
     * Sets the enterpriseProxyServers property value. This is a list of proxy servers. Any server not on this list is considered non-enterprise
     * @param value Value to set for the enterpriseProxyServers property.
     */
    public set enterpriseProxyServers(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        this._enterpriseProxyServers = value;
    };
    /**
     * Sets the enterpriseProxyServersAreAuthoritative property value. Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
     * @param value Value to set for the enterpriseProxyServersAreAuthoritative property.
     */
    public set enterpriseProxyServersAreAuthoritative(value: boolean | undefined) {
        this._enterpriseProxyServersAreAuthoritative = value;
    };
    /**
     * Sets the exemptAppLockerFiles property value. Another way to input exempt apps through xml files
     * @param value Value to set for the exemptAppLockerFiles property.
     */
    public set exemptAppLockerFiles(value: WindowsInformationProtectionAppLockerFile[] | undefined) {
        this._exemptAppLockerFiles = value;
    };
    /**
     * Sets the exemptApps property value. Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
     * @param value Value to set for the exemptApps property.
     */
    public set exemptApps(value: WindowsInformationProtectionApp[] | undefined) {
        this._exemptApps = value;
    };
    /**
     * Sets the iconsVisible property value. Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
     * @param value Value to set for the iconsVisible property.
     */
    public set iconsVisible(value: boolean | undefined) {
        this._iconsVisible = value;
    };
    /**
     * Sets the indexingEncryptedStoresOrItemsBlocked property value. This switch is for the Windows Search Indexer, to allow or disallow indexing of items
     * @param value Value to set for the indexingEncryptedStoresOrItemsBlocked property.
     */
    public set indexingEncryptedStoresOrItemsBlocked(value: boolean | undefined) {
        this._indexingEncryptedStoresOrItemsBlocked = value;
    };
    /**
     * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @param value Value to set for the isAssigned property.
     */
    public set isAssigned(value: boolean | undefined) {
        this._isAssigned = value;
    };
    /**
     * Sets the neutralDomainResources property value. List of domain names that can used for work or personal resource
     * @param value Value to set for the neutralDomainResources property.
     */
    public set neutralDomainResources(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        this._neutralDomainResources = value;
    };
    /**
     * Sets the protectedAppLockerFiles property value. Another way to input protected apps through xml files
     * @param value Value to set for the protectedAppLockerFiles property.
     */
    public set protectedAppLockerFiles(value: WindowsInformationProtectionAppLockerFile[] | undefined) {
        this._protectedAppLockerFiles = value;
    };
    /**
     * Sets the protectedApps property value. Protected applications can access enterprise data and the data handled by those applications are protected with encryption
     * @param value Value to set for the protectedApps property.
     */
    public set protectedApps(value: WindowsInformationProtectionApp[] | undefined) {
        this._protectedApps = value;
    };
    /**
     * Sets the protectionUnderLockConfigRequired property value. Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
     * @param value Value to set for the protectionUnderLockConfigRequired property.
     */
    public set protectionUnderLockConfigRequired(value: boolean | undefined) {
        this._protectionUnderLockConfigRequired = value;
    };
    /**
     * Sets the revokeOnUnenrollDisabled property value. This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     * @param value Value to set for the revokeOnUnenrollDisabled property.
     */
    public set revokeOnUnenrollDisabled(value: boolean | undefined) {
        this._revokeOnUnenrollDisabled = value;
    };
    /**
     * Sets the rightsManagementServicesTemplateId property value. TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
     * @param value Value to set for the rightsManagementServicesTemplateId property.
     */
    public set rightsManagementServicesTemplateId(value: string | undefined) {
        this._rightsManagementServicesTemplateId = value;
    };
    /**
     * Sets the smbAutoEncryptedFileExtensions property value. Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
     * @param value Value to set for the smbAutoEncryptedFileExtensions property.
     */
    public set smbAutoEncryptedFileExtensions(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        this._smbAutoEncryptedFileExtensions = value;
    };
}
