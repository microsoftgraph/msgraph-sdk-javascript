import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {EntitlementManagementSchedule, SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentReviewSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _expirationBehavior?: AccessReviewExpirationBehavior | undefined;
    private _fallbackReviewers?: SubjectSet[] | undefined;
    private _isEnabled?: boolean | undefined;
    private _isRecommendationEnabled?: boolean | undefined;
    private _isReviewerJustificationRequired?: boolean | undefined;
    private _isSelfReview?: boolean | undefined;
    private _primaryReviewers?: SubjectSet[] | undefined;
    private _schedule?: EntitlementManagementSchedule | undefined;
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
     * Instantiates a new accessPackageAssignmentReviewSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the expirationBehavior property value. 
     * @returns a accessReviewExpirationBehavior
     */
    public get expirationBehavior() {
        return this._expirationBehavior;
    };
    /**
     * Sets the expirationBehavior property value. 
     * @param value Value to set for the expirationBehavior property.
     */
    public set expirationBehavior(value: AccessReviewExpirationBehavior | undefined) {
        this._expirationBehavior = value;
    };
    /**
     * Gets the fallbackReviewers property value. 
     * @returns a subjectSet
     */
    public get fallbackReviewers() {
        return this._fallbackReviewers;
    };
    /**
     * Sets the fallbackReviewers property value. 
     * @param value Value to set for the fallbackReviewers property.
     */
    public set fallbackReviewers(value: SubjectSet[] | undefined) {
        this._fallbackReviewers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["expirationBehavior", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).expirationBehavior = n.getEnumValue<AccessReviewExpirationBehavior>(AccessReviewExpirationBehavior); }],
            ["fallbackReviewers", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).fallbackReviewers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
            ["isEnabled", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).isEnabled = n.getBooleanValue(); }],
            ["isRecommendationEnabled", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).isRecommendationEnabled = n.getBooleanValue(); }],
            ["isReviewerJustificationRequired", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).isReviewerJustificationRequired = n.getBooleanValue(); }],
            ["isSelfReview", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).isSelfReview = n.getBooleanValue(); }],
            ["primaryReviewers", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).primaryReviewers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
            ["schedule", (o, n) => { (o as unknown as AccessPackageAssignmentReviewSettings).schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the isEnabled property value. 
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. 
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the isRecommendationEnabled property value. 
     * @returns a boolean
     */
    public get isRecommendationEnabled() {
        return this._isRecommendationEnabled;
    };
    /**
     * Sets the isRecommendationEnabled property value. 
     * @param value Value to set for the isRecommendationEnabled property.
     */
    public set isRecommendationEnabled(value: boolean | undefined) {
        this._isRecommendationEnabled = value;
    };
    /**
     * Gets the isReviewerJustificationRequired property value. 
     * @returns a boolean
     */
    public get isReviewerJustificationRequired() {
        return this._isReviewerJustificationRequired;
    };
    /**
     * Sets the isReviewerJustificationRequired property value. 
     * @param value Value to set for the isReviewerJustificationRequired property.
     */
    public set isReviewerJustificationRequired(value: boolean | undefined) {
        this._isReviewerJustificationRequired = value;
    };
    /**
     * Gets the isSelfReview property value. 
     * @returns a boolean
     */
    public get isSelfReview() {
        return this._isSelfReview;
    };
    /**
     * Sets the isSelfReview property value. 
     * @param value Value to set for the isSelfReview property.
     */
    public set isSelfReview(value: boolean | undefined) {
        this._isSelfReview = value;
    };
    /**
     * Gets the primaryReviewers property value. 
     * @returns a subjectSet
     */
    public get primaryReviewers() {
        return this._primaryReviewers;
    };
    /**
     * Sets the primaryReviewers property value. 
     * @param value Value to set for the primaryReviewers property.
     */
    public set primaryReviewers(value: SubjectSet[] | undefined) {
        this._primaryReviewers = value;
    };
    /**
     * Gets the schedule property value. 
     * @returns a entitlementManagementSchedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. 
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | undefined) {
        this._schedule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AccessReviewExpirationBehavior>("expirationBehavior", this.expirationBehavior);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackReviewers", this.fallbackReviewers);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("isRecommendationEnabled", this.isRecommendationEnabled);
        writer.writeBooleanValue("isReviewerJustificationRequired", this.isReviewerJustificationRequired);
        writer.writeBooleanValue("isSelfReview", this.isSelfReview);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryReviewers", this.primaryReviewers);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", this.schedule);
        writer.writeAdditionalData(this.additionalData);
    };
}
