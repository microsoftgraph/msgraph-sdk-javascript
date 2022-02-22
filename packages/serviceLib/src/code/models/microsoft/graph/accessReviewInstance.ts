import {AccessReviewInstanceDecisionItem, AccessReviewReviewer, AccessReviewReviewerScope, AccessReviewScope, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstance extends Entity implements Parsable {
    /** Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.  */
    private _contactedReviewers?: AccessReviewReviewer[] | undefined;
    /** Each principal reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.  */
    private _decisions?: AccessReviewInstanceDecisionItem[] | undefined;
    /** DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.  */
    private _endDateTime?: Date | undefined;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select.  */
    private _fallbackReviewers?: AccessReviewReviewerScope[] | undefined;
    /** This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.  */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.  */
    private _scope?: AccessReviewScope | undefined;
    /** DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.  */
    private _startDateTime?: Date | undefined;
    /** Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.  */
    private _status?: string | undefined;
    /**
     * Instantiates a new accessReviewInstance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactedReviewers property value. Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     * @returns a accessReviewReviewer
     */
    public get contactedReviewers() {
        return this._contactedReviewers;
    };
    /**
     * Gets the decisions property value. Each principal reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     * @returns a accessReviewInstanceDecisionItem
     */
    public get decisions() {
        return this._decisions;
    };
    /**
     * Gets the endDateTime property value. DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select.
     * @returns a accessReviewReviewerScope
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Gets the reviewers property value. This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @returns a accessReviewReviewerScope
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Gets the scope property value. Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
     * @returns a accessReviewScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Gets the startDateTime property value. DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the status property value. Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
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
            ["contactedReviewers", (o, n) => { (o as unknown as AccessReviewInstance).contactedReviewers = n.getCollectionOfObjectValues<AccessReviewReviewer>(AccessReviewReviewer); }],
            ["decisions", (o, n) => { (o as unknown as AccessReviewInstance).decisions = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItem>(AccessReviewInstanceDecisionItem); }],
            ["endDateTime", (o, n) => { (o as unknown as AccessReviewInstance).endDateTime = n.getDateValue(); }],
            ["fallbackReviewers", (o, n) => { (o as unknown as AccessReviewInstance).fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(AccessReviewReviewerScope); }],
            ["reviewers", (o, n) => { (o as unknown as AccessReviewInstance).reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(AccessReviewReviewerScope); }],
            ["scope", (o, n) => { (o as unknown as AccessReviewInstance).scope = n.getObjectValue<AccessReviewScope>(AccessReviewScope); }],
            ["startDateTime", (o, n) => { (o as unknown as AccessReviewInstance).startDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as AccessReviewInstance).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewReviewer>("contactedReviewers", this.contactedReviewers);
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("decisions", this.decisions);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", this.fallbackReviewers);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", this.reviewers);
        writer.writeObjectValue<AccessReviewScope>("scope", this.scope);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Sets the contactedReviewers property value. Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     * @param value Value to set for the contactedReviewers property.
     */
    public set contactedReviewers(value: AccessReviewReviewer[] | undefined) {
        this._contactedReviewers = value;
    };
    /**
     * Sets the decisions property value. Each principal reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     * @param value Value to set for the decisions property.
     */
    public set decisions(value: AccessReviewInstanceDecisionItem[] | undefined) {
        this._decisions = value;
    };
    /**
     * Sets the endDateTime property value. DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. Supports $select.
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._fallbackReviewers = value;
    };
    /**
     * Sets the reviewers property value. This collection of access review scopes is used to define who the reviewers are. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._reviewers = value;
    };
    /**
     * Sets the scope property value. Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
     * @param value Value to set for the scope property.
     */
    public set scope(value: AccessReviewScope | undefined) {
        this._scope = value;
    };
    /**
     * Sets the startDateTime property value. DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the status property value. Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
