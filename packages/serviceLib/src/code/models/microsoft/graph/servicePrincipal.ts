import {AddIn, AppRole, AppRoleAssignment, ClaimsMappingPolicy, DelegatedPermissionClassification, DirectoryObject, Endpoint, HomeRealmDiscoveryPolicy, InformationalUrl, KeyCredential, OAuth2PermissionGrant, PasswordCredential, PermissionScope, SamlSingleSignOnSettings, TokenIssuancePolicy, TokenLifetimePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePrincipal extends DirectoryObject implements Parsable {
    /** true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in).  */
    private _accountEnabled?: boolean | undefined;
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.  */
    private _addIns?: AddIn[] | undefined;
    /** Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).  */
    private _alternativeNames?: string[] | undefined;
    /** The description exposed by the associated application.  */
    private _appDescription?: string | undefined;
    /** The display name exposed by the associated application.  */
    private _appDisplayName?: string | undefined;
    /** The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).  */
    private _appId?: string | undefined;
    /** Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).  */
    private _applicationTemplateId?: string | undefined;
    /** Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications. Supports $filter (eq, ne, NOT, ge, le).  */
    private _appOwnerOrganizationId?: string | undefined;
    /** App role assignments for this app or service, granted to users, groups, and other service principals. Supports $expand.  */
    private _appRoleAssignedTo?: AppRoleAssignment[] | undefined;
    /** Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).  */
    private _appRoleAssignmentRequired?: boolean | undefined;
    /** App role assignment for another app or service, granted to this service principal. Supports $expand.  */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.  */
    private _appRoles?: AppRole[] | undefined;
    /** The claimsMappingPolicies assigned to this service principal. Supports $expand.  */
    private _claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** Directory objects created by this service principal. Read-only. Nullable.  */
    private _createdObjects?: DirectoryObject[] | undefined;
    /** The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.  */
    private _delegatedPermissionClassifications?: DelegatedPermissionClassification[] | undefined;
    /** Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.  */
    private _description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).  */
    private _disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.  */
    private _displayName?: string | undefined;
    /** Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.  */
    private _endpoints?: Endpoint[] | undefined;
    /** Home page or landing page of the application.  */
    private _homepage?: string | undefined;
    /** The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.  */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).  */
    private _info?: InformationalUrl | undefined;
    /** The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).  */
    private _keyCredentials?: KeyCredential[] | undefined;
    /** Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.  */
    private _loginUrl?: string | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.  */
    private _logoutUrl?: string | undefined;
    /** Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.  */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.  */
    private _notes?: string | undefined;
    /** Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.  */
    private _notificationEmailAddresses?: string[] | undefined;
    /** Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.  */
    private _oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.  */
    private _oauth2PermissionScopes?: PermissionScope[] | undefined;
    /** Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.  */
    private _ownedObjects?: DirectoryObject[] | undefined;
    /** Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.  */
    private _owners?: DirectoryObject[] | undefined;
    /** The collection of password credentials associated with the application. Not nullable.  */
    private _passwordCredentials?: PasswordCredential[] | undefined;
    /** Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.  */
    private _preferredSingleSignOnMode?: string | undefined;
    /** Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.  */
    private _preferredTokenSigningKeyThumbprint?: string | undefined;
    /** The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.  */
    private _replyUrls?: string[] | undefined;
    /** The collection for settings related to saml single sign-on.  */
    private _samlSingleSignOnSettings?: SamlSingleSignOnSettings | undefined;
    /** Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).  */
    private _servicePrincipalNames?: string[] | undefined;
    /** Identifies whether the service principal represents an application, a managed identity, or a legacy application. This is set by Azure AD internally. The servicePrincipalType property can be set to three different values: __Application - A service principal that represents an application or service. The appId property identifies the associated app registration, and matches the appId of an application, possibly from a different tenant. If the associated app registration is missing, tokens are not issued for the service principal.__ManagedIdentity - A service principal that represents a managed identity. Service principals representing managed identities can be granted access and permissions, but cannot be updated or modified directly.__Legacy - A service principal that represents an app created before app registrations, or through legacy experiences. Legacy service principal can have credentials, service principal names, reply URLs, and other properties which are editable by an authorized user, but does not have an associated app registration. The appId value does not associate the service principal with an app registration. The service principal can only be used in the tenant where it was created.__SocialIdp - For internal use.  */
    private _servicePrincipalType?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.  */
    private _signInAudience?: string | undefined;
    /** Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).  */
    private _tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.  */
    private _tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies assigned to this service principal.  */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies assigned to this service principal.  */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new servicePrincipal and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     * @returns a addIn
     */
    public get addIns() {
        return this._addIns;
    };
    /**
     * Gets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get alternativeNames() {
        return this._alternativeNames;
    };
    /**
     * Gets the appDescription property value. The description exposed by the associated application.
     * @returns a string
     */
    public get appDescription() {
        return this._appDescription;
    };
    /**
     * Gets the appDisplayName property value. The display name exposed by the associated application.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Gets the appId property value. The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Gets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     * @returns a string
     */
    public get applicationTemplateId() {
        return this._applicationTemplateId;
    };
    /**
     * Gets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications. Supports $filter (eq, ne, NOT, ge, le).
     * @returns a string
     */
    public get appOwnerOrganizationId() {
        return this._appOwnerOrganizationId;
    };
    /**
     * Gets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals. Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignedTo() {
        return this._appRoleAssignedTo;
    };
    /**
     * Gets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     * @returns a boolean
     */
    public get appRoleAssignmentRequired() {
        return this._appRoleAssignmentRequired;
    };
    /**
     * Gets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Gets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     * @returns a appRole
     */
    public get appRoles() {
        return this._appRoles;
    };
    /**
     * Gets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @returns a claimsMappingPolicy
     */
    public get claimsMappingPolicies() {
        return this._claimsMappingPolicies;
    };
    /**
     * Gets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
     * @returns a directoryObject
     */
    public get createdObjects() {
        return this._createdObjects;
    };
    /**
     * Gets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
     * @returns a delegatedPermissionClassification
     */
    public get delegatedPermissionClassifications() {
        return this._delegatedPermissionClassifications;
    };
    /**
     * Gets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     * @returns a string
     */
    public get disabledByMicrosoftStatus() {
        return this._disabledByMicrosoftStatus;
    };
    /**
     * Gets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
     * @returns a endpoint
     */
    public get endpoints() {
        return this._endpoints;
    };
    /**
     * Gets the homepage property value. Home page or landing page of the application.
     * @returns a string
     */
    public get homepage() {
        return this._homepage;
    };
    /**
     * Gets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
     * @returns a homeRealmDiscoveryPolicy
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Gets the info property value. Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @returns a informationalUrl
     */
    public get info() {
        return this._info;
    };
    /**
     * Gets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a keyCredential
     */
    public get keyCredentials() {
        return this._keyCredentials;
    };
    /**
     * Gets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     * @returns a string
     */
    public get loginUrl() {
        return this._loginUrl;
    };
    /**
     * Gets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     * @returns a string
     */
    public get logoutUrl() {
        return this._logoutUrl;
    };
    /**
     * Gets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Gets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Gets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     * @returns a string
     */
    public get notificationEmailAddresses() {
        return this._notificationEmailAddresses;
    };
    /**
     * Gets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     * @returns a oAuth2PermissionGrant
     */
    public get oauth2PermissionGrants() {
        return this._oauth2PermissionGrants;
    };
    /**
     * Gets the oauth2PermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
     * @returns a permissionScope
     */
    public get oauth2PermissionScopes() {
        return this._oauth2PermissionScopes;
    };
    /**
     * Gets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get ownedObjects() {
        return this._ownedObjects;
    };
    /**
     * Gets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Gets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
     * @returns a passwordCredential
     */
    public get passwordCredentials() {
        return this._passwordCredentials;
    };
    /**
     * Gets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     * @returns a string
     */
    public get preferredSingleSignOnMode() {
        return this._preferredSingleSignOnMode;
    };
    /**
     * Gets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
     * @returns a string
     */
    public get preferredTokenSigningKeyThumbprint() {
        return this._preferredTokenSigningKeyThumbprint;
    };
    /**
     * Gets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     * @returns a string
     */
    public get replyUrls() {
        return this._replyUrls;
    };
    /**
     * Gets the samlSingleSignOnSettings property value. The collection for settings related to saml single sign-on.
     * @returns a samlSingleSignOnSettings
     */
    public get samlSingleSignOnSettings() {
        return this._samlSingleSignOnSettings;
    };
    /**
     * Gets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get servicePrincipalNames() {
        return this._servicePrincipalNames;
    };
    /**
     * Gets the servicePrincipalType property value. Identifies whether the service principal represents an application, a managed identity, or a legacy application. This is set by Azure AD internally. The servicePrincipalType property can be set to three different values: __Application - A service principal that represents an application or service. The appId property identifies the associated app registration, and matches the appId of an application, possibly from a different tenant. If the associated app registration is missing, tokens are not issued for the service principal.__ManagedIdentity - A service principal that represents a managed identity. Service principals representing managed identities can be granted access and permissions, but cannot be updated or modified directly.__Legacy - A service principal that represents an app created before app registrations, or through legacy experiences. Legacy service principal can have credentials, service principal names, reply URLs, and other properties which are editable by an authorized user, but does not have an associated app registration. The appId value does not associate the service principal with an app registration. The service principal can only be used in the tenant where it was created.__SocialIdp - For internal use.
     * @returns a string
     */
    public get servicePrincipalType() {
        return this._servicePrincipalType;
    };
    /**
     * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     * @returns a string
     */
    public get signInAudience() {
        return this._signInAudience;
    };
    /**
     * Gets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @returns a string
     */
    public get tokenEncryptionKeyId() {
        return this._tokenEncryptionKeyId;
    };
    /**
     * Gets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal.
     * @returns a tokenIssuancePolicy
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal.
     * @returns a tokenLifetimePolicy
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * Gets the transitiveMemberOf property value. 
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accountEnabled", (o, n) => { (o as unknown as ServicePrincipal).accountEnabled = n.getBooleanValue(); }],
            ["addIns", (o, n) => { (o as unknown as ServicePrincipal).addIns = n.getCollectionOfObjectValues<AddIn>(AddIn); }],
            ["alternativeNames", (o, n) => { (o as unknown as ServicePrincipal).alternativeNames = n.getCollectionOfPrimitiveValues<string>(); }],
            ["appDescription", (o, n) => { (o as unknown as ServicePrincipal).appDescription = n.getStringValue(); }],
            ["appDisplayName", (o, n) => { (o as unknown as ServicePrincipal).appDisplayName = n.getStringValue(); }],
            ["appId", (o, n) => { (o as unknown as ServicePrincipal).appId = n.getStringValue(); }],
            ["applicationTemplateId", (o, n) => { (o as unknown as ServicePrincipal).applicationTemplateId = n.getStringValue(); }],
            ["appOwnerOrganizationId", (o, n) => { (o as unknown as ServicePrincipal).appOwnerOrganizationId = n.getStringValue(); }],
            ["appRoleAssignedTo", (o, n) => { (o as unknown as ServicePrincipal).appRoleAssignedTo = n.getCollectionOfObjectValues<AppRoleAssignment>(AppRoleAssignment); }],
            ["appRoleAssignmentRequired", (o, n) => { (o as unknown as ServicePrincipal).appRoleAssignmentRequired = n.getBooleanValue(); }],
            ["appRoleAssignments", (o, n) => { (o as unknown as ServicePrincipal).appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(AppRoleAssignment); }],
            ["appRoles", (o, n) => { (o as unknown as ServicePrincipal).appRoles = n.getCollectionOfObjectValues<AppRole>(AppRole); }],
            ["claimsMappingPolicies", (o, n) => { (o as unknown as ServicePrincipal).claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicy>(ClaimsMappingPolicy); }],
            ["createdObjects", (o, n) => { (o as unknown as ServicePrincipal).createdObjects = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["delegatedPermissionClassifications", (o, n) => { (o as unknown as ServicePrincipal).delegatedPermissionClassifications = n.getCollectionOfObjectValues<DelegatedPermissionClassification>(DelegatedPermissionClassification); }],
            ["description", (o, n) => { (o as unknown as ServicePrincipal).description = n.getStringValue(); }],
            ["disabledByMicrosoftStatus", (o, n) => { (o as unknown as ServicePrincipal).disabledByMicrosoftStatus = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ServicePrincipal).displayName = n.getStringValue(); }],
            ["endpoints", (o, n) => { (o as unknown as ServicePrincipal).endpoints = n.getCollectionOfObjectValues<Endpoint>(Endpoint); }],
            ["homepage", (o, n) => { (o as unknown as ServicePrincipal).homepage = n.getStringValue(); }],
            ["homeRealmDiscoveryPolicies", (o, n) => { (o as unknown as ServicePrincipal).homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(HomeRealmDiscoveryPolicy); }],
            ["info", (o, n) => { (o as unknown as ServicePrincipal).info = n.getObjectValue<InformationalUrl>(InformationalUrl); }],
            ["keyCredentials", (o, n) => { (o as unknown as ServicePrincipal).keyCredentials = n.getCollectionOfObjectValues<KeyCredential>(KeyCredential); }],
            ["loginUrl", (o, n) => { (o as unknown as ServicePrincipal).loginUrl = n.getStringValue(); }],
            ["logoutUrl", (o, n) => { (o as unknown as ServicePrincipal).logoutUrl = n.getStringValue(); }],
            ["memberOf", (o, n) => { (o as unknown as ServicePrincipal).memberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["notes", (o, n) => { (o as unknown as ServicePrincipal).notes = n.getStringValue(); }],
            ["notificationEmailAddresses", (o, n) => { (o as unknown as ServicePrincipal).notificationEmailAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["oauth2PermissionGrants", (o, n) => { (o as unknown as ServicePrincipal).oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(OAuth2PermissionGrant); }],
            ["oauth2PermissionScopes", (o, n) => { (o as unknown as ServicePrincipal).oauth2PermissionScopes = n.getCollectionOfObjectValues<PermissionScope>(PermissionScope); }],
            ["ownedObjects", (o, n) => { (o as unknown as ServicePrincipal).ownedObjects = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["owners", (o, n) => { (o as unknown as ServicePrincipal).owners = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["passwordCredentials", (o, n) => { (o as unknown as ServicePrincipal).passwordCredentials = n.getCollectionOfObjectValues<PasswordCredential>(PasswordCredential); }],
            ["preferredSingleSignOnMode", (o, n) => { (o as unknown as ServicePrincipal).preferredSingleSignOnMode = n.getStringValue(); }],
            ["preferredTokenSigningKeyThumbprint", (o, n) => { (o as unknown as ServicePrincipal).preferredTokenSigningKeyThumbprint = n.getStringValue(); }],
            ["replyUrls", (o, n) => { (o as unknown as ServicePrincipal).replyUrls = n.getCollectionOfPrimitiveValues<string>(); }],
            ["samlSingleSignOnSettings", (o, n) => { (o as unknown as ServicePrincipal).samlSingleSignOnSettings = n.getObjectValue<SamlSingleSignOnSettings>(SamlSingleSignOnSettings); }],
            ["servicePrincipalNames", (o, n) => { (o as unknown as ServicePrincipal).servicePrincipalNames = n.getCollectionOfPrimitiveValues<string>(); }],
            ["servicePrincipalType", (o, n) => { (o as unknown as ServicePrincipal).servicePrincipalType = n.getStringValue(); }],
            ["signInAudience", (o, n) => { (o as unknown as ServicePrincipal).signInAudience = n.getStringValue(); }],
            ["tags", (o, n) => { (o as unknown as ServicePrincipal).tags = n.getCollectionOfPrimitiveValues<string>(); }],
            ["tokenEncryptionKeyId", (o, n) => { (o as unknown as ServicePrincipal).tokenEncryptionKeyId = n.getStringValue(); }],
            ["tokenIssuancePolicies", (o, n) => { (o as unknown as ServicePrincipal).tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(TokenIssuancePolicy); }],
            ["tokenLifetimePolicies", (o, n) => { (o as unknown as ServicePrincipal).tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(TokenLifetimePolicy); }],
            ["transitiveMemberOf", (o, n) => { (o as unknown as ServicePrincipal).transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
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
        writer.writeCollectionOfObjectValues<AddIn>("addIns", this.addIns);
        writer.writeCollectionOfPrimitiveValues<string>("alternativeNames", this.alternativeNames);
        writer.writeStringValue("appDescription", this.appDescription);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        writer.writeStringValue("appOwnerOrganizationId", this.appOwnerOrganizationId);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignedTo", this.appRoleAssignedTo);
        writer.writeBooleanValue("appRoleAssignmentRequired", this.appRoleAssignmentRequired);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues<AppRole>("appRoles", this.appRoles);
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicy>("claimsMappingPolicies", this.claimsMappingPolicies);
        writer.writeCollectionOfObjectValues<DirectoryObject>("createdObjects", this.createdObjects);
        writer.writeCollectionOfObjectValues<DelegatedPermissionClassification>("delegatedPermissionClassifications", this.delegatedPermissionClassifications);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<Endpoint>("endpoints", this.endpoints);
        writer.writeStringValue("homepage", this.homepage);
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeObjectValue<InformationalUrl>("info", this.info);
        writer.writeCollectionOfObjectValues<KeyCredential>("keyCredentials", this.keyCredentials);
        writer.writeStringValue("loginUrl", this.loginUrl);
        writer.writeStringValue("logoutUrl", this.logoutUrl);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeStringValue("notes", this.notes);
        writer.writeCollectionOfPrimitiveValues<string>("notificationEmailAddresses", this.notificationEmailAddresses);
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("oauth2PermissionGrants", this.oauth2PermissionGrants);
        writer.writeCollectionOfObjectValues<PermissionScope>("oauth2PermissionScopes", this.oauth2PermissionScopes);
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedObjects", this.ownedObjects);
        writer.writeCollectionOfObjectValues<DirectoryObject>("owners", this.owners);
        writer.writeCollectionOfObjectValues<PasswordCredential>("passwordCredentials", this.passwordCredentials);
        writer.writeStringValue("preferredSingleSignOnMode", this.preferredSingleSignOnMode);
        writer.writeStringValue("preferredTokenSigningKeyThumbprint", this.preferredTokenSigningKeyThumbprint);
        writer.writeCollectionOfPrimitiveValues<string>("replyUrls", this.replyUrls);
        writer.writeObjectValue<SamlSingleSignOnSettings>("samlSingleSignOnSettings", this.samlSingleSignOnSettings);
        writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalNames", this.servicePrincipalNames);
        writer.writeStringValue("servicePrincipalType", this.servicePrincipalType);
        writer.writeStringValue("signInAudience", this.signInAudience);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("tokenLifetimePolicies", this.tokenLifetimePolicies);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
    };
    /**
     * Sets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        this._accountEnabled = value;
    };
    /**
     * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     * @param value Value to set for the addIns property.
     */
    public set addIns(value: AddIn[] | undefined) {
        this._addIns = value;
    };
    /**
     * Sets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the alternativeNames property.
     */
    public set alternativeNames(value: string[] | undefined) {
        this._alternativeNames = value;
    };
    /**
     * Sets the appDescription property value. The description exposed by the associated application.
     * @param value Value to set for the appDescription property.
     */
    public set appDescription(value: string | undefined) {
        this._appDescription = value;
    };
    /**
     * Sets the appDisplayName property value. The display name exposed by the associated application.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Sets the appId property value. The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Sets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     * @param value Value to set for the applicationTemplateId property.
     */
    public set applicationTemplateId(value: string | undefined) {
        this._applicationTemplateId = value;
    };
    /**
     * Sets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications. Supports $filter (eq, ne, NOT, ge, le).
     * @param value Value to set for the appOwnerOrganizationId property.
     */
    public set appOwnerOrganizationId(value: string | undefined) {
        this._appOwnerOrganizationId = value;
    };
    /**
     * Sets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals. Supports $expand.
     * @param value Value to set for the appRoleAssignedTo property.
     */
    public set appRoleAssignedTo(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignedTo = value;
    };
    /**
     * Sets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     * @param value Value to set for the appRoleAssignmentRequired property.
     */
    public set appRoleAssignmentRequired(value: boolean | undefined) {
        this._appRoleAssignmentRequired = value;
    };
    /**
     * Sets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignments = value;
    };
    /**
     * Sets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     * @param value Value to set for the appRoles property.
     */
    public set appRoles(value: AppRole[] | undefined) {
        this._appRoles = value;
    };
    /**
     * Sets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @param value Value to set for the claimsMappingPolicies property.
     */
    public set claimsMappingPolicies(value: ClaimsMappingPolicy[] | undefined) {
        this._claimsMappingPolicies = value;
    };
    /**
     * Sets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
     * @param value Value to set for the createdObjects property.
     */
    public set createdObjects(value: DirectoryObject[] | undefined) {
        this._createdObjects = value;
    };
    /**
     * Sets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
     * @param value Value to set for the delegatedPermissionClassifications property.
     */
    public set delegatedPermissionClassifications(value: DelegatedPermissionClassification[] | undefined) {
        this._delegatedPermissionClassifications = value;
    };
    /**
     * Sets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     * @param value Value to set for the disabledByMicrosoftStatus property.
     */
    public set disabledByMicrosoftStatus(value: string | undefined) {
        this._disabledByMicrosoftStatus = value;
    };
    /**
     * Sets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
     * @param value Value to set for the endpoints property.
     */
    public set endpoints(value: Endpoint[] | undefined) {
        this._endpoints = value;
    };
    /**
     * Sets the homepage property value. Home page or landing page of the application.
     * @param value Value to set for the homepage property.
     */
    public set homepage(value: string | undefined) {
        this._homepage = value;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
     * @param value Value to set for the homeRealmDiscoveryPolicies property.
     */
    public set homeRealmDiscoveryPolicies(value: HomeRealmDiscoveryPolicy[] | undefined) {
        this._homeRealmDiscoveryPolicies = value;
    };
    /**
     * Sets the info property value. Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @param value Value to set for the info property.
     */
    public set info(value: InformationalUrl | undefined) {
        this._info = value;
    };
    /**
     * Sets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the keyCredentials property.
     */
    public set keyCredentials(value: KeyCredential[] | undefined) {
        this._keyCredentials = value;
    };
    /**
     * Sets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     * @param value Value to set for the loginUrl property.
     */
    public set loginUrl(value: string | undefined) {
        this._loginUrl = value;
    };
    /**
     * Sets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     * @param value Value to set for the logoutUrl property.
     */
    public set logoutUrl(value: string | undefined) {
        this._logoutUrl = value;
    };
    /**
     * Sets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Sets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Sets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     * @param value Value to set for the notificationEmailAddresses property.
     */
    public set notificationEmailAddresses(value: string[] | undefined) {
        this._notificationEmailAddresses = value;
    };
    /**
     * Sets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     * @param value Value to set for the oauth2PermissionGrants property.
     */
    public set oauth2PermissionGrants(value: OAuth2PermissionGrant[] | undefined) {
        this._oauth2PermissionGrants = value;
    };
    /**
     * Sets the oauth2PermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
     * @param value Value to set for the oauth2PermissionScopes property.
     */
    public set oauth2PermissionScopes(value: PermissionScope[] | undefined) {
        this._oauth2PermissionScopes = value;
    };
    /**
     * Sets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the ownedObjects property.
     */
    public set ownedObjects(value: DirectoryObject[] | undefined) {
        this._ownedObjects = value;
    };
    /**
     * Sets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        this._owners = value;
    };
    /**
     * Sets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
     * @param value Value to set for the passwordCredentials property.
     */
    public set passwordCredentials(value: PasswordCredential[] | undefined) {
        this._passwordCredentials = value;
    };
    /**
     * Sets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     * @param value Value to set for the preferredSingleSignOnMode property.
     */
    public set preferredSingleSignOnMode(value: string | undefined) {
        this._preferredSingleSignOnMode = value;
    };
    /**
     * Sets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
     * @param value Value to set for the preferredTokenSigningKeyThumbprint property.
     */
    public set preferredTokenSigningKeyThumbprint(value: string | undefined) {
        this._preferredTokenSigningKeyThumbprint = value;
    };
    /**
     * Sets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     * @param value Value to set for the replyUrls property.
     */
    public set replyUrls(value: string[] | undefined) {
        this._replyUrls = value;
    };
    /**
     * Sets the samlSingleSignOnSettings property value. The collection for settings related to saml single sign-on.
     * @param value Value to set for the samlSingleSignOnSettings property.
     */
    public set samlSingleSignOnSettings(value: SamlSingleSignOnSettings | undefined) {
        this._samlSingleSignOnSettings = value;
    };
    /**
     * Sets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the servicePrincipalNames property.
     */
    public set servicePrincipalNames(value: string[] | undefined) {
        this._servicePrincipalNames = value;
    };
    /**
     * Sets the servicePrincipalType property value. Identifies whether the service principal represents an application, a managed identity, or a legacy application. This is set by Azure AD internally. The servicePrincipalType property can be set to three different values: __Application - A service principal that represents an application or service. The appId property identifies the associated app registration, and matches the appId of an application, possibly from a different tenant. If the associated app registration is missing, tokens are not issued for the service principal.__ManagedIdentity - A service principal that represents a managed identity. Service principals representing managed identities can be granted access and permissions, but cannot be updated or modified directly.__Legacy - A service principal that represents an app created before app registrations, or through legacy experiences. Legacy service principal can have credentials, service principal names, reply URLs, and other properties which are editable by an authorized user, but does not have an associated app registration. The appId value does not associate the service principal with an app registration. The service principal can only be used in the tenant where it was created.__SocialIdp - For internal use.
     * @param value Value to set for the servicePrincipalType property.
     */
    public set servicePrincipalType(value: string | undefined) {
        this._servicePrincipalType = value;
    };
    /**
     * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     * @param value Value to set for the signInAudience property.
     */
    public set signInAudience(value: string | undefined) {
        this._signInAudience = value;
    };
    /**
     * Sets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @param value Value to set for the tokenEncryptionKeyId property.
     */
    public set tokenEncryptionKeyId(value: string | undefined) {
        this._tokenEncryptionKeyId = value;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal.
     * @param value Value to set for the tokenIssuancePolicies property.
     */
    public set tokenIssuancePolicies(value: TokenIssuancePolicy[] | undefined) {
        this._tokenIssuancePolicies = value;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal.
     * @param value Value to set for the tokenLifetimePolicies property.
     */
    public set tokenLifetimePolicies(value: TokenLifetimePolicy[] | undefined) {
        this._tokenLifetimePolicies = value;
    };
    /**
     * Sets the transitiveMemberOf property value. 
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
}
