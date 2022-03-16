import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAssignedLicenseFromDiscriminatorValue} from './createAssignedLicenseFromDiscriminatorValue';
import {createAssignedPlanFromDiscriminatorValue} from './createAssignedPlanFromDiscriminatorValue';
import {createAuthenticationFromDiscriminatorValue} from './createAuthenticationFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createCalendarGroupFromDiscriminatorValue} from './createCalendarGroupFromDiscriminatorValue';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDeviceManagementTroubleshootingEventFromDiscriminatorValue} from './createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createEmployeeOrgDataFromDiscriminatorValue} from './createEmployeeOrgDataFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createInferenceClassificationFromDiscriminatorValue} from './createInferenceClassificationFromDiscriminatorValue';
import {createLicenseAssignmentStateFromDiscriminatorValue} from './createLicenseAssignmentStateFromDiscriminatorValue';
import {createLicenseDetailsFromDiscriminatorValue} from './createLicenseDetailsFromDiscriminatorValue';
import {createMailboxSettingsFromDiscriminatorValue} from './createMailboxSettingsFromDiscriminatorValue';
import {createMailFolderFromDiscriminatorValue} from './createMailFolderFromDiscriminatorValue';
import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {createMessageFromDiscriminatorValue} from './createMessageFromDiscriminatorValue';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {createObjectIdentityFromDiscriminatorValue} from './createObjectIdentityFromDiscriminatorValue';
import {createOfficeGraphInsightsFromDiscriminatorValue} from './createOfficeGraphInsightsFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {createOnPremisesExtensionAttributesFromDiscriminatorValue} from './createOnPremisesExtensionAttributesFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createOutlookUserFromDiscriminatorValue} from './createOutlookUserFromDiscriminatorValue';
import {createPasswordProfileFromDiscriminatorValue} from './createPasswordProfileFromDiscriminatorValue';
import {createPersonFromDiscriminatorValue} from './createPersonFromDiscriminatorValue';
import {createPlannerUserFromDiscriminatorValue} from './createPlannerUserFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createProvisionedPlanFromDiscriminatorValue} from './createProvisionedPlanFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTodoFromDiscriminatorValue} from './createTodoFromDiscriminatorValue';
import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {createUserSettingsFromDiscriminatorValue} from './createUserSettingsFromDiscriminatorValue';
import {createUserTeamworkFromDiscriminatorValue} from './createUserTeamworkFromDiscriminatorValue';
import {AgreementAcceptance, AppRoleAssignment, AssignedLicense, AssignedPlan, Authentication, Calendar, CalendarGroup, Chat, Contact, ContactFolder, DeviceManagementTroubleshootingEvent, DirectoryObject, Drive, EmployeeOrgData, Event, Extension, InferenceClassification, LicenseAssignmentState, LicenseDetails, MailboxSettings, MailFolder, ManagedAppRegistration, ManagedDevice, Message, OAuth2PermissionGrant, ObjectIdentity, OfficeGraphInsights, Onenote, OnlineMeeting, OnPremisesExtensionAttributes, OnPremisesProvisioningError, OutlookUser, PasswordProfile, Person, PlannerUser, Presence, ProfilePhoto, ProvisionedPlan, ScopedRoleMembership, Site, Team, Todo, UserActivity, UserSettings, UserTeamwork} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class User extends DirectoryObject implements Parsable {
    /** A freeform text entry field for the user to describe themselves. Returned only on $select.  */
    private _aboutMe?: string | undefined;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Returned only on $select. Supports $filter (eq, ne, not, and in).  */
    private _accountEnabled?: boolean | undefined;
    /** The user's activities across devices. Read-only. Nullable.  */
    private _activities?: UserActivity[] | undefined;
    /** Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).  */
    private _ageGroup?: string | undefined;
    /** The user's terms of use acceptance statuses. Read-only. Nullable.  */
    private _agreementAcceptances?: AgreementAcceptance[] | undefined;
    /** Represents the app roles a user has been granted for an application. Supports $expand.  */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The licenses that are assigned to the user, including inherited (group-based) licenses.  Not nullable. Returned only on $select. Supports $filter (eq and not).  */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq and not).  */
    private _assignedPlans?: AssignedPlan[] | undefined;
    private _authentication?: Authentication | undefined;
    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  */
    private _birthday?: Date | undefined;
    /** The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property. Read-only for users synced from on-premises directory. Returned by default. Supports $filter (eq, not, ge, le, startsWith).  */
    private _businessPhones?: string[] | undefined;
    /** The user's primary calendar. Read-only.  */
    private _calendar?: Calendar | undefined;
    /** The user's calendar groups. Read-only. Nullable.  */
    private _calendarGroups?: CalendarGroup[] | undefined;
    /** The user's calendars. Read-only. Nullable.  */
    private _calendars?: Calendar[] | undefined;
    /** The calendar view for the calendar. Read-only. Nullable.  */
    private _calendarView?: Event[] | undefined;
    private _chats?: Chat[] | undefined;
    /** The city in which the user is located. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _city?: string | undefined;
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _companyName?: string | undefined;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).  */
    private _consentProvidedForMinor?: string | undefined;
    /** The user's contacts folders. Read-only. Nullable.  */
    private _contactFolders?: ContactFolder[] | undefined;
    /** The user's contacts. Read-only. Nullable.  */
    private _contacts?: Contact[] | undefined;
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _country?: string | undefined;
    /** The created date of the user object. Read-only. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).  */
    private _createdDateTime?: Date | undefined;
    /** Directory objects that were created by the user. Read-only. Nullable.  */
    private _createdObjects?: DirectoryObject[] | undefined;
    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp). Read-only.Returned only on $select. Supports $filter (eq, ne, not, in).  */
    private _creationType?: string | undefined;
    /** The name for the department in which the user works. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, and eq on null values).  */
    private _department?: string | undefined;
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.  */
    private _deviceEnrollmentLimit?: number | undefined;
    /** The list of troubleshooting events for this user.  */
    private _deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[] | undefined;
    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.  */
    private _directReports?: DirectoryObject[] | undefined;
    /** The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search.  */
    private _displayName?: string | undefined;
    /** The user's OneDrive. Read-only.  */
    private _drive?: Drive | undefined;
    /** A collection of drives available for this user. Read-only.  */
    private _drives?: Drive[] | undefined;
    /** The date and time when the user was hired or will start work in case of a future hire. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).  */
    private _employeeHireDate?: Date | undefined;
    /** The employee identifier assigned to the user by the organization. The maximum length is 16 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).  */
    private _employeeId?: string | undefined;
    /** Represents organization data (e.g. division and costCenter) associated with a user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).  */
    private _employeeOrgData?: EmployeeOrgData | undefined;
    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith).  */
    private _employeeType?: string | undefined;
    /** The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable.  */
    private _events?: Event[] | undefined;
    /** The collection of open extensions defined for the user. Read-only. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Returned only on $select. Supports $filter (eq, ne, not , in).  */
    private _externalUserState?: string | undefined;
    /** Shows the timestamp for the latest change to the externalUserState property. Returned only on $select. Supports $filter (eq, ne, not , in).  */
    private _externalUserStateChangeDateTime?: Date | undefined;
    /** The fax number of the user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).  */
    private _faxNumber?: string | undefined;
    private _followedSites?: Site[] | undefined;
    /** The given name (first name) of the user. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).  */
    private _givenName?: string | undefined;
    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.  */
    private _hireDate?: Date | undefined;
    /** Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Returned only on $select. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName.  */
    private _identities?: ObjectIdentity[] | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).  */
    private _imAddresses?: string[] | undefined;
    /** Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.  */
    private _inferenceClassification?: InferenceClassification | undefined;
    /** Read-only. Nullable.  */
    private _insights?: OfficeGraphInsights | undefined;
    /** A list for the user to describe their interests. Returned only on $select.  */
    private _interests?: string[] | undefined;
    /** Do not use – reserved for future use.  */
    private _isResourceAccount?: boolean | undefined;
    /** The user's job title. Maximum length is 128 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).  */
    private _jobTitle?: string | undefined;
    /** The Microsoft Teams teams that the user is a member of. Read-only. Nullable.  */
    private _joinedTeams?: Team[] | undefined;
    /** The time when this Azure AD user last changed their password or when their password was created, whichever date the latest action was performed. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  */
    private _lastPasswordChangeDateTime?: Date | undefined;
    /** Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select.  */
    private _legalAgeGroupClassification?: string | undefined;
    /** State of license assignments for this user. Read-only. Returned only on $select.  */
    private _licenseAssignmentStates?: LicenseAssignmentState[] | undefined;
    /** A collection of this user's license details. Read-only.  */
    private _licenseDetails?: LicenseDetails[] | undefined;
    /** The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com.Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values).  */
    private _mail?: string | undefined;
    /** Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone. Returned only on $select.  */
    private _mailboxSettings?: MailboxSettings | undefined;
    /** The user's mail folders. Read-only. Nullable.  */
    private _mailFolders?: MailFolder[] | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _mailNickname?: string | undefined;
    /** Zero or more managed app registrations that belong to the user.  */
    private _managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /** The managed devices associated with the user.  */
    private _managedDevices?: ManagedDevice[] | undefined;
    /** The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.  */
    private _manager?: DirectoryObject | undefined;
    /** The groups and directory roles that the user is a member of. Read-only. Nullable. Supports $expand.  */
    private _memberOf?: DirectoryObject[] | undefined;
    /** The messages in a mailbox or folder. Read-only. Nullable.  */
    private _messages?: Message[] | undefined;
    /** The primary cellular telephone number for the user. Read-only for users synced from on-premises directory. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _mobilePhone?: string | undefined;
    /** The URL for the user's personal site. Returned only on $select.  */
    private _mySite?: string | undefined;
    private _oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** The office location in the user's place of business. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _officeLocation?: string | undefined;
    /** Read-only.  */
    private _onenote?: Onenote | undefined;
    private _onlineMeetings?: OnlineMeeting[] | undefined;
    /** Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.  */
    private _onPremisesDistinguishedName?: string | undefined;
    /** Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.  */
    private _onPremisesDomainName?: string | undefined;
    /** Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15.  */
    private _onPremisesExtensionAttributes?: OnPremisesExtensionAttributes | undefined;
    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. NOTE: The $ and _ characters cannot be used when specifying this property. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in)..  */
    private _onPremisesImmutableId?: string | undefined;
    /** Indicates the last time at which the object was synced with the on-premises directory; for example: 2013-02-16T03:04:54Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in).  */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** Errors when using Microsoft synchronization product during provisioning. Returned only on $select. Supports $filter (eq, not, ge, le).  */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).  */
    private _onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Returned only on $select. Supports $filter (eq) on null values only.  */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).  */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).  */
    private _onPremisesUserPrincipalName?: string | undefined;
    /** A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. NOTE: This property cannot contain accent characters. Returned only on $select. Supports $filter (eq, not, ge, le, in, startsWith).  */
    private _otherMails?: string[] | undefined;
    /** Read-only.  */
    private _outlook?: OutlookUser | undefined;
    /** Devices that are owned by the user. Read-only. Nullable. Supports $expand.  */
    private _ownedDevices?: DirectoryObject[] | undefined;
    /** Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.  */
    private _ownedObjects?: DirectoryObject[] | undefined;
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. Returned only on $select. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values).  */
    private _passwordPolicies?: string | undefined;
    /** Specifies the password profile for the user. The profile contains the user’s password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon.Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).  */
    private _passwordProfile?: PasswordProfile | undefined;
    /** A list for the user to enumerate their past projects. Returned only on $select.  */
    private _pastProjects?: string[] | undefined;
    /** People that are relevant to the user. Read-only. Nullable.  */
    private _people?: Person[] | undefined;
    /** The user's profile photo. Read-only.  */
    private _photo?: ProfilePhoto | undefined;
    /** Read-only. Nullable.  */
    private _photos?: ProfilePhoto[] | undefined;
    /** Entry-point to the Planner resource that might exist for a user. Read-only.  */
    private _planner?: PlannerUser | undefined;
    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _postalCode?: string | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)  */
    private _preferredLanguage?: string | undefined;
    /** The preferred name for the user. Returned only on $select.  */
    private _preferredName?: string | undefined;
    private _presence?: Presence | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le).  */
    private _provisionedPlans?: ProvisionedPlan[] | undefined;
    /** For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).  */
    private _proxyAddresses?: string[] | undefined;
    /** Devices that are registered for the user. Read-only. Nullable. Supports $expand.  */
    private _registeredDevices?: DirectoryObject[] | undefined;
    /** A list for the user to enumerate their responsibilities. Returned only on $select.  */
    private _responsibilities?: string[] | undefined;
    /** A list for the user to enumerate the schools they have attended. Returned only on $select.  */
    private _schools?: string[] | undefined;
    /** The scoped-role administrative unit memberships for this user. Read-only. Nullable.  */
    private _scopedRoleMemberOf?: ScopedRoleMembership[] | undefined;
    /** Read-only. Nullable.  */
    private _settings?: UserSettings | undefined;
    /** true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Returned only on $select. Supports $filter (eq, ne, not, in).  */
    private _showInAddressList?: boolean | undefined;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. Returned only on $select.  */
    private _signInSessionsValidFromDateTime?: Date | undefined;
    /** A list for the user to enumerate their skills. Returned only on $select.  */
    private _skills?: string[] | undefined;
    /** The state or province in the user's address. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _state?: string | undefined;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _streetAddress?: string | undefined;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _surname?: string | undefined;
    /** A container for Microsoft Teams features available for the user. Read-only. Nullable.  */
    private _teamwork?: UserTeamwork | undefined;
    /** Represents the To Do services available to a user.  */
    private _todo?: Todo | undefined;
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _usageLocation?: string | undefined;
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy.  */
    private _userPrincipalName?: string | undefined;
    /** A string value that can be used to classify user types in your directory, such as Member and Guest. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory?  */
    private _userType?: string | undefined;
    /**
     * Gets the aboutMe property value. A freeform text entry field for the user to describe themselves. Returned only on $select.
     * @returns a string
     */
    public get aboutMe() {
        return this._aboutMe;
    };
    /**
     * Sets the aboutMe property value. A freeform text entry field for the user to describe themselves. Returned only on $select.
     * @param value Value to set for the aboutMe property.
     */
    public set aboutMe(value: string | undefined) {
        this._aboutMe = value;
    };
    /**
     * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. This property is required when a user is created. Returned only on $select. Supports $filter (eq, ne, not, and in).
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. This property is required when a user is created. Returned only on $select. Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        this._accountEnabled = value;
    };
    /**
     * Gets the activities property value. The user's activities across devices. Read-only. Nullable.
     * @returns a userActivity
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. The user's activities across devices. Read-only. Nullable.
     * @param value Value to set for the activities property.
     */
    public set activities(value: UserActivity[] | undefined) {
        this._activities = value;
    };
    /**
     * Gets the ageGroup property value. Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).
     * @returns a string
     */
    public get ageGroup() {
        return this._ageGroup;
    };
    /**
     * Sets the ageGroup property value. Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the ageGroup property.
     */
    public set ageGroup(value: string | undefined) {
        this._ageGroup = value;
    };
    /**
     * Gets the agreementAcceptances property value. The user's terms of use acceptance statuses. Read-only. Nullable.
     * @returns a agreementAcceptance
     */
    public get agreementAcceptances() {
        return this._agreementAcceptances;
    };
    /**
     * Sets the agreementAcceptances property value. The user's terms of use acceptance statuses. Read-only. Nullable.
     * @param value Value to set for the agreementAcceptances property.
     */
    public set agreementAcceptances(value: AgreementAcceptance[] | undefined) {
        this._agreementAcceptances = value;
    };
    /**
     * Gets the appRoleAssignments property value. Represents the app roles a user has been granted for an application. Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Sets the appRoleAssignments property value. Represents the app roles a user has been granted for an application. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignments = value;
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the user, including inherited (group-based) licenses.  Not nullable. Returned only on $select. Supports $filter (eq and not).
     * @returns a assignedLicense
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the user, including inherited (group-based) licenses.  Not nullable. Returned only on $select. Supports $filter (eq and not).
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        this._assignedLicenses = value;
    };
    /**
     * Gets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq and not).
     * @returns a assignedPlan
     */
    public get assignedPlans() {
        return this._assignedPlans;
    };
    /**
     * Sets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq and not).
     * @param value Value to set for the assignedPlans property.
     */
    public set assignedPlans(value: AssignedPlan[] | undefined) {
        this._assignedPlans = value;
    };
    /**
     * Gets the authentication property value. 
     * @returns a authentication
     */
    public get authentication() {
        return this._authentication;
    };
    /**
     * Sets the authentication property value. 
     * @param value Value to set for the authentication property.
     */
    public set authentication(value: Authentication | undefined) {
        this._authentication = value;
    };
    /**
     * Gets the birthday property value. The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.
     * @returns a Date
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Sets the birthday property value. The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: Date | undefined) {
        this._birthday = value;
    };
    /**
     * Gets the businessPhones property value. The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property. Read-only for users synced from on-premises directory. Returned by default. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Sets the businessPhones property value. The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property. Read-only for users synced from on-premises directory. Returned by default. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        this._businessPhones = value;
    };
    /**
     * Gets the calendar property value. The user's primary calendar. Read-only.
     * @returns a calendar
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Sets the calendar property value. The user's primary calendar. Read-only.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        this._calendar = value;
    };
    /**
     * Gets the calendarGroups property value. The user's calendar groups. Read-only. Nullable.
     * @returns a calendarGroup
     */
    public get calendarGroups() {
        return this._calendarGroups;
    };
    /**
     * Sets the calendarGroups property value. The user's calendar groups. Read-only. Nullable.
     * @param value Value to set for the calendarGroups property.
     */
    public set calendarGroups(value: CalendarGroup[] | undefined) {
        this._calendarGroups = value;
    };
    /**
     * Gets the calendars property value. The user's calendars. Read-only. Nullable.
     * @returns a calendar
     */
    public get calendars() {
        return this._calendars;
    };
    /**
     * Sets the calendars property value. The user's calendars. Read-only. Nullable.
     * @param value Value to set for the calendars property.
     */
    public set calendars(value: Calendar[] | undefined) {
        this._calendars = value;
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Read-only. Nullable.
     * @returns a event
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Read-only. Nullable.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        this._calendarView = value;
    };
    /**
     * Gets the chats property value. 
     * @returns a chat
     */
    public get chats() {
        return this._chats;
    };
    /**
     * Sets the chats property value. 
     * @param value Value to set for the chats property.
     */
    public set chats(value: Chat[] | undefined) {
        this._chats = value;
    };
    /**
     * Gets the city property value. The city in which the user is located. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. The city in which the user is located. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Gets the companyName property value. The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Gets the consentProvidedForMinor property value. Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).
     * @returns a string
     */
    public get consentProvidedForMinor() {
        return this._consentProvidedForMinor;
    };
    /**
     * Sets the consentProvidedForMinor property value. Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the consentProvidedForMinor property.
     */
    public set consentProvidedForMinor(value: string | undefined) {
        this._consentProvidedForMinor = value;
    };
    /**
     * Instantiates a new user and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactFolders property value. The user's contacts folders. Read-only. Nullable.
     * @returns a contactFolder
     */
    public get contactFolders() {
        return this._contactFolders;
    };
    /**
     * Sets the contactFolders property value. The user's contacts folders. Read-only. Nullable.
     * @param value Value to set for the contactFolders property.
     */
    public set contactFolders(value: ContactFolder[] | undefined) {
        this._contactFolders = value;
    };
    /**
     * Gets the contacts property value. The user's contacts. Read-only. Nullable.
     * @returns a contact
     */
    public get contacts() {
        return this._contacts;
    };
    /**
     * Sets the contacts property value. The user's contacts. Read-only. Nullable.
     * @param value Value to set for the contacts property.
     */
    public set contacts(value: Contact[] | undefined) {
        this._contacts = value;
    };
    /**
     * Gets the country property value. The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get country() {
        return this._country;
    };
    /**
     * Sets the country property value. The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the country property.
     */
    public set country(value: string | undefined) {
        this._country = value;
    };
    /**
     * Gets the createdDateTime property value. The created date of the user object. Read-only. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The created date of the user object. Read-only. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the createdObjects property value. Directory objects that were created by the user. Read-only. Nullable.
     * @returns a directoryObject
     */
    public get createdObjects() {
        return this._createdObjects;
    };
    /**
     * Sets the createdObjects property value. Directory objects that were created by the user. Read-only. Nullable.
     * @param value Value to set for the createdObjects property.
     */
    public set createdObjects(value: DirectoryObject[] | undefined) {
        this._createdObjects = value;
    };
    /**
     * Gets the creationType property value. Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp). Read-only.Returned only on $select. Supports $filter (eq, ne, not, in).
     * @returns a string
     */
    public get creationType() {
        return this._creationType;
    };
    /**
     * Sets the creationType property value. Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp). Read-only.Returned only on $select. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the creationType property.
     */
    public set creationType(value: string | undefined) {
        this._creationType = value;
    };
    /**
     * Gets the department property value. The name for the department in which the user works. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, and eq on null values).
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The name for the department in which the user works. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, and eq on null values).
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Gets the deviceEnrollmentLimit property value. The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
     * @returns a integer
     */
    public get deviceEnrollmentLimit() {
        return this._deviceEnrollmentLimit;
    };
    /**
     * Sets the deviceEnrollmentLimit property value. The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
     * @param value Value to set for the deviceEnrollmentLimit property.
     */
    public set deviceEnrollmentLimit(value: number | undefined) {
        this._deviceEnrollmentLimit = value;
    };
    /**
     * Gets the deviceManagementTroubleshootingEvents property value. The list of troubleshooting events for this user.
     * @returns a deviceManagementTroubleshootingEvent
     */
    public get deviceManagementTroubleshootingEvents() {
        return this._deviceManagementTroubleshootingEvents;
    };
    /**
     * Sets the deviceManagementTroubleshootingEvents property value. The list of troubleshooting events for this user.
     * @param value Value to set for the deviceManagementTroubleshootingEvents property.
     */
    public set deviceManagementTroubleshootingEvents(value: DeviceManagementTroubleshootingEvent[] | undefined) {
        this._deviceManagementTroubleshootingEvents = value;
    };
    /**
     * Gets the directReports property value. The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get directReports() {
        return this._directReports;
    };
    /**
     * Sets the directReports property value. The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
     * @param value Value to set for the directReports property.
     */
    public set directReports(value: DirectoryObject[] | undefined) {
        this._directReports = value;
    };
    /**
     * Gets the displayName property value. The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the drive property value. The user's OneDrive. Read-only.
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The user's OneDrive. Read-only.
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * Gets the drives property value. A collection of drives available for this user. Read-only.
     * @returns a drive
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. A collection of drives available for this user. Read-only.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        this._drives = value;
    };
    /**
     * Gets the employeeHireDate property value. The date and time when the user was hired or will start work in case of a future hire. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     * @returns a Date
     */
    public get employeeHireDate() {
        return this._employeeHireDate;
    };
    /**
     * Sets the employeeHireDate property value. The date and time when the user was hired or will start work in case of a future hire. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     * @param value Value to set for the employeeHireDate property.
     */
    public set employeeHireDate(value: Date | undefined) {
        this._employeeHireDate = value;
    };
    /**
     * Gets the employeeId property value. The employee identifier assigned to the user by the organization. The maximum length is 16 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get employeeId() {
        return this._employeeId;
    };
    /**
     * Sets the employeeId property value. The employee identifier assigned to the user by the organization. The maximum length is 16 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the employeeId property.
     */
    public set employeeId(value: string | undefined) {
        this._employeeId = value;
    };
    /**
     * Gets the employeeOrgData property value. Represents organization data (e.g. division and costCenter) associated with a user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     * @returns a employeeOrgData
     */
    public get employeeOrgData() {
        return this._employeeOrgData;
    };
    /**
     * Sets the employeeOrgData property value. Represents organization data (e.g. division and costCenter) associated with a user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     * @param value Value to set for the employeeOrgData property.
     */
    public set employeeOrgData(value: EmployeeOrgData | undefined) {
        this._employeeOrgData = value;
    };
    /**
     * Gets the employeeType property value. Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith).
     * @returns a string
     */
    public get employeeType() {
        return this._employeeType;
    };
    /**
     * Sets the employeeType property value. Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith).
     * @param value Value to set for the employeeType property.
     */
    public set employeeType(value: string | undefined) {
        this._employeeType = value;
    };
    /**
     * Gets the events property value. The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable.
     * @returns a event
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        this._events = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the user. Read-only. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the user. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Gets the externalUserState property value. For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Returned only on $select. Supports $filter (eq, ne, not , in).
     * @returns a string
     */
    public get externalUserState() {
        return this._externalUserState;
    };
    /**
     * Sets the externalUserState property value. For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Returned only on $select. Supports $filter (eq, ne, not , in).
     * @param value Value to set for the externalUserState property.
     */
    public set externalUserState(value: string | undefined) {
        this._externalUserState = value;
    };
    /**
     * Gets the externalUserStateChangeDateTime property value. Shows the timestamp for the latest change to the externalUserState property. Returned only on $select. Supports $filter (eq, ne, not , in).
     * @returns a Date
     */
    public get externalUserStateChangeDateTime() {
        return this._externalUserStateChangeDateTime;
    };
    /**
     * Sets the externalUserStateChangeDateTime property value. Shows the timestamp for the latest change to the externalUserState property. Returned only on $select. Supports $filter (eq, ne, not , in).
     * @param value Value to set for the externalUserStateChangeDateTime property.
     */
    public set externalUserStateChangeDateTime(value: Date | undefined) {
        this._externalUserStateChangeDateTime = value;
    };
    /**
     * Gets the faxNumber property value. The fax number of the user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get faxNumber() {
        return this._faxNumber;
    };
    /**
     * Sets the faxNumber property value. The fax number of the user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the faxNumber property.
     */
    public set faxNumber(value: string | undefined) {
        this._faxNumber = value;
    };
    /**
     * Gets the followedSites property value. 
     * @returns a site
     */
    public get followedSites() {
        return this._followedSites;
    };
    /**
     * Sets the followedSites property value. 
     * @param value Value to set for the followedSites property.
     */
    public set followedSites(value: Site[] | undefined) {
        this._followedSites = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["aboutMe", (o, n) => { (o as unknown as User).aboutMe = n.getStringValue(); }],
            ["accountEnabled", (o, n) => { (o as unknown as User).accountEnabled = n.getBooleanValue(); }],
            ["activities", (o, n) => { (o as unknown as User).activities = n.getCollectionOfObjectValues<UserActivity>(createUserActivityFromDiscriminatorValue); }],
            ["ageGroup", (o, n) => { (o as unknown as User).ageGroup = n.getStringValue(); }],
            ["agreementAcceptances", (o, n) => { (o as unknown as User).agreementAcceptances = n.getCollectionOfObjectValues<AgreementAcceptance>(createAgreementAcceptanceFromDiscriminatorValue); }],
            ["appRoleAssignments", (o, n) => { (o as unknown as User).appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); }],
            ["assignedLicenses", (o, n) => { (o as unknown as User).assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); }],
            ["assignedPlans", (o, n) => { (o as unknown as User).assignedPlans = n.getCollectionOfObjectValues<AssignedPlan>(createAssignedPlanFromDiscriminatorValue); }],
            ["authentication", (o, n) => { (o as unknown as User).authentication = n.getObjectValue<Authentication>(createAuthenticationFromDiscriminatorValue); }],
            ["birthday", (o, n) => { (o as unknown as User).birthday = n.getDateValue(); }],
            ["businessPhones", (o, n) => { (o as unknown as User).businessPhones = n.getCollectionOfPrimitiveValues<string>(); }],
            ["calendar", (o, n) => { (o as unknown as User).calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); }],
            ["calendarGroups", (o, n) => { (o as unknown as User).calendarGroups = n.getCollectionOfObjectValues<CalendarGroup>(createCalendarGroupFromDiscriminatorValue); }],
            ["calendars", (o, n) => { (o as unknown as User).calendars = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); }],
            ["calendarView", (o, n) => { (o as unknown as User).calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); }],
            ["chats", (o, n) => { (o as unknown as User).chats = n.getCollectionOfObjectValues<Chat>(createChatFromDiscriminatorValue); }],
            ["city", (o, n) => { (o as unknown as User).city = n.getStringValue(); }],
            ["companyName", (o, n) => { (o as unknown as User).companyName = n.getStringValue(); }],
            ["consentProvidedForMinor", (o, n) => { (o as unknown as User).consentProvidedForMinor = n.getStringValue(); }],
            ["contactFolders", (o, n) => { (o as unknown as User).contactFolders = n.getCollectionOfObjectValues<ContactFolder>(createContactFolderFromDiscriminatorValue); }],
            ["contacts", (o, n) => { (o as unknown as User).contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); }],
            ["country", (o, n) => { (o as unknown as User).country = n.getStringValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as User).createdDateTime = n.getDateValue(); }],
            ["createdObjects", (o, n) => { (o as unknown as User).createdObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["creationType", (o, n) => { (o as unknown as User).creationType = n.getStringValue(); }],
            ["department", (o, n) => { (o as unknown as User).department = n.getStringValue(); }],
            ["deviceEnrollmentLimit", (o, n) => { (o as unknown as User).deviceEnrollmentLimit = n.getNumberValue(); }],
            ["deviceManagementTroubleshootingEvents", (o, n) => { (o as unknown as User).deviceManagementTroubleshootingEvents = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>(createDeviceManagementTroubleshootingEventFromDiscriminatorValue); }],
            ["directReports", (o, n) => { (o as unknown as User).directReports = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as User).displayName = n.getStringValue(); }],
            ["drive", (o, n) => { (o as unknown as User).drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); }],
            ["drives", (o, n) => { (o as unknown as User).drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); }],
            ["employeeHireDate", (o, n) => { (o as unknown as User).employeeHireDate = n.getDateValue(); }],
            ["employeeId", (o, n) => { (o as unknown as User).employeeId = n.getStringValue(); }],
            ["employeeOrgData", (o, n) => { (o as unknown as User).employeeOrgData = n.getObjectValue<EmployeeOrgData>(createEmployeeOrgDataFromDiscriminatorValue); }],
            ["employeeType", (o, n) => { (o as unknown as User).employeeType = n.getStringValue(); }],
            ["events", (o, n) => { (o as unknown as User).events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); }],
            ["extensions", (o, n) => { (o as unknown as User).extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); }],
            ["externalUserState", (o, n) => { (o as unknown as User).externalUserState = n.getStringValue(); }],
            ["externalUserStateChangeDateTime", (o, n) => { (o as unknown as User).externalUserStateChangeDateTime = n.getDateValue(); }],
            ["faxNumber", (o, n) => { (o as unknown as User).faxNumber = n.getStringValue(); }],
            ["followedSites", (o, n) => { (o as unknown as User).followedSites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); }],
            ["givenName", (o, n) => { (o as unknown as User).givenName = n.getStringValue(); }],
            ["hireDate", (o, n) => { (o as unknown as User).hireDate = n.getDateValue(); }],
            ["identities", (o, n) => { (o as unknown as User).identities = n.getCollectionOfObjectValues<ObjectIdentity>(createObjectIdentityFromDiscriminatorValue); }],
            ["imAddresses", (o, n) => { (o as unknown as User).imAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["inferenceClassification", (o, n) => { (o as unknown as User).inferenceClassification = n.getObjectValue<InferenceClassification>(createInferenceClassificationFromDiscriminatorValue); }],
            ["insights", (o, n) => { (o as unknown as User).insights = n.getObjectValue<OfficeGraphInsights>(createOfficeGraphInsightsFromDiscriminatorValue); }],
            ["interests", (o, n) => { (o as unknown as User).interests = n.getCollectionOfPrimitiveValues<string>(); }],
            ["isResourceAccount", (o, n) => { (o as unknown as User).isResourceAccount = n.getBooleanValue(); }],
            ["jobTitle", (o, n) => { (o as unknown as User).jobTitle = n.getStringValue(); }],
            ["joinedTeams", (o, n) => { (o as unknown as User).joinedTeams = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); }],
            ["lastPasswordChangeDateTime", (o, n) => { (o as unknown as User).lastPasswordChangeDateTime = n.getDateValue(); }],
            ["legalAgeGroupClassification", (o, n) => { (o as unknown as User).legalAgeGroupClassification = n.getStringValue(); }],
            ["licenseAssignmentStates", (o, n) => { (o as unknown as User).licenseAssignmentStates = n.getCollectionOfObjectValues<LicenseAssignmentState>(createLicenseAssignmentStateFromDiscriminatorValue); }],
            ["licenseDetails", (o, n) => { (o as unknown as User).licenseDetails = n.getCollectionOfObjectValues<LicenseDetails>(createLicenseDetailsFromDiscriminatorValue); }],
            ["mail", (o, n) => { (o as unknown as User).mail = n.getStringValue(); }],
            ["mailboxSettings", (o, n) => { (o as unknown as User).mailboxSettings = n.getObjectValue<MailboxSettings>(createMailboxSettingsFromDiscriminatorValue); }],
            ["mailFolders", (o, n) => { (o as unknown as User).mailFolders = n.getCollectionOfObjectValues<MailFolder>(createMailFolderFromDiscriminatorValue); }],
            ["mailNickname", (o, n) => { (o as unknown as User).mailNickname = n.getStringValue(); }],
            ["managedAppRegistrations", (o, n) => { (o as unknown as User).managedAppRegistrations = n.getCollectionOfObjectValues<ManagedAppRegistration>(createManagedAppRegistrationFromDiscriminatorValue); }],
            ["managedDevices", (o, n) => { (o as unknown as User).managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); }],
            ["manager", (o, n) => { (o as unknown as User).manager = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["memberOf", (o, n) => { (o as unknown as User).memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["messages", (o, n) => { (o as unknown as User).messages = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); }],
            ["mobilePhone", (o, n) => { (o as unknown as User).mobilePhone = n.getStringValue(); }],
            ["mySite", (o, n) => { (o as unknown as User).mySite = n.getStringValue(); }],
            ["oauth2PermissionGrants", (o, n) => { (o as unknown as User).oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(createOAuth2PermissionGrantFromDiscriminatorValue); }],
            ["officeLocation", (o, n) => { (o as unknown as User).officeLocation = n.getStringValue(); }],
            ["onenote", (o, n) => { (o as unknown as User).onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); }],
            ["onlineMeetings", (o, n) => { (o as unknown as User).onlineMeetings = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); }],
            ["onPremisesDistinguishedName", (o, n) => { (o as unknown as User).onPremisesDistinguishedName = n.getStringValue(); }],
            ["onPremisesDomainName", (o, n) => { (o as unknown as User).onPremisesDomainName = n.getStringValue(); }],
            ["onPremisesExtensionAttributes", (o, n) => { (o as unknown as User).onPremisesExtensionAttributes = n.getObjectValue<OnPremisesExtensionAttributes>(createOnPremisesExtensionAttributesFromDiscriminatorValue); }],
            ["onPremisesImmutableId", (o, n) => { (o as unknown as User).onPremisesImmutableId = n.getStringValue(); }],
            ["onPremisesLastSyncDateTime", (o, n) => { (o as unknown as User).onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesProvisioningErrors", (o, n) => { (o as unknown as User).onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(createOnPremisesProvisioningErrorFromDiscriminatorValue); }],
            ["onPremisesSamAccountName", (o, n) => { (o as unknown as User).onPremisesSamAccountName = n.getStringValue(); }],
            ["onPremisesSecurityIdentifier", (o, n) => { (o as unknown as User).onPremisesSecurityIdentifier = n.getStringValue(); }],
            ["onPremisesSyncEnabled", (o, n) => { (o as unknown as User).onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["onPremisesUserPrincipalName", (o, n) => { (o as unknown as User).onPremisesUserPrincipalName = n.getStringValue(); }],
            ["otherMails", (o, n) => { (o as unknown as User).otherMails = n.getCollectionOfPrimitiveValues<string>(); }],
            ["outlook", (o, n) => { (o as unknown as User).outlook = n.getObjectValue<OutlookUser>(createOutlookUserFromDiscriminatorValue); }],
            ["ownedDevices", (o, n) => { (o as unknown as User).ownedDevices = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["ownedObjects", (o, n) => { (o as unknown as User).ownedObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["passwordPolicies", (o, n) => { (o as unknown as User).passwordPolicies = n.getStringValue(); }],
            ["passwordProfile", (o, n) => { (o as unknown as User).passwordProfile = n.getObjectValue<PasswordProfile>(createPasswordProfileFromDiscriminatorValue); }],
            ["pastProjects", (o, n) => { (o as unknown as User).pastProjects = n.getCollectionOfPrimitiveValues<string>(); }],
            ["people", (o, n) => { (o as unknown as User).people = n.getCollectionOfObjectValues<Person>(createPersonFromDiscriminatorValue); }],
            ["photo", (o, n) => { (o as unknown as User).photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); }],
            ["photos", (o, n) => { (o as unknown as User).photos = n.getCollectionOfObjectValues<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); }],
            ["planner", (o, n) => { (o as unknown as User).planner = n.getObjectValue<PlannerUser>(createPlannerUserFromDiscriminatorValue); }],
            ["postalCode", (o, n) => { (o as unknown as User).postalCode = n.getStringValue(); }],
            ["preferredLanguage", (o, n) => { (o as unknown as User).preferredLanguage = n.getStringValue(); }],
            ["preferredName", (o, n) => { (o as unknown as User).preferredName = n.getStringValue(); }],
            ["presence", (o, n) => { (o as unknown as User).presence = n.getObjectValue<Presence>(createPresenceFromDiscriminatorValue); }],
            ["provisionedPlans", (o, n) => { (o as unknown as User).provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlan>(createProvisionedPlanFromDiscriminatorValue); }],
            ["proxyAddresses", (o, n) => { (o as unknown as User).proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["registeredDevices", (o, n) => { (o as unknown as User).registeredDevices = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["responsibilities", (o, n) => { (o as unknown as User).responsibilities = n.getCollectionOfPrimitiveValues<string>(); }],
            ["schools", (o, n) => { (o as unknown as User).schools = n.getCollectionOfPrimitiveValues<string>(); }],
            ["scopedRoleMemberOf", (o, n) => { (o as unknown as User).scopedRoleMemberOf = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); }],
            ["settings", (o, n) => { (o as unknown as User).settings = n.getObjectValue<UserSettings>(createUserSettingsFromDiscriminatorValue); }],
            ["showInAddressList", (o, n) => { (o as unknown as User).showInAddressList = n.getBooleanValue(); }],
            ["signInSessionsValidFromDateTime", (o, n) => { (o as unknown as User).signInSessionsValidFromDateTime = n.getDateValue(); }],
            ["skills", (o, n) => { (o as unknown as User).skills = n.getCollectionOfPrimitiveValues<string>(); }],
            ["state", (o, n) => { (o as unknown as User).state = n.getStringValue(); }],
            ["streetAddress", (o, n) => { (o as unknown as User).streetAddress = n.getStringValue(); }],
            ["surname", (o, n) => { (o as unknown as User).surname = n.getStringValue(); }],
            ["teamwork", (o, n) => { (o as unknown as User).teamwork = n.getObjectValue<UserTeamwork>(createUserTeamworkFromDiscriminatorValue); }],
            ["todo", (o, n) => { (o as unknown as User).todo = n.getObjectValue<Todo>(createTodoFromDiscriminatorValue); }],
            ["transitiveMemberOf", (o, n) => { (o as unknown as User).transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["usageLocation", (o, n) => { (o as unknown as User).usageLocation = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as User).userPrincipalName = n.getStringValue(); }],
            ["userType", (o, n) => { (o as unknown as User).userType = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the givenName property value. The given name (first name) of the user. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The given name (first name) of the user. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Gets the hireDate property value. The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
     * @returns a Date
     */
    public get hireDate() {
        return this._hireDate;
    };
    /**
     * Sets the hireDate property value. The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
     * @param value Value to set for the hireDate property.
     */
    public set hireDate(value: Date | undefined) {
        this._hireDate = value;
    };
    /**
     * Gets the identities property value. Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Returned only on $select. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName.
     * @returns a objectIdentity
     */
    public get identities() {
        return this._identities;
    };
    /**
     * Sets the identities property value. Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Returned only on $select. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName.
     * @param value Value to set for the identities property.
     */
    public set identities(value: ObjectIdentity[] | undefined) {
        this._identities = value;
    };
    /**
     * Gets the imAddresses property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get imAddresses() {
        return this._imAddresses;
    };
    /**
     * Sets the imAddresses property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the imAddresses property.
     */
    public set imAddresses(value: string[] | undefined) {
        this._imAddresses = value;
    };
    /**
     * Gets the inferenceClassification property value. Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @returns a inferenceClassification
     */
    public get inferenceClassification() {
        return this._inferenceClassification;
    };
    /**
     * Sets the inferenceClassification property value. Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param value Value to set for the inferenceClassification property.
     */
    public set inferenceClassification(value: InferenceClassification | undefined) {
        this._inferenceClassification = value;
    };
    /**
     * Gets the insights property value. Read-only. Nullable.
     * @returns a officeGraphInsights
     */
    public get insights() {
        return this._insights;
    };
    /**
     * Sets the insights property value. Read-only. Nullable.
     * @param value Value to set for the insights property.
     */
    public set insights(value: OfficeGraphInsights | undefined) {
        this._insights = value;
    };
    /**
     * Gets the interests property value. A list for the user to describe their interests. Returned only on $select.
     * @returns a string
     */
    public get interests() {
        return this._interests;
    };
    /**
     * Sets the interests property value. A list for the user to describe their interests. Returned only on $select.
     * @param value Value to set for the interests property.
     */
    public set interests(value: string[] | undefined) {
        this._interests = value;
    };
    /**
     * Gets the isResourceAccount property value. Do not use – reserved for future use.
     * @returns a boolean
     */
    public get isResourceAccount() {
        return this._isResourceAccount;
    };
    /**
     * Sets the isResourceAccount property value. Do not use – reserved for future use.
     * @param value Value to set for the isResourceAccount property.
     */
    public set isResourceAccount(value: boolean | undefined) {
        this._isResourceAccount = value;
    };
    /**
     * Gets the jobTitle property value. The user's job title. Maximum length is 128 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. The user's job title. Maximum length is 128 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Gets the joinedTeams property value. The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
     * @returns a team
     */
    public get joinedTeams() {
        return this._joinedTeams;
    };
    /**
     * Sets the joinedTeams property value. The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
     * @param value Value to set for the joinedTeams property.
     */
    public set joinedTeams(value: Team[] | undefined) {
        this._joinedTeams = value;
    };
    /**
     * Gets the lastPasswordChangeDateTime property value. The time when this Azure AD user last changed their password or when their password was created, whichever date the latest action was performed. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.
     * @returns a Date
     */
    public get lastPasswordChangeDateTime() {
        return this._lastPasswordChangeDateTime;
    };
    /**
     * Sets the lastPasswordChangeDateTime property value. The time when this Azure AD user last changed their password or when their password was created, whichever date the latest action was performed. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.
     * @param value Value to set for the lastPasswordChangeDateTime property.
     */
    public set lastPasswordChangeDateTime(value: Date | undefined) {
        this._lastPasswordChangeDateTime = value;
    };
    /**
     * Gets the legalAgeGroupClassification property value. Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select.
     * @returns a string
     */
    public get legalAgeGroupClassification() {
        return this._legalAgeGroupClassification;
    };
    /**
     * Sets the legalAgeGroupClassification property value. Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select.
     * @param value Value to set for the legalAgeGroupClassification property.
     */
    public set legalAgeGroupClassification(value: string | undefined) {
        this._legalAgeGroupClassification = value;
    };
    /**
     * Gets the licenseAssignmentStates property value. State of license assignments for this user. Read-only. Returned only on $select.
     * @returns a licenseAssignmentState
     */
    public get licenseAssignmentStates() {
        return this._licenseAssignmentStates;
    };
    /**
     * Sets the licenseAssignmentStates property value. State of license assignments for this user. Read-only. Returned only on $select.
     * @param value Value to set for the licenseAssignmentStates property.
     */
    public set licenseAssignmentStates(value: LicenseAssignmentState[] | undefined) {
        this._licenseAssignmentStates = value;
    };
    /**
     * Gets the licenseDetails property value. A collection of this user's license details. Read-only.
     * @returns a licenseDetails
     */
    public get licenseDetails() {
        return this._licenseDetails;
    };
    /**
     * Sets the licenseDetails property value. A collection of this user's license details. Read-only.
     * @param value Value to set for the licenseDetails property.
     */
    public set licenseDetails(value: LicenseDetails[] | undefined) {
        this._licenseDetails = value;
    };
    /**
     * Gets the mail property value. The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com.Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com.Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Gets the mailboxSettings property value. Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone. Returned only on $select.
     * @returns a mailboxSettings
     */
    public get mailboxSettings() {
        return this._mailboxSettings;
    };
    /**
     * Sets the mailboxSettings property value. Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone. Returned only on $select.
     * @param value Value to set for the mailboxSettings property.
     */
    public set mailboxSettings(value: MailboxSettings | undefined) {
        this._mailboxSettings = value;
    };
    /**
     * Gets the mailFolders property value. The user's mail folders. Read-only. Nullable.
     * @returns a mailFolder
     */
    public get mailFolders() {
        return this._mailFolders;
    };
    /**
     * Sets the mailFolders property value. The user's mail folders. Read-only. Nullable.
     * @param value Value to set for the mailFolders property.
     */
    public set mailFolders(value: MailFolder[] | undefined) {
        this._mailFolders = value;
    };
    /**
     * Gets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the managedAppRegistrations property value. Zero or more managed app registrations that belong to the user.
     * @returns a managedAppRegistration
     */
    public get managedAppRegistrations() {
        return this._managedAppRegistrations;
    };
    /**
     * Sets the managedAppRegistrations property value. Zero or more managed app registrations that belong to the user.
     * @param value Value to set for the managedAppRegistrations property.
     */
    public set managedAppRegistrations(value: ManagedAppRegistration[] | undefined) {
        this._managedAppRegistrations = value;
    };
    /**
     * Gets the managedDevices property value. The managed devices associated with the user.
     * @returns a managedDevice
     */
    public get managedDevices() {
        return this._managedDevices;
    };
    /**
     * Sets the managedDevices property value. The managed devices associated with the user.
     * @param value Value to set for the managedDevices property.
     */
    public set managedDevices(value: ManagedDevice[] | undefined) {
        this._managedDevices = value;
    };
    /**
     * Gets the manager property value. The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
     * @returns a directoryObject
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
     * @param value Value to set for the manager property.
     */
    public set manager(value: DirectoryObject | undefined) {
        this._manager = value;
    };
    /**
     * Gets the memberOf property value. The groups and directory roles that the user is a member of. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. The groups and directory roles that the user is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Gets the messages property value. The messages in a mailbox or folder. Read-only. Nullable.
     * @returns a message
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. The messages in a mailbox or folder. Read-only. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: Message[] | undefined) {
        this._messages = value;
    };
    /**
     * Gets the mobilePhone property value. The primary cellular telephone number for the user. Read-only for users synced from on-premises directory. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Sets the mobilePhone property value. The primary cellular telephone number for the user. Read-only for users synced from on-premises directory. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        this._mobilePhone = value;
    };
    /**
     * Gets the mySite property value. The URL for the user's personal site. Returned only on $select.
     * @returns a string
     */
    public get mySite() {
        return this._mySite;
    };
    /**
     * Sets the mySite property value. The URL for the user's personal site. Returned only on $select.
     * @param value Value to set for the mySite property.
     */
    public set mySite(value: string | undefined) {
        this._mySite = value;
    };
    /**
     * Gets the oauth2PermissionGrants property value. 
     * @returns a oAuth2PermissionGrant
     */
    public get oauth2PermissionGrants() {
        return this._oauth2PermissionGrants;
    };
    /**
     * Sets the oauth2PermissionGrants property value. 
     * @param value Value to set for the oauth2PermissionGrants property.
     */
    public set oauth2PermissionGrants(value: OAuth2PermissionGrant[] | undefined) {
        this._oauth2PermissionGrants = value;
    };
    /**
     * Gets the officeLocation property value. The office location in the user's place of business. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. The office location in the user's place of business. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        this._officeLocation = value;
    };
    /**
     * Gets the onenote property value. Read-only.
     * @returns a onenote
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. Read-only.
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        this._onenote = value;
    };
    /**
     * Gets the onlineMeetings property value. 
     * @returns a onlineMeeting
     */
    public get onlineMeetings() {
        return this._onlineMeetings;
    };
    /**
     * Sets the onlineMeetings property value. 
     * @param value Value to set for the onlineMeetings property.
     */
    public set onlineMeetings(value: OnlineMeeting[] | undefined) {
        this._onlineMeetings = value;
    };
    /**
     * Gets the onPremisesDistinguishedName property value. Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.
     * @returns a string
     */
    public get onPremisesDistinguishedName() {
        return this._onPremisesDistinguishedName;
    };
    /**
     * Sets the onPremisesDistinguishedName property value. Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.
     * @param value Value to set for the onPremisesDistinguishedName property.
     */
    public set onPremisesDistinguishedName(value: string | undefined) {
        this._onPremisesDistinguishedName = value;
    };
    /**
     * Gets the onPremisesDomainName property value. Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.
     * @returns a string
     */
    public get onPremisesDomainName() {
        return this._onPremisesDomainName;
    };
    /**
     * Sets the onPremisesDomainName property value. Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.
     * @param value Value to set for the onPremisesDomainName property.
     */
    public set onPremisesDomainName(value: string | undefined) {
        this._onPremisesDomainName = value;
    };
    /**
     * Gets the onPremisesExtensionAttributes property value. Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15.
     * @returns a onPremisesExtensionAttributes
     */
    public get onPremisesExtensionAttributes() {
        return this._onPremisesExtensionAttributes;
    };
    /**
     * Sets the onPremisesExtensionAttributes property value. Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15.
     * @param value Value to set for the onPremisesExtensionAttributes property.
     */
    public set onPremisesExtensionAttributes(value: OnPremisesExtensionAttributes | undefined) {
        this._onPremisesExtensionAttributes = value;
    };
    /**
     * Gets the onPremisesImmutableId property value. This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. NOTE: The $ and _ characters cannot be used when specifying this property. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in)..
     * @returns a string
     */
    public get onPremisesImmutableId() {
        return this._onPremisesImmutableId;
    };
    /**
     * Sets the onPremisesImmutableId property value. This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. NOTE: The $ and _ characters cannot be used when specifying this property. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in)..
     * @param value Value to set for the onPremisesImmutableId property.
     */
    public set onPremisesImmutableId(value: string | undefined) {
        this._onPremisesImmutableId = value;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the object was synced with the on-premises directory; for example: 2013-02-16T03:04:54Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the object was synced with the on-premises directory; for example: 2013-02-16T03:04:54Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned only on $select. Supports $filter (eq, not, ge, le).
     * @returns a onPremisesProvisioningError
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned only on $select. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        this._onPremisesProvisioningErrors = value;
    };
    /**
     * Gets the onPremisesSamAccountName property value. Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get onPremisesSamAccountName() {
        return this._onPremisesSamAccountName;
    };
    /**
     * Sets the onPremisesSamAccountName property value. Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @param value Value to set for the onPremisesSamAccountName property.
     */
    public set onPremisesSamAccountName(value: string | undefined) {
        this._onPremisesSamAccountName = value;
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Returned only on $select. Supports $filter (eq) on null values only.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Returned only on $select. Supports $filter (eq) on null values only.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        this._onPremisesSecurityIdentifier = value;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Gets the onPremisesUserPrincipalName property value. Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get onPremisesUserPrincipalName() {
        return this._onPremisesUserPrincipalName;
    };
    /**
     * Sets the onPremisesUserPrincipalName property value. Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @param value Value to set for the onPremisesUserPrincipalName property.
     */
    public set onPremisesUserPrincipalName(value: string | undefined) {
        this._onPremisesUserPrincipalName = value;
    };
    /**
     * Gets the otherMails property value. A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. NOTE: This property cannot contain accent characters. Returned only on $select. Supports $filter (eq, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get otherMails() {
        return this._otherMails;
    };
    /**
     * Sets the otherMails property value. A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. NOTE: This property cannot contain accent characters. Returned only on $select. Supports $filter (eq, not, ge, le, in, startsWith).
     * @param value Value to set for the otherMails property.
     */
    public set otherMails(value: string[] | undefined) {
        this._otherMails = value;
    };
    /**
     * Gets the outlook property value. Read-only.
     * @returns a outlookUser
     */
    public get outlook() {
        return this._outlook;
    };
    /**
     * Sets the outlook property value. Read-only.
     * @param value Value to set for the outlook property.
     */
    public set outlook(value: OutlookUser | undefined) {
        this._outlook = value;
    };
    /**
     * Gets the ownedDevices property value. Devices that are owned by the user. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get ownedDevices() {
        return this._ownedDevices;
    };
    /**
     * Sets the ownedDevices property value. Devices that are owned by the user. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the ownedDevices property.
     */
    public set ownedDevices(value: DirectoryObject[] | undefined) {
        this._ownedDevices = value;
    };
    /**
     * Gets the ownedObjects property value. Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get ownedObjects() {
        return this._ownedObjects;
    };
    /**
     * Sets the ownedObjects property value. Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the ownedObjects property.
     */
    public set ownedObjects(value: DirectoryObject[] | undefined) {
        this._ownedObjects = value;
    };
    /**
     * Gets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. Returned only on $select. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values).
     * @returns a string
     */
    public get passwordPolicies() {
        return this._passwordPolicies;
    };
    /**
     * Sets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. Returned only on $select. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values).
     * @param value Value to set for the passwordPolicies property.
     */
    public set passwordPolicies(value: string | undefined) {
        this._passwordPolicies = value;
    };
    /**
     * Gets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user’s password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon.Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a passwordProfile
     */
    public get passwordProfile() {
        return this._passwordProfile;
    };
    /**
     * Sets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user’s password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon.Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the passwordProfile property.
     */
    public set passwordProfile(value: PasswordProfile | undefined) {
        this._passwordProfile = value;
    };
    /**
     * Gets the pastProjects property value. A list for the user to enumerate their past projects. Returned only on $select.
     * @returns a string
     */
    public get pastProjects() {
        return this._pastProjects;
    };
    /**
     * Sets the pastProjects property value. A list for the user to enumerate their past projects. Returned only on $select.
     * @param value Value to set for the pastProjects property.
     */
    public set pastProjects(value: string[] | undefined) {
        this._pastProjects = value;
    };
    /**
     * Gets the people property value. People that are relevant to the user. Read-only. Nullable.
     * @returns a person
     */
    public get people() {
        return this._people;
    };
    /**
     * Sets the people property value. People that are relevant to the user. Read-only. Nullable.
     * @param value Value to set for the people property.
     */
    public set people(value: Person[] | undefined) {
        this._people = value;
    };
    /**
     * Gets the photo property value. The user's profile photo. Read-only.
     * @returns a profilePhoto
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. The user's profile photo. Read-only.
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        this._photo = value;
    };
    /**
     * Gets the photos property value. Read-only. Nullable.
     * @returns a profilePhoto
     */
    public get photos() {
        return this._photos;
    };
    /**
     * Sets the photos property value. Read-only. Nullable.
     * @param value Value to set for the photos property.
     */
    public set photos(value: ProfilePhoto[] | undefined) {
        this._photos = value;
    };
    /**
     * Gets the planner property value. Entry-point to the Planner resource that might exist for a user. Read-only.
     * @returns a plannerUser
     */
    public get planner() {
        return this._planner;
    };
    /**
     * Sets the planner property value. Entry-point to the Planner resource that might exist for a user. Read-only.
     * @param value Value to set for the planner property.
     */
    public set planner(value: PlannerUser | undefined) {
        this._planner = value;
    };
    /**
     * Gets the postalCode property value. The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Sets the postalCode property value. The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        this._postalCode = value;
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        this._preferredLanguage = value;
    };
    /**
     * Gets the preferredName property value. The preferred name for the user. Returned only on $select.
     * @returns a string
     */
    public get preferredName() {
        return this._preferredName;
    };
    /**
     * Sets the preferredName property value. The preferred name for the user. Returned only on $select.
     * @param value Value to set for the preferredName property.
     */
    public set preferredName(value: string | undefined) {
        this._preferredName = value;
    };
    /**
     * Gets the presence property value. 
     * @returns a presence
     */
    public get presence() {
        return this._presence;
    };
    /**
     * Sets the presence property value. 
     * @param value Value to set for the presence property.
     */
    public set presence(value: Presence | undefined) {
        this._presence = value;
    };
    /**
     * Gets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le).
     * @returns a provisionedPlan
     */
    public get provisionedPlans() {
        return this._provisionedPlans;
    };
    /**
     * Sets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the provisionedPlans property.
     */
    public set provisionedPlans(value: ProvisionedPlan[] | undefined) {
        this._provisionedPlans = value;
    };
    /**
     * Gets the proxyAddresses property value. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Sets the proxyAddresses property value. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        this._proxyAddresses = value;
    };
    /**
     * Gets the registeredDevices property value. Devices that are registered for the user. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get registeredDevices() {
        return this._registeredDevices;
    };
    /**
     * Sets the registeredDevices property value. Devices that are registered for the user. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredDevices property.
     */
    public set registeredDevices(value: DirectoryObject[] | undefined) {
        this._registeredDevices = value;
    };
    /**
     * Gets the responsibilities property value. A list for the user to enumerate their responsibilities. Returned only on $select.
     * @returns a string
     */
    public get responsibilities() {
        return this._responsibilities;
    };
    /**
     * Sets the responsibilities property value. A list for the user to enumerate their responsibilities. Returned only on $select.
     * @param value Value to set for the responsibilities property.
     */
    public set responsibilities(value: string[] | undefined) {
        this._responsibilities = value;
    };
    /**
     * Gets the schools property value. A list for the user to enumerate the schools they have attended. Returned only on $select.
     * @returns a string
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. A list for the user to enumerate the schools they have attended. Returned only on $select.
     * @param value Value to set for the schools property.
     */
    public set schools(value: string[] | undefined) {
        this._schools = value;
    };
    /**
     * Gets the scopedRoleMemberOf property value. The scoped-role administrative unit memberships for this user. Read-only. Nullable.
     * @returns a scopedRoleMembership
     */
    public get scopedRoleMemberOf() {
        return this._scopedRoleMemberOf;
    };
    /**
     * Sets the scopedRoleMemberOf property value. The scoped-role administrative unit memberships for this user. Read-only. Nullable.
     * @param value Value to set for the scopedRoleMemberOf property.
     */
    public set scopedRoleMemberOf(value: ScopedRoleMembership[] | undefined) {
        this._scopedRoleMemberOf = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("aboutMe", this.aboutMe);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues<UserActivity>("activities", this.activities);
        writer.writeStringValue("ageGroup", this.ageGroup);
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("agreementAcceptances", this.agreementAcceptances);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues<AssignedLicense>("assignedLicenses", this.assignedLicenses);
        writer.writeCollectionOfObjectValues<AssignedPlan>("assignedPlans", this.assignedPlans);
        writer.writeObjectValue<Authentication>("authentication", this.authentication);
        writer.writeDateValue("birthday", this.birthday);
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        writer.writeObjectValue<Calendar>("calendar", this.calendar);
        writer.writeCollectionOfObjectValues<CalendarGroup>("calendarGroups", this.calendarGroups);
        writer.writeCollectionOfObjectValues<Calendar>("calendars", this.calendars);
        writer.writeCollectionOfObjectValues<Event>("calendarView", this.calendarView);
        writer.writeCollectionOfObjectValues<Chat>("chats", this.chats);
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("consentProvidedForMinor", this.consentProvidedForMinor);
        writer.writeCollectionOfObjectValues<ContactFolder>("contactFolders", this.contactFolders);
        writer.writeCollectionOfObjectValues<Contact>("contacts", this.contacts);
        writer.writeStringValue("country", this.country);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues<DirectoryObject>("createdObjects", this.createdObjects);
        writer.writeStringValue("creationType", this.creationType);
        writer.writeStringValue("department", this.department);
        writer.writeNumberValue("deviceEnrollmentLimit", this.deviceEnrollmentLimit);
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("deviceManagementTroubleshootingEvents", this.deviceManagementTroubleshootingEvents);
        writer.writeCollectionOfObjectValues<DirectoryObject>("directReports", this.directReports);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<Drive>("drives", this.drives);
        writer.writeDateValue("employeeHireDate", this.employeeHireDate);
        writer.writeStringValue("employeeId", this.employeeId);
        writer.writeObjectValue<EmployeeOrgData>("employeeOrgData", this.employeeOrgData);
        writer.writeStringValue("employeeType", this.employeeType);
        writer.writeCollectionOfObjectValues<Event>("events", this.events);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeStringValue("externalUserState", this.externalUserState);
        writer.writeDateValue("externalUserStateChangeDateTime", this.externalUserStateChangeDateTime);
        writer.writeStringValue("faxNumber", this.faxNumber);
        writer.writeCollectionOfObjectValues<Site>("followedSites", this.followedSites);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeDateValue("hireDate", this.hireDate);
        writer.writeCollectionOfObjectValues<ObjectIdentity>("identities", this.identities);
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", this.imAddresses);
        writer.writeObjectValue<InferenceClassification>("inferenceClassification", this.inferenceClassification);
        writer.writeObjectValue<OfficeGraphInsights>("insights", this.insights);
        writer.writeCollectionOfPrimitiveValues<string>("interests", this.interests);
        writer.writeBooleanValue("isResourceAccount", this.isResourceAccount);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeCollectionOfObjectValues<Team>("joinedTeams", this.joinedTeams);
        writer.writeDateValue("lastPasswordChangeDateTime", this.lastPasswordChangeDateTime);
        writer.writeStringValue("legalAgeGroupClassification", this.legalAgeGroupClassification);
        writer.writeCollectionOfObjectValues<LicenseAssignmentState>("licenseAssignmentStates", this.licenseAssignmentStates);
        writer.writeCollectionOfObjectValues<LicenseDetails>("licenseDetails", this.licenseDetails);
        writer.writeStringValue("mail", this.mail);
        writer.writeObjectValue<MailboxSettings>("mailboxSettings", this.mailboxSettings);
        writer.writeCollectionOfObjectValues<MailFolder>("mailFolders", this.mailFolders);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("managedAppRegistrations", this.managedAppRegistrations);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", this.managedDevices);
        writer.writeObjectValue<DirectoryObject>("manager", this.manager);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeCollectionOfObjectValues<Message>("messages", this.messages);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeStringValue("mySite", this.mySite);
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("oauth2PermissionGrants", this.oauth2PermissionGrants);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeObjectValue<Onenote>("onenote", this.onenote);
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", this.onlineMeetings);
        writer.writeStringValue("onPremisesDistinguishedName", this.onPremisesDistinguishedName);
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        writer.writeObjectValue<OnPremisesExtensionAttributes>("onPremisesExtensionAttributes", this.onPremisesExtensionAttributes);
        writer.writeStringValue("onPremisesImmutableId", this.onPremisesImmutableId);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("onPremisesUserPrincipalName", this.onPremisesUserPrincipalName);
        writer.writeCollectionOfPrimitiveValues<string>("otherMails", this.otherMails);
        writer.writeObjectValue<OutlookUser>("outlook", this.outlook);
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedDevices", this.ownedDevices);
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedObjects", this.ownedObjects);
        writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        writer.writeObjectValue<PasswordProfile>("passwordProfile", this.passwordProfile);
        writer.writeCollectionOfPrimitiveValues<string>("pastProjects", this.pastProjects);
        writer.writeCollectionOfObjectValues<Person>("people", this.people);
        writer.writeObjectValue<ProfilePhoto>("photo", this.photo);
        writer.writeCollectionOfObjectValues<ProfilePhoto>("photos", this.photos);
        writer.writeObjectValue<PlannerUser>("planner", this.planner);
        writer.writeStringValue("postalCode", this.postalCode);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeStringValue("preferredName", this.preferredName);
        writer.writeObjectValue<Presence>("presence", this.presence);
        writer.writeCollectionOfObjectValues<ProvisionedPlan>("provisionedPlans", this.provisionedPlans);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredDevices", this.registeredDevices);
        writer.writeCollectionOfPrimitiveValues<string>("responsibilities", this.responsibilities);
        writer.writeCollectionOfPrimitiveValues<string>("schools", this.schools);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedRoleMemberOf", this.scopedRoleMemberOf);
        writer.writeObjectValue<UserSettings>("settings", this.settings);
        writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        writer.writeDateValue("signInSessionsValidFromDateTime", this.signInSessionsValidFromDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("skills", this.skills);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("streetAddress", this.streetAddress);
        writer.writeStringValue("surname", this.surname);
        writer.writeObjectValue<UserTeamwork>("teamwork", this.teamwork);
        writer.writeObjectValue<Todo>("todo", this.todo);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeStringValue("usageLocation", this.usageLocation);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeStringValue("userType", this.userType);
    };
    /**
     * Gets the settings property value. Read-only. Nullable.
     * @returns a userSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Read-only. Nullable.
     * @param value Value to set for the settings property.
     */
    public set settings(value: UserSettings | undefined) {
        this._settings = value;
    };
    /**
     * Gets the showInAddressList property value. true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Returned only on $select. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get showInAddressList() {
        return this._showInAddressList;
    };
    /**
     * Sets the showInAddressList property value. true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Returned only on $select. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the showInAddressList property.
     */
    public set showInAddressList(value: boolean | undefined) {
        this._showInAddressList = value;
    };
    /**
     * Gets the signInSessionsValidFromDateTime property value. Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. Returned only on $select.
     * @returns a Date
     */
    public get signInSessionsValidFromDateTime() {
        return this._signInSessionsValidFromDateTime;
    };
    /**
     * Sets the signInSessionsValidFromDateTime property value. Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. Returned only on $select.
     * @param value Value to set for the signInSessionsValidFromDateTime property.
     */
    public set signInSessionsValidFromDateTime(value: Date | undefined) {
        this._signInSessionsValidFromDateTime = value;
    };
    /**
     * Gets the skills property value. A list for the user to enumerate their skills. Returned only on $select.
     * @returns a string
     */
    public get skills() {
        return this._skills;
    };
    /**
     * Sets the skills property value. A list for the user to enumerate their skills. Returned only on $select.
     * @param value Value to set for the skills property.
     */
    public set skills(value: string[] | undefined) {
        this._skills = value;
    };
    /**
     * Gets the state property value. The state or province in the user's address. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state or province in the user's address. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the streetAddress property value. The street address of the user's place of business. Maximum length is 1024 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get streetAddress() {
        return this._streetAddress;
    };
    /**
     * Sets the streetAddress property value. The street address of the user's place of business. Maximum length is 1024 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the streetAddress property.
     */
    public set streetAddress(value: string | undefined) {
        this._streetAddress = value;
    };
    /**
     * Gets the surname property value. The user's surname (family name or last name). Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The user's surname (family name or last name). Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Gets the teamwork property value. A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @returns a userTeamwork
     */
    public get teamwork() {
        return this._teamwork;
    };
    /**
     * Sets the teamwork property value. A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @param value Value to set for the teamwork property.
     */
    public set teamwork(value: UserTeamwork | undefined) {
        this._teamwork = value;
    };
    /**
     * Gets the todo property value. Represents the To Do services available to a user.
     * @returns a todo
     */
    public get todo() {
        return this._todo;
    };
    /**
     * Sets the todo property value. Represents the To Do services available to a user.
     * @param value Value to set for the todo property.
     */
    public set todo(value: Todo | undefined) {
        this._todo = value;
    };
    /**
     * Gets the transitiveMemberOf property value. 
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. 
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
    /**
     * Gets the usageLocation property value. A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get usageLocation() {
        return this._usageLocation;
    };
    /**
     * Sets the usageLocation property value. A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the usageLocation property.
     */
    public set usageLocation(value: string | undefined) {
        this._usageLocation = value;
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Gets the userType property value. A string value that can be used to classify user types in your directory, such as Member and Guest. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory?
     * @returns a string
     */
    public get userType() {
        return this._userType;
    };
    /**
     * Sets the userType property value. A string value that can be used to classify user types in your directory, such as Member and Guest. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory?
     * @param value Value to set for the userType property.
     */
    public set userType(value: string | undefined) {
        this._userType = value;
    };
}
