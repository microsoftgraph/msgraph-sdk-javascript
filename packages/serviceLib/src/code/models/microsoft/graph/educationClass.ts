import {EducationAssignment, EducationAssignmentDefaults, EducationAssignmentSettings, EducationCategory, EducationCourse, EducationExternalSource, EducationSchool, EducationTerm, EducationUser, Entity, Group, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationClass extends Entity implements Parsable {
    private _assignmentCategories?: EducationCategory[] | undefined;
    private _assignmentDefaults?: EducationAssignmentDefaults | undefined;
    /** All assignments associated with this class. Nullable.  */
    private _assignments?: EducationAssignment[] | undefined;
    private _assignmentSettings?: EducationAssignmentSettings | undefined;
    /** Class code used by the school to identify the class.  */
    private _classCode?: string | undefined;
    /** Course information for the class.  */
    private _course?: EducationCourse | undefined;
    /** Entity who created the class  */
    private _createdBy?: IdentitySet | undefined;
    /** Description of the class.  */
    private _description?: string | undefined;
    /** Name of the class.  */
    private _displayName?: string | undefined;
    /** ID of the class from the syncing system.  */
    private _externalId?: string | undefined;
    /** Name of the class in the syncing system.  */
    private _externalName?: string | undefined;
    /** How this class was created. Possible values are: sis, manual.  */
    private _externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from.  */
    private _externalSourceDetail?: string | undefined;
    /** Grade level of the class.  */
    private _grade?: string | undefined;
    /** The underlying Microsoft 365 group object.  */
    private _group?: Group | undefined;
    /** Mail name for sending email to all members, if this is enabled.  */
    private _mailNickname?: string | undefined;
    /** All users in the class. Nullable.  */
    private _members?: EducationUser[] | undefined;
    /** All schools that this class is associated with. Nullable.  */
    private _schools?: EducationSchool[] | undefined;
    /** All teachers in the class. Nullable.  */
    private _teachers?: EducationUser[] | undefined;
    /** Term for this class.  */
    private _term?: EducationTerm | undefined;
    /**
     * Instantiates a new educationClass and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignmentCategories property value. 
     * @returns a educationCategory
     */
    public get assignmentCategories() {
        return this._assignmentCategories;
    };
    /**
     * Gets the assignmentDefaults property value. 
     * @returns a educationAssignmentDefaults
     */
    public get assignmentDefaults() {
        return this._assignmentDefaults;
    };
    /**
     * Gets the assignments property value. All assignments associated with this class. Nullable.
     * @returns a educationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the assignmentSettings property value. 
     * @returns a educationAssignmentSettings
     */
    public get assignmentSettings() {
        return this._assignmentSettings;
    };
    /**
     * Gets the classCode property value. Class code used by the school to identify the class.
     * @returns a string
     */
    public get classCode() {
        return this._classCode;
    };
    /**
     * Gets the course property value. Course information for the class.
     * @returns a educationCourse
     */
    public get course() {
        return this._course;
    };
    /**
     * Gets the createdBy property value. Entity who created the class
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the description property value. Description of the class.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. Name of the class.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the externalId property value. ID of the class from the syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Gets the externalName property value. Name of the class in the syncing system.
     * @returns a string
     */
    public get externalName() {
        return this._externalName;
    };
    /**
     * Gets the externalSource property value. How this class was created. Possible values are: sis, manual.
     * @returns a educationExternalSource
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @returns a string
     */
    public get externalSourceDetail() {
        return this._externalSourceDetail;
    };
    /**
     * Gets the grade property value. Grade level of the class.
     * @returns a string
     */
    public get grade() {
        return this._grade;
    };
    /**
     * Gets the group property value. The underlying Microsoft 365 group object.
     * @returns a group
     */
    public get group() {
        return this._group;
    };
    /**
     * Gets the mailNickname property value. Mail name for sending email to all members, if this is enabled.
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Gets the members property value. All users in the class. Nullable.
     * @returns a educationUser
     */
    public get members() {
        return this._members;
    };
    /**
     * Gets the schools property value. All schools that this class is associated with. Nullable.
     * @returns a educationSchool
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Gets the teachers property value. All teachers in the class. Nullable.
     * @returns a educationUser
     */
    public get teachers() {
        return this._teachers;
    };
    /**
     * Gets the term property value. Term for this class.
     * @returns a educationTerm
     */
    public get term() {
        return this._term;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignmentCategories", (o, n) => { (o as unknown as EducationClass).assignmentCategories = n.getCollectionOfObjectValues<EducationCategory>(EducationCategory); }],
            ["assignmentDefaults", (o, n) => { (o as unknown as EducationClass).assignmentDefaults = n.getObjectValue<EducationAssignmentDefaults>(EducationAssignmentDefaults); }],
            ["assignments", (o, n) => { (o as unknown as EducationClass).assignments = n.getCollectionOfObjectValues<EducationAssignment>(EducationAssignment); }],
            ["assignmentSettings", (o, n) => { (o as unknown as EducationClass).assignmentSettings = n.getObjectValue<EducationAssignmentSettings>(EducationAssignmentSettings); }],
            ["classCode", (o, n) => { (o as unknown as EducationClass).classCode = n.getStringValue(); }],
            ["course", (o, n) => { (o as unknown as EducationClass).course = n.getObjectValue<EducationCourse>(EducationCourse); }],
            ["createdBy", (o, n) => { (o as unknown as EducationClass).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["description", (o, n) => { (o as unknown as EducationClass).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as EducationClass).displayName = n.getStringValue(); }],
            ["externalId", (o, n) => { (o as unknown as EducationClass).externalId = n.getStringValue(); }],
            ["externalName", (o, n) => { (o as unknown as EducationClass).externalName = n.getStringValue(); }],
            ["externalSource", (o, n) => { (o as unknown as EducationClass).externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); }],
            ["externalSourceDetail", (o, n) => { (o as unknown as EducationClass).externalSourceDetail = n.getStringValue(); }],
            ["grade", (o, n) => { (o as unknown as EducationClass).grade = n.getStringValue(); }],
            ["group", (o, n) => { (o as unknown as EducationClass).group = n.getObjectValue<Group>(Group); }],
            ["mailNickname", (o, n) => { (o as unknown as EducationClass).mailNickname = n.getStringValue(); }],
            ["members", (o, n) => { (o as unknown as EducationClass).members = n.getCollectionOfObjectValues<EducationUser>(EducationUser); }],
            ["schools", (o, n) => { (o as unknown as EducationClass).schools = n.getCollectionOfObjectValues<EducationSchool>(EducationSchool); }],
            ["teachers", (o, n) => { (o as unknown as EducationClass).teachers = n.getCollectionOfObjectValues<EducationUser>(EducationUser); }],
            ["term", (o, n) => { (o as unknown as EducationClass).term = n.getObjectValue<EducationTerm>(EducationTerm); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EducationCategory>("assignmentCategories", this.assignmentCategories);
        writer.writeObjectValue<EducationAssignmentDefaults>("assignmentDefaults", this.assignmentDefaults);
        writer.writeCollectionOfObjectValues<EducationAssignment>("assignments", this.assignments);
        writer.writeObjectValue<EducationAssignmentSettings>("assignmentSettings", this.assignmentSettings);
        writer.writeStringValue("classCode", this.classCode);
        writer.writeObjectValue<EducationCourse>("course", this.course);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("externalName", this.externalName);
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        writer.writeStringValue("grade", this.grade);
        writer.writeObjectValue<Group>("group", this.group);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues<EducationUser>("members", this.members);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", this.schools);
        writer.writeCollectionOfObjectValues<EducationUser>("teachers", this.teachers);
        writer.writeObjectValue<EducationTerm>("term", this.term);
    };
    /**
     * Sets the assignmentCategories property value. 
     * @param value Value to set for the assignmentCategories property.
     */
    public set assignmentCategories(value: EducationCategory[] | undefined) {
        this._assignmentCategories = value;
    };
    /**
     * Sets the assignmentDefaults property value. 
     * @param value Value to set for the assignmentDefaults property.
     */
    public set assignmentDefaults(value: EducationAssignmentDefaults | undefined) {
        this._assignmentDefaults = value;
    };
    /**
     * Sets the assignments property value. All assignments associated with this class. Nullable.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EducationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the assignmentSettings property value. 
     * @param value Value to set for the assignmentSettings property.
     */
    public set assignmentSettings(value: EducationAssignmentSettings | undefined) {
        this._assignmentSettings = value;
    };
    /**
     * Sets the classCode property value. Class code used by the school to identify the class.
     * @param value Value to set for the classCode property.
     */
    public set classCode(value: string | undefined) {
        this._classCode = value;
    };
    /**
     * Sets the course property value. Course information for the class.
     * @param value Value to set for the course property.
     */
    public set course(value: EducationCourse | undefined) {
        this._course = value;
    };
    /**
     * Sets the createdBy property value. Entity who created the class
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the description property value. Description of the class.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. Name of the class.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the externalId property value. ID of the class from the syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Sets the externalName property value. Name of the class in the syncing system.
     * @param value Value to set for the externalName property.
     */
    public set externalName(value: string | undefined) {
        this._externalName = value;
    };
    /**
     * Sets the externalSource property value. How this class was created. Possible values are: sis, manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | undefined) {
        this._externalSource = value;
    };
    /**
     * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @param value Value to set for the externalSourceDetail property.
     */
    public set externalSourceDetail(value: string | undefined) {
        this._externalSourceDetail = value;
    };
    /**
     * Sets the grade property value. Grade level of the class.
     * @param value Value to set for the grade property.
     */
    public set grade(value: string | undefined) {
        this._grade = value;
    };
    /**
     * Sets the group property value. The underlying Microsoft 365 group object.
     * @param value Value to set for the group property.
     */
    public set group(value: Group | undefined) {
        this._group = value;
    };
    /**
     * Sets the mailNickname property value. Mail name for sending email to all members, if this is enabled.
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Sets the members property value. All users in the class. Nullable.
     * @param value Value to set for the members property.
     */
    public set members(value: EducationUser[] | undefined) {
        this._members = value;
    };
    /**
     * Sets the schools property value. All schools that this class is associated with. Nullable.
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        this._schools = value;
    };
    /**
     * Sets the teachers property value. All teachers in the class. Nullable.
     * @param value Value to set for the teachers property.
     */
    public set teachers(value: EducationUser[] | undefined) {
        this._teachers = value;
    };
    /**
     * Sets the term property value. Term for this class.
     * @param value Value to set for the term property.
     */
    public set term(value: EducationTerm | undefined) {
        this._term = value;
    };
}
