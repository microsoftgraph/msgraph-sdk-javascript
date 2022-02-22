import {AppRoleAssignment, AssignedLabel, AssignedLicense, Calendar, Conversation, ConversationThread, DirectoryObject, Drive, Event, Extension, GroupLifecyclePolicy, GroupSetting, LicenseProcessingState, Onenote, OnPremisesProvisioningError, PlannerGroup, ProfilePhoto, ResourceSpecificPermissionGrant, Site, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Group extends DirectoryObject implements Parsable {
    /** The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.  */
    private _acceptedSenders?: DirectoryObject[] | undefined;
    /** Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).  */
    private _allowExternalSenders?: boolean | undefined;
    /** Represents the app roles a group has been granted for an application. Supports $expand.  */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. Read-only.  */
    private _assignedLabels?: AssignedLabel[] | undefined;
    /** The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq).Read-only.  */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).  */
    private _autoSubscribeNewMembers?: boolean | undefined;
    /** The group's calendar. Read-only.  */
    private _calendar?: Calendar | undefined;
    /** The calendar view for the calendar. Read-only.  */
    private _calendarView?: Event[] | undefined;
    /** Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).  */
    private _classification?: string | undefined;
    /** The group's conversations.  */
    private _conversations?: Conversation[] | undefined;
    /** Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The user (or application) that created the group. NOTE: This is not set if the user is an administrator. Read-only.  */
    private _createdOnBehalfOf?: DirectoryObject | undefined;
    /** An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.  */
    private _description?: string | undefined;
    /** The display name for the group. This property is required when a group is created and cannot be cleared during updates. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.  */
    private _displayName?: string | undefined;
    /** The group's default drive. Read-only.  */
    private _drive?: Drive | undefined;
    /** The group's drives. Read-only.  */
    private _drives?: Drive[] | undefined;
    /** The group's calendar events.  */
    private _events?: Event[] | undefined;
    /** Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.  */
    private _expirationDateTime?: Date | undefined;
    /** The collection of open extensions defined for the group. Read-only. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** The collection of lifecycle policies for this group. Read-only. Nullable.  */
    private _groupLifecyclePolicies?: GroupLifecyclePolicy[] | undefined;
    /** Specifies the group type and its membership.  If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static.  Returned by default. Supports $filter (eq, not).  */
    private _groupTypes?: string[] | undefined;
    /** Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true). See an example. Supports $filter (eq).  */
    private _hasMembersWithLicenseErrors?: boolean | undefined;
    /** True if the group is not displayed in certain parts of the Outlook UI: the Address Book, address lists for selecting message recipients, and the Browse Groups dialog for searching groups; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).  */
    private _hideFromAddressLists?: boolean | undefined;
    /** True if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).  */
    private _hideFromOutlookClients?: boolean | undefined;
    private _isArchived?: boolean | undefined;
    /** Indicates whether this group can be assigned to an Azure Active Directory role or not. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).  */
    private _isAssignableToRole?: boolean | undefined;
    /** Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).  */
    private _isSubscribedByMail?: boolean | undefined;
    /** Indicates status of the group license assignment to all members of the group. Default value is false. Read-only. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete.Returned only on $select. Read-only.  */
    private _licenseProcessingState?: LicenseProcessingState | undefined;
    /** The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _mail?: string | undefined;
    /** Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not).  */
    private _mailEnabled?: boolean | undefined;
    /** The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _mailNickname?: string | undefined;
    /** Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.  */
    private _memberOf?: DirectoryObject[] | undefined;
    /** UMembers of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).  */
    private _members?: DirectoryObject[] | undefined;
    /** The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).  */
    private _membershipRule?: string | undefined;
    /** Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).  */
    private _membershipRuleProcessingState?: string | undefined;
    /** A list of group members with license errors from this group-based license assignment. Read-only.  */
    private _membersWithLicenseErrors?: DirectoryObject[] | undefined;
    /** Read-only.  */
    private _onenote?: Onenote | undefined;
    /** Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.  */
    private _onPremisesDomainName?: string | undefined;
    /** Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).  */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.  */
    private _onPremisesNetBiosName?: string | undefined;
    /** Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).  */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.  */
    private _onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter on null values. Read-only.  */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).  */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The owners of the group. Limited to 100 owners. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).  */
    private _owners?: DirectoryObject[] | undefined;
    /** The permission that has been granted for a group to a specific application. Supports $expand.  */
    private _permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /** The group's profile photo  */
    private _photo?: ProfilePhoto | undefined;
    /** The profile photos owned by the group. Read-only. Nullable.  */
    private _photos?: ProfilePhoto[] | undefined;
    /** Entry-point to Planner resource that might exist for a Unified Group.  */
    private _planner?: PlannerGroup | undefined;
    /** The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see  OneDrive Online Multi-Geo. Nullable. Returned by default.  */
    private _preferredDataLocation?: string | undefined;
    /** The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _preferredLanguage?: string | undefined;
    /** Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required to filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith).  */
    private _proxyAddresses?: string[] | undefined;
    /** The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable  */
    private _rejectedSenders?: DirectoryObject[] | undefined;
    /** Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.  */
    private _renewedDateTime?: Date | undefined;
    /** Specifies whether the group is a security group. Required. Returned by default. Supports $filter (eq, ne, not, in).  */
    private _securityEnabled?: boolean | undefined;
    /** Security identifier of the group, used in Windows scenarios. Returned by default.  */
    private _securityIdentifier?: string | undefined;
    /** Read-only. Nullable.  */
    private _settings?: GroupSetting[] | undefined;
    /** The list of SharePoint sites in this group. Access the default site with /sites/root.  */
    private _sites?: Site[] | undefined;
    private _team?: Team | undefined;
    /** Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.  */
    private _theme?: string | undefined;
    /** The group's conversation threads. Nullable.  */
    private _threads?: ConversationThread[] | undefined;
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    private _transitiveMembers?: DirectoryObject[] | undefined;
    /** Count of conversations that have received new posts since the signed-in user last visited the group. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).  */
    private _unseenCount?: number | undefined;
    /** Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.  */
    private _visibility?: string | undefined;
    /**
     * Instantiates a new group and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     * @returns a directoryObject
     */
    public get acceptedSenders() {
        return this._acceptedSenders;
    };
    /**
     * Gets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get allowExternalSenders() {
        return this._allowExternalSenders;
    };
    /**
     * Gets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Gets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. Read-only.
     * @returns a assignedLabel
     */
    public get assignedLabels() {
        return this._assignedLabels;
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq).Read-only.
     * @returns a assignedLicense
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Gets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get autoSubscribeNewMembers() {
        return this._autoSubscribeNewMembers;
    };
    /**
     * Gets the calendar property value. The group's calendar. Read-only.
     * @returns a calendar
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Read-only.
     * @returns a event
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Gets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @returns a string
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Gets the conversations property value. The group's conversations.
     * @returns a conversation
     */
    public get conversations() {
        return this._conversations;
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the createdOnBehalfOf property value. The user (or application) that created the group. NOTE: This is not set if the user is an administrator. Read-only.
     * @returns a directoryObject
     */
    public get createdOnBehalfOf() {
        return this._createdOnBehalfOf;
    };
    /**
     * Gets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The display name for the group. This property is required when a group is created and cannot be cleared during updates. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the drive property value. The group's default drive. Read-only.
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Gets the drives property value. The group's drives. Read-only.
     * @returns a drive
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Gets the events property value. The group's calendar events.
     * @returns a event
     */
    public get events() {
        return this._events;
    };
    /**
     * Gets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
     * @returns a groupLifecyclePolicy
     */
    public get groupLifecyclePolicies() {
        return this._groupLifecyclePolicies;
    };
    /**
     * Gets the groupTypes property value. Specifies the group type and its membership.  If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static.  Returned by default. Supports $filter (eq, not).
     * @returns a string
     */
    public get groupTypes() {
        return this._groupTypes;
    };
    /**
     * Gets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true). See an example. Supports $filter (eq).
     * @returns a boolean
     */
    public get hasMembersWithLicenseErrors() {
        return this._hasMembersWithLicenseErrors;
    };
    /**
     * Gets the hideFromAddressLists property value. True if the group is not displayed in certain parts of the Outlook UI: the Address Book, address lists for selecting message recipients, and the Browse Groups dialog for searching groups; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get hideFromAddressLists() {
        return this._hideFromAddressLists;
    };
    /**
     * Gets the hideFromOutlookClients property value. True if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get hideFromOutlookClients() {
        return this._hideFromOutlookClients;
    };
    /**
     * Gets the isArchived property value. 
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Gets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role or not. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isAssignableToRole() {
        return this._isAssignableToRole;
    };
    /**
     * Gets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get isSubscribedByMail() {
        return this._isSubscribedByMail;
    };
    /**
     * Gets the licenseProcessingState property value. Indicates status of the group license assignment to all members of the group. Default value is false. Read-only. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete.Returned only on $select. Read-only.
     * @returns a licenseProcessingState
     */
    public get licenseProcessingState() {
        return this._licenseProcessingState;
    };
    /**
     * Gets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Gets the mailEnabled property value. Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get mailEnabled() {
        return this._mailEnabled;
    };
    /**
     * Gets the mailNickname property value. The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Gets the memberOf property value. Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Gets the members property value. UMembers of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @returns a directoryObject
     */
    public get members() {
        return this._members;
    };
    /**
     * Gets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @returns a string
     */
    public get membershipRule() {
        return this._membershipRule;
    };
    /**
     * Gets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     * @returns a string
     */
    public get membershipRuleProcessingState() {
        return this._membershipRuleProcessingState;
    };
    /**
     * Gets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
     * @returns a directoryObject
     */
    public get membersWithLicenseErrors() {
        return this._membersWithLicenseErrors;
    };
    /**
     * Gets the onenote property value. Read-only.
     * @returns a onenote
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Gets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @returns a string
     */
    public get onPremisesDomainName() {
        return this._onPremisesDomainName;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Gets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @returns a string
     */
    public get onPremisesNetBiosName() {
        return this._onPremisesNetBiosName;
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     * @returns a onPremisesProvisioningError
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Gets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     * @returns a string
     */
    public get onPremisesSamAccountName() {
        return this._onPremisesSamAccountName;
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter on null values. Read-only.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Gets the owners property value. The owners of the group. Limited to 100 owners. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @returns a directoryObject
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Gets the permissionGrants property value. The permission that has been granted for a group to a specific application. Supports $expand.
     * @returns a resourceSpecificPermissionGrant
     */
    public get permissionGrants() {
        return this._permissionGrants;
    };
    /**
     * Gets the photo property value. The group's profile photo
     * @returns a profilePhoto
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Gets the photos property value. The profile photos owned by the group. Read-only. Nullable.
     * @returns a profilePhoto
     */
    public get photos() {
        return this._photos;
    };
    /**
     * Gets the planner property value. Entry-point to Planner resource that might exist for a Unified Group.
     * @returns a plannerGroup
     */
    public get planner() {
        return this._planner;
    };
    /**
     * Gets the preferredDataLocation property value. The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see  OneDrive Online Multi-Geo. Nullable. Returned by default.
     * @returns a string
     */
    public get preferredDataLocation() {
        return this._preferredDataLocation;
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Gets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required to filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Gets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     * @returns a directoryObject
     */
    public get rejectedSenders() {
        return this._rejectedSenders;
    };
    /**
     * Gets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get renewedDateTime() {
        return this._renewedDateTime;
    };
    /**
     * Gets the securityEnabled property value. Specifies whether the group is a security group. Required. Returned by default. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get securityEnabled() {
        return this._securityEnabled;
    };
    /**
     * Gets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
     * @returns a string
     */
    public get securityIdentifier() {
        return this._securityIdentifier;
    };
    /**
     * Gets the settings property value. Read-only. Nullable.
     * @returns a groupSetting
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Gets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @returns a site
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Gets the team property value. 
     * @returns a team
     */
    public get team() {
        return this._team;
    };
    /**
     * Gets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     * @returns a string
     */
    public get theme() {
        return this._theme;
    };
    /**
     * Gets the threads property value. The group's conversation threads. Nullable.
     * @returns a conversationThread
     */
    public get threads() {
        return this._threads;
    };
    /**
     * Gets the transitiveMemberOf property value. 
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Gets the transitiveMembers property value. 
     * @returns a directoryObject
     */
    public get transitiveMembers() {
        return this._transitiveMembers;
    };
    /**
     * Gets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a integer
     */
    public get unseenCount() {
        return this._unseenCount;
    };
    /**
     * Gets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["acceptedSenders", (o, n) => { (o as unknown as Group).acceptedSenders = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["allowExternalSenders", (o, n) => { (o as unknown as Group).allowExternalSenders = n.getBooleanValue(); }],
            ["appRoleAssignments", (o, n) => { (o as unknown as Group).appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(AppRoleAssignment); }],
            ["assignedLabels", (o, n) => { (o as unknown as Group).assignedLabels = n.getCollectionOfObjectValues<AssignedLabel>(AssignedLabel); }],
            ["assignedLicenses", (o, n) => { (o as unknown as Group).assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(AssignedLicense); }],
            ["autoSubscribeNewMembers", (o, n) => { (o as unknown as Group).autoSubscribeNewMembers = n.getBooleanValue(); }],
            ["calendar", (o, n) => { (o as unknown as Group).calendar = n.getObjectValue<Calendar>(Calendar); }],
            ["calendarView", (o, n) => { (o as unknown as Group).calendarView = n.getCollectionOfObjectValues<Event>(Event); }],
            ["classification", (o, n) => { (o as unknown as Group).classification = n.getStringValue(); }],
            ["conversations", (o, n) => { (o as unknown as Group).conversations = n.getCollectionOfObjectValues<Conversation>(Conversation); }],
            ["createdDateTime", (o, n) => { (o as unknown as Group).createdDateTime = n.getDateValue(); }],
            ["createdOnBehalfOf", (o, n) => { (o as unknown as Group).createdOnBehalfOf = n.getObjectValue<DirectoryObject>(DirectoryObject); }],
            ["description", (o, n) => { (o as unknown as Group).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as Group).displayName = n.getStringValue(); }],
            ["drive", (o, n) => { (o as unknown as Group).drive = n.getObjectValue<Drive>(Drive); }],
            ["drives", (o, n) => { (o as unknown as Group).drives = n.getCollectionOfObjectValues<Drive>(Drive); }],
            ["events", (o, n) => { (o as unknown as Group).events = n.getCollectionOfObjectValues<Event>(Event); }],
            ["expirationDateTime", (o, n) => { (o as unknown as Group).expirationDateTime = n.getDateValue(); }],
            ["extensions", (o, n) => { (o as unknown as Group).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["groupLifecyclePolicies", (o, n) => { (o as unknown as Group).groupLifecyclePolicies = n.getCollectionOfObjectValues<GroupLifecyclePolicy>(GroupLifecyclePolicy); }],
            ["groupTypes", (o, n) => { (o as unknown as Group).groupTypes = n.getCollectionOfPrimitiveValues<string>(); }],
            ["hasMembersWithLicenseErrors", (o, n) => { (o as unknown as Group).hasMembersWithLicenseErrors = n.getBooleanValue(); }],
            ["hideFromAddressLists", (o, n) => { (o as unknown as Group).hideFromAddressLists = n.getBooleanValue(); }],
            ["hideFromOutlookClients", (o, n) => { (o as unknown as Group).hideFromOutlookClients = n.getBooleanValue(); }],
            ["isArchived", (o, n) => { (o as unknown as Group).isArchived = n.getBooleanValue(); }],
            ["isAssignableToRole", (o, n) => { (o as unknown as Group).isAssignableToRole = n.getBooleanValue(); }],
            ["isSubscribedByMail", (o, n) => { (o as unknown as Group).isSubscribedByMail = n.getBooleanValue(); }],
            ["licenseProcessingState", (o, n) => { (o as unknown as Group).licenseProcessingState = n.getObjectValue<LicenseProcessingState>(LicenseProcessingState); }],
            ["mail", (o, n) => { (o as unknown as Group).mail = n.getStringValue(); }],
            ["mailEnabled", (o, n) => { (o as unknown as Group).mailEnabled = n.getBooleanValue(); }],
            ["mailNickname", (o, n) => { (o as unknown as Group).mailNickname = n.getStringValue(); }],
            ["memberOf", (o, n) => { (o as unknown as Group).memberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["members", (o, n) => { (o as unknown as Group).members = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["membershipRule", (o, n) => { (o as unknown as Group).membershipRule = n.getStringValue(); }],
            ["membershipRuleProcessingState", (o, n) => { (o as unknown as Group).membershipRuleProcessingState = n.getStringValue(); }],
            ["membersWithLicenseErrors", (o, n) => { (o as unknown as Group).membersWithLicenseErrors = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["onenote", (o, n) => { (o as unknown as Group).onenote = n.getObjectValue<Onenote>(Onenote); }],
            ["onPremisesDomainName", (o, n) => { (o as unknown as Group).onPremisesDomainName = n.getStringValue(); }],
            ["onPremisesLastSyncDateTime", (o, n) => { (o as unknown as Group).onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesNetBiosName", (o, n) => { (o as unknown as Group).onPremisesNetBiosName = n.getStringValue(); }],
            ["onPremisesProvisioningErrors", (o, n) => { (o as unknown as Group).onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(OnPremisesProvisioningError); }],
            ["onPremisesSamAccountName", (o, n) => { (o as unknown as Group).onPremisesSamAccountName = n.getStringValue(); }],
            ["onPremisesSecurityIdentifier", (o, n) => { (o as unknown as Group).onPremisesSecurityIdentifier = n.getStringValue(); }],
            ["onPremisesSyncEnabled", (o, n) => { (o as unknown as Group).onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["owners", (o, n) => { (o as unknown as Group).owners = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["permissionGrants", (o, n) => { (o as unknown as Group).permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(ResourceSpecificPermissionGrant); }],
            ["photo", (o, n) => { (o as unknown as Group).photo = n.getObjectValue<ProfilePhoto>(ProfilePhoto); }],
            ["photos", (o, n) => { (o as unknown as Group).photos = n.getCollectionOfObjectValues<ProfilePhoto>(ProfilePhoto); }],
            ["planner", (o, n) => { (o as unknown as Group).planner = n.getObjectValue<PlannerGroup>(PlannerGroup); }],
            ["preferredDataLocation", (o, n) => { (o as unknown as Group).preferredDataLocation = n.getStringValue(); }],
            ["preferredLanguage", (o, n) => { (o as unknown as Group).preferredLanguage = n.getStringValue(); }],
            ["proxyAddresses", (o, n) => { (o as unknown as Group).proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["rejectedSenders", (o, n) => { (o as unknown as Group).rejectedSenders = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["renewedDateTime", (o, n) => { (o as unknown as Group).renewedDateTime = n.getDateValue(); }],
            ["securityEnabled", (o, n) => { (o as unknown as Group).securityEnabled = n.getBooleanValue(); }],
            ["securityIdentifier", (o, n) => { (o as unknown as Group).securityIdentifier = n.getStringValue(); }],
            ["settings", (o, n) => { (o as unknown as Group).settings = n.getCollectionOfObjectValues<GroupSetting>(GroupSetting); }],
            ["sites", (o, n) => { (o as unknown as Group).sites = n.getCollectionOfObjectValues<Site>(Site); }],
            ["team", (o, n) => { (o as unknown as Group).team = n.getObjectValue<Team>(Team); }],
            ["theme", (o, n) => { (o as unknown as Group).theme = n.getStringValue(); }],
            ["threads", (o, n) => { (o as unknown as Group).threads = n.getCollectionOfObjectValues<ConversationThread>(ConversationThread); }],
            ["transitiveMemberOf", (o, n) => { (o as unknown as Group).transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["transitiveMembers", (o, n) => { (o as unknown as Group).transitiveMembers = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["unseenCount", (o, n) => { (o as unknown as Group).unseenCount = n.getNumberValue(); }],
            ["visibility", (o, n) => { (o as unknown as Group).visibility = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryObject>("acceptedSenders", this.acceptedSenders);
        writer.writeBooleanValue("allowExternalSenders", this.allowExternalSenders);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues<AssignedLabel>("assignedLabels", this.assignedLabels);
        writer.writeCollectionOfObjectValues<AssignedLicense>("assignedLicenses", this.assignedLicenses);
        writer.writeBooleanValue("autoSubscribeNewMembers", this.autoSubscribeNewMembers);
        writer.writeObjectValue<Calendar>("calendar", this.calendar);
        writer.writeCollectionOfObjectValues<Event>("calendarView", this.calendarView);
        writer.writeStringValue("classification", this.classification);
        writer.writeCollectionOfObjectValues<Conversation>("conversations", this.conversations);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DirectoryObject>("createdOnBehalfOf", this.createdOnBehalfOf);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<Drive>("drives", this.drives);
        writer.writeCollectionOfObjectValues<Event>("events", this.events);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeCollectionOfObjectValues<GroupLifecyclePolicy>("groupLifecyclePolicies", this.groupLifecyclePolicies);
        writer.writeCollectionOfPrimitiveValues<string>("groupTypes", this.groupTypes);
        writer.writeBooleanValue("hasMembersWithLicenseErrors", this.hasMembersWithLicenseErrors);
        writer.writeBooleanValue("hideFromAddressLists", this.hideFromAddressLists);
        writer.writeBooleanValue("hideFromOutlookClients", this.hideFromOutlookClients);
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeBooleanValue("isAssignableToRole", this.isAssignableToRole);
        writer.writeBooleanValue("isSubscribedByMail", this.isSubscribedByMail);
        writer.writeObjectValue<LicenseProcessingState>("licenseProcessingState", this.licenseProcessingState);
        writer.writeStringValue("mail", this.mail);
        writer.writeBooleanValue("mailEnabled", this.mailEnabled);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeCollectionOfObjectValues<DirectoryObject>("members", this.members);
        writer.writeStringValue("membershipRule", this.membershipRule);
        writer.writeStringValue("membershipRuleProcessingState", this.membershipRuleProcessingState);
        writer.writeCollectionOfObjectValues<DirectoryObject>("membersWithLicenseErrors", this.membersWithLicenseErrors);
        writer.writeObjectValue<Onenote>("onenote", this.onenote);
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeStringValue("onPremisesNetBiosName", this.onPremisesNetBiosName);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeCollectionOfObjectValues<DirectoryObject>("owners", this.owners);
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("permissionGrants", this.permissionGrants);
        writer.writeObjectValue<ProfilePhoto>("photo", this.photo);
        writer.writeCollectionOfObjectValues<ProfilePhoto>("photos", this.photos);
        writer.writeObjectValue<PlannerGroup>("planner", this.planner);
        writer.writeStringValue("preferredDataLocation", this.preferredDataLocation);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        writer.writeCollectionOfObjectValues<DirectoryObject>("rejectedSenders", this.rejectedSenders);
        writer.writeDateValue("renewedDateTime", this.renewedDateTime);
        writer.writeBooleanValue("securityEnabled", this.securityEnabled);
        writer.writeStringValue("securityIdentifier", this.securityIdentifier);
        writer.writeCollectionOfObjectValues<GroupSetting>("settings", this.settings);
        writer.writeCollectionOfObjectValues<Site>("sites", this.sites);
        writer.writeObjectValue<Team>("team", this.team);
        writer.writeStringValue("theme", this.theme);
        writer.writeCollectionOfObjectValues<ConversationThread>("threads", this.threads);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMembers", this.transitiveMembers);
        writer.writeNumberValue("unseenCount", this.unseenCount);
        writer.writeStringValue("visibility", this.visibility);
    };
    /**
     * Sets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     * @param value Value to set for the acceptedSenders property.
     */
    public set acceptedSenders(value: DirectoryObject[] | undefined) {
        this._acceptedSenders = value;
    };
    /**
     * Sets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the allowExternalSenders property.
     */
    public set allowExternalSenders(value: boolean | undefined) {
        this._allowExternalSenders = value;
    };
    /**
     * Sets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignments = value;
    };
    /**
     * Sets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. Read-only.
     * @param value Value to set for the assignedLabels property.
     */
    public set assignedLabels(value: AssignedLabel[] | undefined) {
        this._assignedLabels = value;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq).Read-only.
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        this._assignedLicenses = value;
    };
    /**
     * Sets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the autoSubscribeNewMembers property.
     */
    public set autoSubscribeNewMembers(value: boolean | undefined) {
        this._autoSubscribeNewMembers = value;
    };
    /**
     * Sets the calendar property value. The group's calendar. Read-only.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        this._calendar = value;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Read-only.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        this._calendarView = value;
    };
    /**
     * Sets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @param value Value to set for the classification property.
     */
    public set classification(value: string | undefined) {
        this._classification = value;
    };
    /**
     * Sets the conversations property value. The group's conversations.
     * @param value Value to set for the conversations property.
     */
    public set conversations(value: Conversation[] | undefined) {
        this._conversations = value;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the createdOnBehalfOf property value. The user (or application) that created the group. NOTE: This is not set if the user is an administrator. Read-only.
     * @param value Value to set for the createdOnBehalfOf property.
     */
    public set createdOnBehalfOf(value: DirectoryObject | undefined) {
        this._createdOnBehalfOf = value;
    };
    /**
     * Sets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The display name for the group. This property is required when a group is created and cannot be cleared during updates. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the drive property value. The group's default drive. Read-only.
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * Sets the drives property value. The group's drives. Read-only.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        this._drives = value;
    };
    /**
     * Sets the events property value. The group's calendar events.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        this._events = value;
    };
    /**
     * Sets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
     * @param value Value to set for the groupLifecyclePolicies property.
     */
    public set groupLifecyclePolicies(value: GroupLifecyclePolicy[] | undefined) {
        this._groupLifecyclePolicies = value;
    };
    /**
     * Sets the groupTypes property value. Specifies the group type and its membership.  If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static.  Returned by default. Supports $filter (eq, not).
     * @param value Value to set for the groupTypes property.
     */
    public set groupTypes(value: string[] | undefined) {
        this._groupTypes = value;
    };
    /**
     * Sets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true). See an example. Supports $filter (eq).
     * @param value Value to set for the hasMembersWithLicenseErrors property.
     */
    public set hasMembersWithLicenseErrors(value: boolean | undefined) {
        this._hasMembersWithLicenseErrors = value;
    };
    /**
     * Sets the hideFromAddressLists property value. True if the group is not displayed in certain parts of the Outlook UI: the Address Book, address lists for selecting message recipients, and the Browse Groups dialog for searching groups; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the hideFromAddressLists property.
     */
    public set hideFromAddressLists(value: boolean | undefined) {
        this._hideFromAddressLists = value;
    };
    /**
     * Sets the hideFromOutlookClients property value. True if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the hideFromOutlookClients property.
     */
    public set hideFromOutlookClients(value: boolean | undefined) {
        this._hideFromOutlookClients = value;
    };
    /**
     * Sets the isArchived property value. 
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        this._isArchived = value;
    };
    /**
     * Sets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role or not. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).
     * @param value Value to set for the isAssignableToRole property.
     */
    public set isAssignableToRole(value: boolean | undefined) {
        this._isAssignableToRole = value;
    };
    /**
     * Sets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the isSubscribedByMail property.
     */
    public set isSubscribedByMail(value: boolean | undefined) {
        this._isSubscribedByMail = value;
    };
    /**
     * Sets the licenseProcessingState property value. Indicates status of the group license assignment to all members of the group. Default value is false. Read-only. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete.Returned only on $select. Read-only.
     * @param value Value to set for the licenseProcessingState property.
     */
    public set licenseProcessingState(value: LicenseProcessingState | undefined) {
        this._licenseProcessingState = value;
    };
    /**
     * Sets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Sets the mailEnabled property value. Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not).
     * @param value Value to set for the mailEnabled property.
     */
    public set mailEnabled(value: boolean | undefined) {
        this._mailEnabled = value;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Sets the memberOf property value. Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Sets the members property value. UMembers of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        this._members = value;
    };
    /**
     * Sets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @param value Value to set for the membershipRule property.
     */
    public set membershipRule(value: string | undefined) {
        this._membershipRule = value;
    };
    /**
     * Sets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the membershipRuleProcessingState property.
     */
    public set membershipRuleProcessingState(value: string | undefined) {
        this._membershipRuleProcessingState = value;
    };
    /**
     * Sets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
     * @param value Value to set for the membersWithLicenseErrors property.
     */
    public set membersWithLicenseErrors(value: DirectoryObject[] | undefined) {
        this._membersWithLicenseErrors = value;
    };
    /**
     * Sets the onenote property value. Read-only.
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        this._onenote = value;
    };
    /**
     * Sets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @param value Value to set for the onPremisesDomainName property.
     */
    public set onPremisesDomainName(value: string | undefined) {
        this._onPremisesDomainName = value;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Sets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @param value Value to set for the onPremisesNetBiosName property.
     */
    public set onPremisesNetBiosName(value: string | undefined) {
        this._onPremisesNetBiosName = value;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        this._onPremisesProvisioningErrors = value;
    };
    /**
     * Sets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     * @param value Value to set for the onPremisesSamAccountName property.
     */
    public set onPremisesSamAccountName(value: string | undefined) {
        this._onPremisesSamAccountName = value;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter on null values. Read-only.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        this._onPremisesSecurityIdentifier = value;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Sets the owners property value. The owners of the group. Limited to 100 owners. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        this._owners = value;
    };
    /**
     * Sets the permissionGrants property value. The permission that has been granted for a group to a specific application. Supports $expand.
     * @param value Value to set for the permissionGrants property.
     */
    public set permissionGrants(value: ResourceSpecificPermissionGrant[] | undefined) {
        this._permissionGrants = value;
    };
    /**
     * Sets the photo property value. The group's profile photo
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        this._photo = value;
    };
    /**
     * Sets the photos property value. The profile photos owned by the group. Read-only. Nullable.
     * @param value Value to set for the photos property.
     */
    public set photos(value: ProfilePhoto[] | undefined) {
        this._photos = value;
    };
    /**
     * Sets the planner property value. Entry-point to Planner resource that might exist for a Unified Group.
     * @param value Value to set for the planner property.
     */
    public set planner(value: PlannerGroup | undefined) {
        this._planner = value;
    };
    /**
     * Sets the preferredDataLocation property value. The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see  OneDrive Online Multi-Geo. Nullable. Returned by default.
     * @param value Value to set for the preferredDataLocation property.
     */
    public set preferredDataLocation(value: string | undefined) {
        this._preferredDataLocation = value;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        this._preferredLanguage = value;
    };
    /**
     * Sets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required to filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        this._proxyAddresses = value;
    };
    /**
     * Sets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     * @param value Value to set for the rejectedSenders property.
     */
    public set rejectedSenders(value: DirectoryObject[] | undefined) {
        this._rejectedSenders = value;
    };
    /**
     * Sets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the renewedDateTime property.
     */
    public set renewedDateTime(value: Date | undefined) {
        this._renewedDateTime = value;
    };
    /**
     * Sets the securityEnabled property value. Specifies whether the group is a security group. Required. Returned by default. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the securityEnabled property.
     */
    public set securityEnabled(value: boolean | undefined) {
        this._securityEnabled = value;
    };
    /**
     * Sets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
     * @param value Value to set for the securityIdentifier property.
     */
    public set securityIdentifier(value: string | undefined) {
        this._securityIdentifier = value;
    };
    /**
     * Sets the settings property value. Read-only. Nullable.
     * @param value Value to set for the settings property.
     */
    public set settings(value: GroupSetting[] | undefined) {
        this._settings = value;
    };
    /**
     * Sets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param value Value to set for the sites property.
     */
    public set sites(value: Site[] | undefined) {
        this._sites = value;
    };
    /**
     * Sets the team property value. 
     * @param value Value to set for the team property.
     */
    public set team(value: Team | undefined) {
        this._team = value;
    };
    /**
     * Sets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     * @param value Value to set for the theme property.
     */
    public set theme(value: string | undefined) {
        this._theme = value;
    };
    /**
     * Sets the threads property value. The group's conversation threads. Nullable.
     * @param value Value to set for the threads property.
     */
    public set threads(value: ConversationThread[] | undefined) {
        this._threads = value;
    };
    /**
     * Sets the transitiveMemberOf property value. 
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
    /**
     * Sets the transitiveMembers property value. 
     * @param value Value to set for the transitiveMembers property.
     */
    public set transitiveMembers(value: DirectoryObject[] | undefined) {
        this._transitiveMembers = value;
    };
    /**
     * Sets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the unseenCount property.
     */
    public set unseenCount(value: number | undefined) {
        this._unseenCount = value;
    };
    /**
     * Sets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        this._visibility = value;
    };
}
