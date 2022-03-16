import {createEducationOutcomeFromDiscriminatorValue} from './createEducationOutcomeFromDiscriminatorValue';
import {createEducationSubmissionRecipientFromDiscriminatorValue} from './createEducationSubmissionRecipientFromDiscriminatorValue';
import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {EducationOutcome, EducationSubmissionRecipient, EducationSubmissionResource, Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmission extends Entity implements Parsable {
    /** Read-Write. Nullable.  */
    private _outcomes?: EducationOutcome[] | undefined;
    /** User who moved the status of this submission to reassigned.  */
    private _reassignedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _reassignedDateTime?: Date | undefined;
    /** Who this submission is assigned to.  */
    private _recipient?: EducationSubmissionRecipient | undefined;
    /** Nullable.  */
    private _resources?: EducationSubmissionResource[] | undefined;
    /** Folder where all file resources for this submission need to be stored.  */
    private _resourcesFolderUrl?: string | undefined;
    /** User who moved the status of this submission to returned.  */
    private _returnedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _returnedDateTime?: Date | undefined;
    /** Read-only. Possible values are: working, submitted, released, returned, and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned.  */
    private _status?: EducationSubmissionStatus | undefined;
    /** User who moved the resource into the submitted state.  */
    private _submittedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _submittedDateTime?: Date | undefined;
    /** Read-only. Nullable.  */
    private _submittedResources?: EducationSubmissionResource[] | undefined;
    /** User who moved the resource from submitted into the working state.  */
    private _unsubmittedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _unsubmittedDateTime?: Date | undefined;
    /**
     * Instantiates a new educationSubmission and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["outcomes", (o, n) => { (o as unknown as EducationSubmission).outcomes = n.getCollectionOfObjectValues<EducationOutcome>(createEducationOutcomeFromDiscriminatorValue); }],
            ["reassignedBy", (o, n) => { (o as unknown as EducationSubmission).reassignedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["reassignedDateTime", (o, n) => { (o as unknown as EducationSubmission).reassignedDateTime = n.getDateValue(); }],
            ["recipient", (o, n) => { (o as unknown as EducationSubmission).recipient = n.getObjectValue<EducationSubmissionRecipient>(createEducationSubmissionRecipientFromDiscriminatorValue); }],
            ["resources", (o, n) => { (o as unknown as EducationSubmission).resources = n.getCollectionOfObjectValues<EducationSubmissionResource>(createEducationSubmissionResourceFromDiscriminatorValue); }],
            ["resourcesFolderUrl", (o, n) => { (o as unknown as EducationSubmission).resourcesFolderUrl = n.getStringValue(); }],
            ["returnedBy", (o, n) => { (o as unknown as EducationSubmission).returnedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["returnedDateTime", (o, n) => { (o as unknown as EducationSubmission).returnedDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as EducationSubmission).status = n.getEnumValue<EducationSubmissionStatus>(EducationSubmissionStatus); }],
            ["submittedBy", (o, n) => { (o as unknown as EducationSubmission).submittedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["submittedDateTime", (o, n) => { (o as unknown as EducationSubmission).submittedDateTime = n.getDateValue(); }],
            ["submittedResources", (o, n) => { (o as unknown as EducationSubmission).submittedResources = n.getCollectionOfObjectValues<EducationSubmissionResource>(createEducationSubmissionResourceFromDiscriminatorValue); }],
            ["unsubmittedBy", (o, n) => { (o as unknown as EducationSubmission).unsubmittedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["unsubmittedDateTime", (o, n) => { (o as unknown as EducationSubmission).unsubmittedDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Gets the outcomes property value. Read-Write. Nullable.
     * @returns a educationOutcome
     */
    public get outcomes() {
        return this._outcomes;
    };
    /**
     * Sets the outcomes property value. Read-Write. Nullable.
     * @param value Value to set for the outcomes property.
     */
    public set outcomes(value: EducationOutcome[] | undefined) {
        this._outcomes = value;
    };
    /**
     * Gets the reassignedBy property value. User who moved the status of this submission to reassigned.
     * @returns a identitySet
     */
    public get reassignedBy() {
        return this._reassignedBy;
    };
    /**
     * Sets the reassignedBy property value. User who moved the status of this submission to reassigned.
     * @param value Value to set for the reassignedBy property.
     */
    public set reassignedBy(value: IdentitySet | undefined) {
        this._reassignedBy = value;
    };
    /**
     * Gets the reassignedDateTime property value. Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get reassignedDateTime() {
        return this._reassignedDateTime;
    };
    /**
     * Sets the reassignedDateTime property value. Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the reassignedDateTime property.
     */
    public set reassignedDateTime(value: Date | undefined) {
        this._reassignedDateTime = value;
    };
    /**
     * Gets the recipient property value. Who this submission is assigned to.
     * @returns a educationSubmissionRecipient
     */
    public get recipient() {
        return this._recipient;
    };
    /**
     * Sets the recipient property value. Who this submission is assigned to.
     * @param value Value to set for the recipient property.
     */
    public set recipient(value: EducationSubmissionRecipient | undefined) {
        this._recipient = value;
    };
    /**
     * Gets the resources property value. Nullable.
     * @returns a educationSubmissionResource
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Nullable.
     * @param value Value to set for the resources property.
     */
    public set resources(value: EducationSubmissionResource[] | undefined) {
        this._resources = value;
    };
    /**
     * Gets the resourcesFolderUrl property value. Folder where all file resources for this submission need to be stored.
     * @returns a string
     */
    public get resourcesFolderUrl() {
        return this._resourcesFolderUrl;
    };
    /**
     * Sets the resourcesFolderUrl property value. Folder where all file resources for this submission need to be stored.
     * @param value Value to set for the resourcesFolderUrl property.
     */
    public set resourcesFolderUrl(value: string | undefined) {
        this._resourcesFolderUrl = value;
    };
    /**
     * Gets the returnedBy property value. User who moved the status of this submission to returned.
     * @returns a identitySet
     */
    public get returnedBy() {
        return this._returnedBy;
    };
    /**
     * Sets the returnedBy property value. User who moved the status of this submission to returned.
     * @param value Value to set for the returnedBy property.
     */
    public set returnedBy(value: IdentitySet | undefined) {
        this._returnedBy = value;
    };
    /**
     * Gets the returnedDateTime property value. Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get returnedDateTime() {
        return this._returnedDateTime;
    };
    /**
     * Sets the returnedDateTime property value. Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the returnedDateTime property.
     */
    public set returnedDateTime(value: Date | undefined) {
        this._returnedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EducationOutcome>("outcomes", this.outcomes);
        writer.writeObjectValue<IdentitySet>("reassignedBy", this.reassignedBy);
        writer.writeDateValue("reassignedDateTime", this.reassignedDateTime);
        writer.writeObjectValue<EducationSubmissionRecipient>("recipient", this.recipient);
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("resources", this.resources);
        writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        writer.writeObjectValue<IdentitySet>("returnedBy", this.returnedBy);
        writer.writeDateValue("returnedDateTime", this.returnedDateTime);
        writer.writeEnumValue<EducationSubmissionStatus>("status", this.status);
        writer.writeObjectValue<IdentitySet>("submittedBy", this.submittedBy);
        writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("submittedResources", this.submittedResources);
        writer.writeObjectValue<IdentitySet>("unsubmittedBy", this.unsubmittedBy);
        writer.writeDateValue("unsubmittedDateTime", this.unsubmittedDateTime);
    };
    /**
     * Gets the status property value. Read-only. Possible values are: working, submitted, released, returned, and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned.
     * @returns a educationSubmissionStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Read-only. Possible values are: working, submitted, released, returned, and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned.
     * @param value Value to set for the status property.
     */
    public set status(value: EducationSubmissionStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the submittedBy property value. User who moved the resource into the submitted state.
     * @returns a identitySet
     */
    public get submittedBy() {
        return this._submittedBy;
    };
    /**
     * Sets the submittedBy property value. User who moved the resource into the submitted state.
     * @param value Value to set for the submittedBy property.
     */
    public set submittedBy(value: IdentitySet | undefined) {
        this._submittedBy = value;
    };
    /**
     * Gets the submittedDateTime property value. Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get submittedDateTime() {
        return this._submittedDateTime;
    };
    /**
     * Sets the submittedDateTime property value. Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the submittedDateTime property.
     */
    public set submittedDateTime(value: Date | undefined) {
        this._submittedDateTime = value;
    };
    /**
     * Gets the submittedResources property value. Read-only. Nullable.
     * @returns a educationSubmissionResource
     */
    public get submittedResources() {
        return this._submittedResources;
    };
    /**
     * Sets the submittedResources property value. Read-only. Nullable.
     * @param value Value to set for the submittedResources property.
     */
    public set submittedResources(value: EducationSubmissionResource[] | undefined) {
        this._submittedResources = value;
    };
    /**
     * Gets the unsubmittedBy property value. User who moved the resource from submitted into the working state.
     * @returns a identitySet
     */
    public get unsubmittedBy() {
        return this._unsubmittedBy;
    };
    /**
     * Sets the unsubmittedBy property value. User who moved the resource from submitted into the working state.
     * @param value Value to set for the unsubmittedBy property.
     */
    public set unsubmittedBy(value: IdentitySet | undefined) {
        this._unsubmittedBy = value;
    };
    /**
     * Gets the unsubmittedDateTime property value. Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get unsubmittedDateTime() {
        return this._unsubmittedDateTime;
    };
    /**
     * Sets the unsubmittedDateTime property value. Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the unsubmittedDateTime property.
     */
    public set unsubmittedDateTime(value: Date | undefined) {
        this._unsubmittedDateTime = value;
    };
}
