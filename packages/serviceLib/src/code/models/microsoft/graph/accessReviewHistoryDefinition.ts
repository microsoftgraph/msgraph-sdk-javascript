import {AccessReviewHistoryDecisionFilter} from './accessReviewHistoryDecisionFilter';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from './createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue} from './createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewHistoryInstance, AccessReviewHistoryScheduleSettings, AccessReviewScope, Entity, UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryDefinition extends Entity implements Parsable {
    private _createdBy?: UserIdentity | undefined;
    /** Timestamp when the access review definition was created.  */
    private _createdDateTime?: Date | undefined;
    /** Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified.  */
    private _decisions?: AccessReviewHistoryDecisionFilter[] | undefined;
    /** Name for the access review history data collection. Required.  */
    private _displayName?: string | undefined;
    /** If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance.  */
    private _instances?: AccessReviewHistoryInstance[] | undefined;
    /** A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.  */
    private _reviewHistoryPeriodEndDateTime?: Date | undefined;
    /** A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.  */
    private _reviewHistoryPeriodStartDateTime?: Date | undefined;
    /** The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined.  */
    private _scheduleSettings?: AccessReviewHistoryScheduleSettings | undefined;
    /** Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required.  */
    private _scopes?: AccessReviewScope[] | undefined;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue.  */
    private _status?: AccessReviewHistoryStatus | undefined;
    /**
     * Instantiates a new accessReviewHistoryDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. 
     * @returns a userIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. 
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Timestamp when the access review definition was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp when the access review definition was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the decisions property value. Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified.
     * @returns a accessReviewHistoryDecisionFilter
     */
    public get decisions() {
        return this._decisions;
    };
    /**
     * Sets the decisions property value. Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified.
     * @param value Value to set for the decisions property.
     */
    public set decisions(value: AccessReviewHistoryDecisionFilter[] | undefined) {
        this._decisions = value;
    };
    /**
     * Gets the displayName property value. Name for the access review history data collection. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name for the access review history data collection. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdBy", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).createdDateTime = n.getDateValue(); }],
            ["decisions", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).decisions = n.getEnumValues<AccessReviewHistoryDecisionFilter>(AccessReviewHistoryDecisionFilter); }],
            ["displayName", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).displayName = n.getStringValue(); }],
            ["instances", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).instances = n.getCollectionOfObjectValues<AccessReviewHistoryInstance>(createAccessReviewHistoryInstanceFromDiscriminatorValue); }],
            ["reviewHistoryPeriodEndDateTime", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).reviewHistoryPeriodEndDateTime = n.getDateValue(); }],
            ["reviewHistoryPeriodStartDateTime", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).reviewHistoryPeriodStartDateTime = n.getDateValue(); }],
            ["scheduleSettings", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).scheduleSettings = n.getObjectValue<AccessReviewHistoryScheduleSettings>(createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue); }],
            ["scopes", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).scopes = n.getCollectionOfObjectValues<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); }],
            ["status", (o, n) => { (o as unknown as AccessReviewHistoryDefinition).status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); }],
        ]);
    };
    /**
     * Gets the instances property value. If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance.
     * @returns a accessReviewHistoryInstance
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Sets the instances property value. If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance.
     * @param value Value to set for the instances property.
     */
    public set instances(value: AccessReviewHistoryInstance[] | undefined) {
        this._instances = value;
    };
    /**
     * Gets the reviewHistoryPeriodEndDateTime property value. A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @returns a Date
     */
    public get reviewHistoryPeriodEndDateTime() {
        return this._reviewHistoryPeriodEndDateTime;
    };
    /**
     * Sets the reviewHistoryPeriodEndDateTime property value. A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @param value Value to set for the reviewHistoryPeriodEndDateTime property.
     */
    public set reviewHistoryPeriodEndDateTime(value: Date | undefined) {
        this._reviewHistoryPeriodEndDateTime = value;
    };
    /**
     * Gets the reviewHistoryPeriodStartDateTime property value. A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @returns a Date
     */
    public get reviewHistoryPeriodStartDateTime() {
        return this._reviewHistoryPeriodStartDateTime;
    };
    /**
     * Sets the reviewHistoryPeriodStartDateTime property value. A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined.
     * @param value Value to set for the reviewHistoryPeriodStartDateTime property.
     */
    public set reviewHistoryPeriodStartDateTime(value: Date | undefined) {
        this._reviewHistoryPeriodStartDateTime = value;
    };
    /**
     * Gets the scheduleSettings property value. The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined.
     * @returns a accessReviewHistoryScheduleSettings
     */
    public get scheduleSettings() {
        return this._scheduleSettings;
    };
    /**
     * Sets the scheduleSettings property value. The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined.
     * @param value Value to set for the scheduleSettings property.
     */
    public set scheduleSettings(value: AccessReviewHistoryScheduleSettings | undefined) {
        this._scheduleSettings = value;
    };
    /**
     * Gets the scopes property value. Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required.
     * @returns a accessReviewScope
     */
    public get scopes() {
        return this._scopes;
    };
    /**
     * Sets the scopes property value. Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required.
     * @param value Value to set for the scopes property.
     */
    public set scopes(value: AccessReviewScope[] | undefined) {
        this._scopes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UserIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        this.decisions && writer.writeEnumValue<AccessReviewHistoryDecisionFilter>("decisions", ...this.decisions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<AccessReviewHistoryInstance>("instances", this.instances);
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", this.reviewHistoryPeriodEndDateTime);
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", this.reviewHistoryPeriodStartDateTime);
        writer.writeObjectValue<AccessReviewHistoryScheduleSettings>("scheduleSettings", this.scheduleSettings);
        writer.writeCollectionOfObjectValues<AccessReviewScope>("scopes", this.scopes);
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", this.status);
    };
    /**
     * Gets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue.
     * @returns a accessReviewHistoryStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: AccessReviewHistoryStatus | undefined) {
        this._status = value;
    };
}
