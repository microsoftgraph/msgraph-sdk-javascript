import {AdministrativeUnit, EducationClass, EducationOrganization, EducationUser, IdentitySet, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSchool extends EducationOrganization implements Parsable {
    /** Address of the school.  */
    private _address?: PhysicalAddress | undefined;
    /** The underlying administrativeUnit for this school.  */
    private _administrativeUnit?: AdministrativeUnit | undefined;
    /** Classes taught at the school. Nullable.  */
    private _classes?: EducationClass[] | undefined;
    /** Entity who created the school.  */
    private _createdBy?: IdentitySet | undefined;
    /** ID of school in syncing system.  */
    private _externalId?: string | undefined;
    /** ID of principal in syncing system.  */
    private _externalPrincipalId?: string | undefined;
    private _fax?: string | undefined;
    /** Highest grade taught.  */
    private _highestGrade?: string | undefined;
    /** Lowest grade taught.  */
    private _lowestGrade?: string | undefined;
    /** Phone number of school.  */
    private _phone?: string | undefined;
    /** Email address of the principal.  */
    private _principalEmail?: string | undefined;
    /** Name of the principal.  */
    private _principalName?: string | undefined;
    /** School Number.  */
    private _schoolNumber?: string | undefined;
    /** Users in the school. Nullable.  */
    private _users?: EducationUser[] | undefined;
    /**
     * Instantiates a new educationSchool and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the address property value. Address of the school.
     * @returns a physicalAddress
     */
    public get address() {
        return this._address;
    };
    /**
     * Gets the administrativeUnit property value. The underlying administrativeUnit for this school.
     * @returns a administrativeUnit
     */
    public get administrativeUnit() {
        return this._administrativeUnit;
    };
    /**
     * Gets the classes property value. Classes taught at the school. Nullable.
     * @returns a educationClass
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Gets the createdBy property value. Entity who created the school.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the externalId property value. ID of school in syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Gets the externalPrincipalId property value. ID of principal in syncing system.
     * @returns a string
     */
    public get externalPrincipalId() {
        return this._externalPrincipalId;
    };
    /**
     * Gets the fax property value. 
     * @returns a string
     */
    public get fax() {
        return this._fax;
    };
    /**
     * Gets the highestGrade property value. Highest grade taught.
     * @returns a string
     */
    public get highestGrade() {
        return this._highestGrade;
    };
    /**
     * Gets the lowestGrade property value. Lowest grade taught.
     * @returns a string
     */
    public get lowestGrade() {
        return this._lowestGrade;
    };
    /**
     * Gets the phone property value. Phone number of school.
     * @returns a string
     */
    public get phone() {
        return this._phone;
    };
    /**
     * Gets the principalEmail property value. Email address of the principal.
     * @returns a string
     */
    public get principalEmail() {
        return this._principalEmail;
    };
    /**
     * Gets the principalName property value. Name of the principal.
     * @returns a string
     */
    public get principalName() {
        return this._principalName;
    };
    /**
     * Gets the schoolNumber property value. School Number.
     * @returns a string
     */
    public get schoolNumber() {
        return this._schoolNumber;
    };
    /**
     * Gets the users property value. Users in the school. Nullable.
     * @returns a educationUser
     */
    public get users() {
        return this._users;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["address", (o, n) => { (o as unknown as EducationSchool).address = n.getObjectValue<PhysicalAddress>(PhysicalAddress); }],
            ["administrativeUnit", (o, n) => { (o as unknown as EducationSchool).administrativeUnit = n.getObjectValue<AdministrativeUnit>(AdministrativeUnit); }],
            ["classes", (o, n) => { (o as unknown as EducationSchool).classes = n.getCollectionOfObjectValues<EducationClass>(EducationClass); }],
            ["createdBy", (o, n) => { (o as unknown as EducationSchool).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["externalId", (o, n) => { (o as unknown as EducationSchool).externalId = n.getStringValue(); }],
            ["externalPrincipalId", (o, n) => { (o as unknown as EducationSchool).externalPrincipalId = n.getStringValue(); }],
            ["fax", (o, n) => { (o as unknown as EducationSchool).fax = n.getStringValue(); }],
            ["highestGrade", (o, n) => { (o as unknown as EducationSchool).highestGrade = n.getStringValue(); }],
            ["lowestGrade", (o, n) => { (o as unknown as EducationSchool).lowestGrade = n.getStringValue(); }],
            ["phone", (o, n) => { (o as unknown as EducationSchool).phone = n.getStringValue(); }],
            ["principalEmail", (o, n) => { (o as unknown as EducationSchool).principalEmail = n.getStringValue(); }],
            ["principalName", (o, n) => { (o as unknown as EducationSchool).principalName = n.getStringValue(); }],
            ["schoolNumber", (o, n) => { (o as unknown as EducationSchool).schoolNumber = n.getStringValue(); }],
            ["users", (o, n) => { (o as unknown as EducationSchool).users = n.getCollectionOfObjectValues<EducationUser>(EducationUser); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeObjectValue<AdministrativeUnit>("administrativeUnit", this.administrativeUnit);
        writer.writeCollectionOfObjectValues<EducationClass>("classes", this.classes);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("externalPrincipalId", this.externalPrincipalId);
        writer.writeStringValue("fax", this.fax);
        writer.writeStringValue("highestGrade", this.highestGrade);
        writer.writeStringValue("lowestGrade", this.lowestGrade);
        writer.writeStringValue("phone", this.phone);
        writer.writeStringValue("principalEmail", this.principalEmail);
        writer.writeStringValue("principalName", this.principalName);
        writer.writeStringValue("schoolNumber", this.schoolNumber);
        writer.writeCollectionOfObjectValues<EducationUser>("users", this.users);
    };
    /**
     * Sets the address property value. Address of the school.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        this._address = value;
    };
    /**
     * Sets the administrativeUnit property value. The underlying administrativeUnit for this school.
     * @param value Value to set for the administrativeUnit property.
     */
    public set administrativeUnit(value: AdministrativeUnit | undefined) {
        this._administrativeUnit = value;
    };
    /**
     * Sets the classes property value. Classes taught at the school. Nullable.
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        this._classes = value;
    };
    /**
     * Sets the createdBy property value. Entity who created the school.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the externalId property value. ID of school in syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Sets the externalPrincipalId property value. ID of principal in syncing system.
     * @param value Value to set for the externalPrincipalId property.
     */
    public set externalPrincipalId(value: string | undefined) {
        this._externalPrincipalId = value;
    };
    /**
     * Sets the fax property value. 
     * @param value Value to set for the fax property.
     */
    public set fax(value: string | undefined) {
        this._fax = value;
    };
    /**
     * Sets the highestGrade property value. Highest grade taught.
     * @param value Value to set for the highestGrade property.
     */
    public set highestGrade(value: string | undefined) {
        this._highestGrade = value;
    };
    /**
     * Sets the lowestGrade property value. Lowest grade taught.
     * @param value Value to set for the lowestGrade property.
     */
    public set lowestGrade(value: string | undefined) {
        this._lowestGrade = value;
    };
    /**
     * Sets the phone property value. Phone number of school.
     * @param value Value to set for the phone property.
     */
    public set phone(value: string | undefined) {
        this._phone = value;
    };
    /**
     * Sets the principalEmail property value. Email address of the principal.
     * @param value Value to set for the principalEmail property.
     */
    public set principalEmail(value: string | undefined) {
        this._principalEmail = value;
    };
    /**
     * Sets the principalName property value. Name of the principal.
     * @param value Value to set for the principalName property.
     */
    public set principalName(value: string | undefined) {
        this._principalName = value;
    };
    /**
     * Sets the schoolNumber property value. School Number.
     * @param value Value to set for the schoolNumber property.
     */
    public set schoolNumber(value: string | undefined) {
        this._schoolNumber = value;
    };
    /**
     * Sets the users property value. Users in the school. Nullable.
     * @param value Value to set for the users property.
     */
    public set users(value: EducationUser[] | undefined) {
        this._users = value;
    };
}
