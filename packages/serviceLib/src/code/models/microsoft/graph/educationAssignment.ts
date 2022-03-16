import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationAssignmentRecipientFromDiscriminatorValue} from './createEducationAssignmentRecipientFromDiscriminatorValue';
import {createEducationAssignmentResourceFromDiscriminatorValue} from './createEducationAssignmentResourceFromDiscriminatorValue';
import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createEducationRubricFromDiscriminatorValue} from './createEducationRubricFromDiscriminatorValue';
import {createEducationSubmissionFromDiscriminatorValue} from './createEducationSubmissionFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignmentStatus} from './educationAssignmentStatus';
import {EducationAssignmentGradeType, EducationAssignmentRecipient, EducationAssignmentResource, EducationCategory, EducationItemBody, EducationRubric, EducationSubmission, Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignment extends Entity implements Parsable {
    /** Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.  */
    private _addedStudentAction?: EducationAddedStudentAction | undefined;
    /** Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.  */
    private _addToCalendarAction?: EducationAddToCalendarOptions | undefined;
    /** Identifies whether students can submit after the due date. If this property isn't specified during create, it defaults to true.  */
    private _allowLateSubmissions?: boolean | undefined;
    /** Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.  */
    private _allowStudentsToAddResourcesToSubmission?: boolean | undefined;
    /** The date when the assignment should become active.  If in the future, the assignment isn't shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _assignDateTime?: Date | undefined;
    /** The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _assignedDateTime?: Date | undefined;
    /** Which users, or whole class should receive a submission object once the assignment is published.  */
    private _assignTo?: EducationAssignmentRecipient | undefined;
    /** When set, enables users to easily find assignments of a given type.  Read-only. Nullable.  */
    private _categories?: EducationCategory[] | undefined;
    /** Class which this assignment belongs.  */
    private _classId?: string | undefined;
    /** Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _closeDateTime?: Date | undefined;
    /** Who created the assignment.  */
    private _createdBy?: IdentitySet | undefined;
    /** Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _createdDateTime?: Date | undefined;
    /** Name of the assignment.  */
    private _displayName?: string | undefined;
    /** Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _dueDateTime?: Date | undefined;
    /** How the assignment will be graded.  */
    private _grading?: EducationAssignmentGradeType | undefined;
    /** Instructions for the assignment.  This along with the display name tell the student what to do.  */
    private _instructions?: EducationItemBody | undefined;
    /** Who last modified the assignment.  */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl isn't allowed after the assignment has been published.  */
    private _notificationChannelUrl?: string | undefined;
    /** Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.  */
    private _resources?: EducationAssignmentResource[] | undefined;
    /** Folder URL where all the file resources for this assignment are stored.  */
    private _resourcesFolderUrl?: string | undefined;
    /** When set, the grading rubric attached to this assignment.  */
    private _rubric?: EducationRubric | undefined;
    /** Status of the Assignment.  You can't PATCH this value.  Possible values are: draft, scheduled, published, assigned.  */
    private _status?: EducationAssignmentStatus | undefined;
    /** Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.  */
    private _submissions?: EducationSubmission[] | undefined;
    /** The deep link URL for the given assignment.  */
    private _webUrl?: string | undefined;
    /**
     * Gets the addedStudentAction property value. Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
     * @returns a educationAddedStudentAction
     */
    public get addedStudentAction() {
        return this._addedStudentAction;
    };
    /**
     * Sets the addedStudentAction property value. Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
     * @param value Value to set for the addedStudentAction property.
     */
    public set addedStudentAction(value: EducationAddedStudentAction | undefined) {
        this._addedStudentAction = value;
    };
    /**
     * Gets the addToCalendarAction property value. Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     * @returns a educationAddToCalendarOptions
     */
    public get addToCalendarAction() {
        return this._addToCalendarAction;
    };
    /**
     * Sets the addToCalendarAction property value. Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     * @param value Value to set for the addToCalendarAction property.
     */
    public set addToCalendarAction(value: EducationAddToCalendarOptions | undefined) {
        this._addToCalendarAction = value;
    };
    /**
     * Gets the allowLateSubmissions property value. Identifies whether students can submit after the due date. If this property isn't specified during create, it defaults to true.
     * @returns a boolean
     */
    public get allowLateSubmissions() {
        return this._allowLateSubmissions;
    };
    /**
     * Sets the allowLateSubmissions property value. Identifies whether students can submit after the due date. If this property isn't specified during create, it defaults to true.
     * @param value Value to set for the allowLateSubmissions property.
     */
    public set allowLateSubmissions(value: boolean | undefined) {
        this._allowLateSubmissions = value;
    };
    /**
     * Gets the allowStudentsToAddResourcesToSubmission property value. Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.
     * @returns a boolean
     */
    public get allowStudentsToAddResourcesToSubmission() {
        return this._allowStudentsToAddResourcesToSubmission;
    };
    /**
     * Sets the allowStudentsToAddResourcesToSubmission property value. Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.
     * @param value Value to set for the allowStudentsToAddResourcesToSubmission property.
     */
    public set allowStudentsToAddResourcesToSubmission(value: boolean | undefined) {
        this._allowStudentsToAddResourcesToSubmission = value;
    };
    /**
     * Gets the assignDateTime property value. The date when the assignment should become active.  If in the future, the assignment isn't shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get assignDateTime() {
        return this._assignDateTime;
    };
    /**
     * Sets the assignDateTime property value. The date when the assignment should become active.  If in the future, the assignment isn't shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the assignDateTime property.
     */
    public set assignDateTime(value: Date | undefined) {
        this._assignDateTime = value;
    };
    /**
     * Gets the assignedDateTime property value. The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get assignedDateTime() {
        return this._assignedDateTime;
    };
    /**
     * Sets the assignedDateTime property value. The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the assignedDateTime property.
     */
    public set assignedDateTime(value: Date | undefined) {
        this._assignedDateTime = value;
    };
    /**
     * Gets the assignTo property value. Which users, or whole class should receive a submission object once the assignment is published.
     * @returns a educationAssignmentRecipient
     */
    public get assignTo() {
        return this._assignTo;
    };
    /**
     * Sets the assignTo property value. Which users, or whole class should receive a submission object once the assignment is published.
     * @param value Value to set for the assignTo property.
     */
    public set assignTo(value: EducationAssignmentRecipient | undefined) {
        this._assignTo = value;
    };
    /**
     * Gets the categories property value. When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
     * @returns a educationCategory
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
     * @param value Value to set for the categories property.
     */
    public set categories(value: EducationCategory[] | undefined) {
        this._categories = value;
    };
    /**
     * Gets the classId property value. Class which this assignment belongs.
     * @returns a string
     */
    public get classId() {
        return this._classId;
    };
    /**
     * Sets the classId property value. Class which this assignment belongs.
     * @param value Value to set for the classId property.
     */
    public set classId(value: string | undefined) {
        this._classId = value;
    };
    /**
     * Gets the closeDateTime property value. Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get closeDateTime() {
        return this._closeDateTime;
    };
    /**
     * Sets the closeDateTime property value. Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the closeDateTime property.
     */
    public set closeDateTime(value: Date | undefined) {
        this._closeDateTime = value;
    };
    /**
     * Instantiates a new educationAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. Who created the assignment.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Who created the assignment.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the displayName property value. Name of the assignment.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the assignment.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the dueDateTime property value. Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Sets the dueDateTime property value. Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: Date | undefined) {
        this._dueDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["addedStudentAction", (o, n) => { (o as unknown as EducationAssignment).addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction); }],
            ["addToCalendarAction", (o, n) => { (o as unknown as EducationAssignment).addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions); }],
            ["allowLateSubmissions", (o, n) => { (o as unknown as EducationAssignment).allowLateSubmissions = n.getBooleanValue(); }],
            ["allowStudentsToAddResourcesToSubmission", (o, n) => { (o as unknown as EducationAssignment).allowStudentsToAddResourcesToSubmission = n.getBooleanValue(); }],
            ["assignDateTime", (o, n) => { (o as unknown as EducationAssignment).assignDateTime = n.getDateValue(); }],
            ["assignedDateTime", (o, n) => { (o as unknown as EducationAssignment).assignedDateTime = n.getDateValue(); }],
            ["assignTo", (o, n) => { (o as unknown as EducationAssignment).assignTo = n.getObjectValue<EducationAssignmentRecipient>(createEducationAssignmentRecipientFromDiscriminatorValue); }],
            ["categories", (o, n) => { (o as unknown as EducationAssignment).categories = n.getCollectionOfObjectValues<EducationCategory>(createEducationCategoryFromDiscriminatorValue); }],
            ["classId", (o, n) => { (o as unknown as EducationAssignment).classId = n.getStringValue(); }],
            ["closeDateTime", (o, n) => { (o as unknown as EducationAssignment).closeDateTime = n.getDateValue(); }],
            ["createdBy", (o, n) => { (o as unknown as EducationAssignment).createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as EducationAssignment).createdDateTime = n.getDateValue(); }],
            ["displayName", (o, n) => { (o as unknown as EducationAssignment).displayName = n.getStringValue(); }],
            ["dueDateTime", (o, n) => { (o as unknown as EducationAssignment).dueDateTime = n.getDateValue(); }],
            ["grading", (o, n) => { (o as unknown as EducationAssignment).grading = n.getObjectValue<EducationAssignmentGradeType>(createEducationAssignmentGradeTypeFromDiscriminatorValue); }],
            ["instructions", (o, n) => { (o as unknown as EducationAssignment).instructions = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); }],
            ["lastModifiedBy", (o, n) => { (o as unknown as EducationAssignment).lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as EducationAssignment).lastModifiedDateTime = n.getDateValue(); }],
            ["notificationChannelUrl", (o, n) => { (o as unknown as EducationAssignment).notificationChannelUrl = n.getStringValue(); }],
            ["resources", (o, n) => { (o as unknown as EducationAssignment).resources = n.getCollectionOfObjectValues<EducationAssignmentResource>(createEducationAssignmentResourceFromDiscriminatorValue); }],
            ["resourcesFolderUrl", (o, n) => { (o as unknown as EducationAssignment).resourcesFolderUrl = n.getStringValue(); }],
            ["rubric", (o, n) => { (o as unknown as EducationAssignment).rubric = n.getObjectValue<EducationRubric>(createEducationRubricFromDiscriminatorValue); }],
            ["status", (o, n) => { (o as unknown as EducationAssignment).status = n.getEnumValue<EducationAssignmentStatus>(EducationAssignmentStatus); }],
            ["submissions", (o, n) => { (o as unknown as EducationAssignment).submissions = n.getCollectionOfObjectValues<EducationSubmission>(createEducationSubmissionFromDiscriminatorValue); }],
            ["webUrl", (o, n) => { (o as unknown as EducationAssignment).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the grading property value. How the assignment will be graded.
     * @returns a educationAssignmentGradeType
     */
    public get grading() {
        return this._grading;
    };
    /**
     * Sets the grading property value. How the assignment will be graded.
     * @param value Value to set for the grading property.
     */
    public set grading(value: EducationAssignmentGradeType | undefined) {
        this._grading = value;
    };
    /**
     * Gets the instructions property value. Instructions for the assignment.  This along with the display name tell the student what to do.
     * @returns a educationItemBody
     */
    public get instructions() {
        return this._instructions;
    };
    /**
     * Sets the instructions property value. Instructions for the assignment.  This along with the display name tell the student what to do.
     * @param value Value to set for the instructions property.
     */
    public set instructions(value: EducationItemBody | undefined) {
        this._instructions = value;
    };
    /**
     * Gets the lastModifiedBy property value. Who last modified the assignment.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Who last modified the assignment.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the notificationChannelUrl property value. Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl isn't allowed after the assignment has been published.
     * @returns a string
     */
    public get notificationChannelUrl() {
        return this._notificationChannelUrl;
    };
    /**
     * Sets the notificationChannelUrl property value. Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl isn't allowed after the assignment has been published.
     * @param value Value to set for the notificationChannelUrl property.
     */
    public set notificationChannelUrl(value: string | undefined) {
        this._notificationChannelUrl = value;
    };
    /**
     * Gets the resources property value. Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.
     * @returns a educationAssignmentResource
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.
     * @param value Value to set for the resources property.
     */
    public set resources(value: EducationAssignmentResource[] | undefined) {
        this._resources = value;
    };
    /**
     * Gets the resourcesFolderUrl property value. Folder URL where all the file resources for this assignment are stored.
     * @returns a string
     */
    public get resourcesFolderUrl() {
        return this._resourcesFolderUrl;
    };
    /**
     * Sets the resourcesFolderUrl property value. Folder URL where all the file resources for this assignment are stored.
     * @param value Value to set for the resourcesFolderUrl property.
     */
    public set resourcesFolderUrl(value: string | undefined) {
        this._resourcesFolderUrl = value;
    };
    /**
     * Gets the rubric property value. When set, the grading rubric attached to this assignment.
     * @returns a educationRubric
     */
    public get rubric() {
        return this._rubric;
    };
    /**
     * Sets the rubric property value. When set, the grading rubric attached to this assignment.
     * @param value Value to set for the rubric property.
     */
    public set rubric(value: EducationRubric | undefined) {
        this._rubric = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", this.addedStudentAction);
        writer.writeEnumValue<EducationAddToCalendarOptions>("addToCalendarAction", this.addToCalendarAction);
        writer.writeBooleanValue("allowLateSubmissions", this.allowLateSubmissions);
        writer.writeBooleanValue("allowStudentsToAddResourcesToSubmission", this.allowStudentsToAddResourcesToSubmission);
        writer.writeDateValue("assignDateTime", this.assignDateTime);
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        writer.writeObjectValue<EducationAssignmentRecipient>("assignTo", this.assignTo);
        writer.writeCollectionOfObjectValues<EducationCategory>("categories", this.categories);
        writer.writeStringValue("classId", this.classId);
        writer.writeDateValue("closeDateTime", this.closeDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("dueDateTime", this.dueDateTime);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", this.grading);
        writer.writeObjectValue<EducationItemBody>("instructions", this.instructions);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
        writer.writeCollectionOfObjectValues<EducationAssignmentResource>("resources", this.resources);
        writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        writer.writeObjectValue<EducationRubric>("rubric", this.rubric);
        writer.writeEnumValue<EducationAssignmentStatus>("status", this.status);
        writer.writeCollectionOfObjectValues<EducationSubmission>("submissions", this.submissions);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the status property value. Status of the Assignment.  You can't PATCH this value.  Possible values are: draft, scheduled, published, assigned.
     * @returns a educationAssignmentStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the Assignment.  You can't PATCH this value.  Possible values are: draft, scheduled, published, assigned.
     * @param value Value to set for the status property.
     */
    public set status(value: EducationAssignmentStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the submissions property value. Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @returns a educationSubmission
     */
    public get submissions() {
        return this._submissions;
    };
    /**
     * Sets the submissions property value. Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param value Value to set for the submissions property.
     */
    public set submissions(value: EducationSubmission[] | undefined) {
        this._submissions = value;
    };
    /**
     * Gets the webUrl property value. The deep link URL for the given assignment.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The deep link URL for the given assignment.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
