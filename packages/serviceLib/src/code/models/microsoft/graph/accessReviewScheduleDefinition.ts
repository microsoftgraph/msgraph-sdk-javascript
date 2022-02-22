import {AccessReviewInstance, AccessReviewNotificationRecipientItem, AccessReviewReviewerScope, AccessReviewScheduleSettings, AccessReviewScope, Entity, UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewScheduleDefinition extends Entity implements Parsable {
    /** Defines the list of additional users or group members to be notified of the access review progress.  */
    private _additionalNotificationRecipients?: AccessReviewNotificationRecipientItem[] | undefined;
    /** User who created this review. Read-only.  */
    private _createdBy?: UserIdentity | undefined;
    /** Timestamp when the access review series was created. Supports $select and $orderBy. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Description provided by review creators to provide more context of the review to admins. Supports $select.  */
    private _descriptionForAdmins?: string | undefined;
    /** Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select.  */
    private _descriptionForReviewers?: string | undefined;
    /** Name of the access review series. Supports $select and $orderBy. Required on create.  */
    private _displayName?: string | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select.  */
    private _fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.  */
    private _instanceEnumerationScope?: AccessReviewScope | undefined;
    /** If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.  */
    private _instances?: AccessReviewInstance[] | undefined;
    /** Timestamp when the access review series was last modified. Supports $select. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.  */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Defines the entities whose access is reviewed.  For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.  */
    private _scope?: AccessReviewScope | undefined;
    /** The settings for an access review series, see type definition below. Supports $select. Required on create.  */
    private _settings?: AccessReviewScheduleSettings | undefined;
    /** This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.  */
    private _status?: string | undefined;
    /**
     * Instantiates a new accessReviewScheduleDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the additionalNotificationRecipients property value. Defines the list of additional users or group members to be notified of the access review progress.
     * @returns a accessReviewNotificationRecipientItem
     */
    public get additionalNotificationRecipients() {
        return this._additionalNotificationRecipients;
    };
    /**
     * Gets the createdBy property value. User who created this review. Read-only.
     * @returns a userIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdDateTime property value. Timestamp when the access review series was created. Supports $select and $orderBy. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the descriptionForAdmins property value. Description provided by review creators to provide more context of the review to admins. Supports $select.
     * @returns a string
     */
    public get descriptionForAdmins() {
        return this._descriptionForAdmins;
    };
    /**
     * Gets the descriptionForReviewers property value. Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select.
     * @returns a string
     */
    public get descriptionForReviewers() {
        return this._descriptionForReviewers;
    };
    /**
     * Gets the displayName property value. Name of the access review series. Supports $select and $orderBy. Required on create.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select.
     * @returns a accessReviewReviewerScope
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Gets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @returns a accessReviewScope
     */
    public get instanceEnumerationScope() {
        return this._instanceEnumerationScope;
    };
    /**
     * Gets the instances property value. If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @returns a accessReviewInstance
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Gets the lastModifiedDateTime property value. Timestamp when the access review series was last modified. Supports $select. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @returns a accessReviewReviewerScope
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Gets the scope property value. Defines the entities whose access is reviewed.  For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @returns a accessReviewScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Gets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
     * @returns a accessReviewScheduleSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Gets the status property value. This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["additionalNotificationRecipients", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).additionalNotificationRecipients = n.getCollectionOfObjectValues<AccessReviewNotificationRecipientItem>(AccessReviewNotificationRecipientItem); }],
            ["createdBy", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).createdBy = n.getObjectValue<UserIdentity>(UserIdentity); }],
            ["createdDateTime", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).createdDateTime = n.getDateValue(); }],
            ["descriptionForAdmins", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).descriptionForAdmins = n.getStringValue(); }],
            ["descriptionForReviewers", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).descriptionForReviewers = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).displayName = n.getStringValue(); }],
            ["fallbackReviewers", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(AccessReviewReviewerScope); }],
            ["instanceEnumerationScope", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).instanceEnumerationScope = n.getObjectValue<AccessReviewScope>(AccessReviewScope); }],
            ["instances", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).instances = n.getCollectionOfObjectValues<AccessReviewInstance>(AccessReviewInstance); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).lastModifiedDateTime = n.getDateValue(); }],
            ["reviewers", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(AccessReviewReviewerScope); }],
            ["scope", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).scope = n.getObjectValue<AccessReviewScope>(AccessReviewScope); }],
            ["settings", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).settings = n.getObjectValue<AccessReviewScheduleSettings>(AccessReviewScheduleSettings); }],
            ["status", (o, n) => { (o as unknown as AccessReviewScheduleDefinition).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewNotificationRecipientItem>("additionalNotificationRecipients", this.additionalNotificationRecipients);
        writer.writeObjectValue<UserIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("descriptionForAdmins", this.descriptionForAdmins);
        writer.writeStringValue("descriptionForReviewers", this.descriptionForReviewers);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", this.fallbackReviewers);
        writer.writeObjectValue<AccessReviewScope>("instanceEnumerationScope", this.instanceEnumerationScope);
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("instances", this.instances);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", this.reviewers);
        writer.writeObjectValue<AccessReviewScope>("scope", this.scope);
        writer.writeObjectValue<AccessReviewScheduleSettings>("settings", this.settings);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Sets the additionalNotificationRecipients property value. Defines the list of additional users or group members to be notified of the access review progress.
     * @param value Value to set for the additionalNotificationRecipients property.
     */
    public set additionalNotificationRecipients(value: AccessReviewNotificationRecipientItem[] | undefined) {
        this._additionalNotificationRecipients = value;
    };
    /**
     * Sets the createdBy property value. User who created this review. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdDateTime property value. Timestamp when the access review series was created. Supports $select and $orderBy. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the descriptionForAdmins property value. Description provided by review creators to provide more context of the review to admins. Supports $select.
     * @param value Value to set for the descriptionForAdmins property.
     */
    public set descriptionForAdmins(value: string | undefined) {
        this._descriptionForAdmins = value;
    };
    /**
     * Sets the descriptionForReviewers property value. Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select.
     * @param value Value to set for the descriptionForReviewers property.
     */
    public set descriptionForReviewers(value: string | undefined) {
        this._descriptionForReviewers = value;
    };
    /**
     * Sets the displayName property value. Name of the access review series. Supports $select and $orderBy. Required on create.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._fallbackReviewers = value;
    };
    /**
     * Sets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @param value Value to set for the instanceEnumerationScope property.
     */
    public set instanceEnumerationScope(value: AccessReviewScope | undefined) {
        this._instanceEnumerationScope = value;
    };
    /**
     * Sets the instances property value. If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param value Value to set for the instances property.
     */
    public set instances(value: AccessReviewInstance[] | undefined) {
        this._instances = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. Timestamp when the access review series was last modified. Supports $select. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._reviewers = value;
    };
    /**
     * Sets the scope property value. Defines the entities whose access is reviewed.  For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
     * @param value Value to set for the scope property.
     */
    public set scope(value: AccessReviewScope | undefined) {
        this._scope = value;
    };
    /**
     * Sets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
     * @param value Value to set for the settings property.
     */
    public set settings(value: AccessReviewScheduleSettings | undefined) {
        this._settings = value;
    };
    /**
     * Sets the status property value. This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
