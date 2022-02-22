import {EmailAddress, Extension, MultiValueLegacyExtendedProperty, OutlookItem, PhysicalAddress, ProfilePhoto, SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contact extends OutlookItem implements Parsable {
    /** The name of the contact's assistant.  */
    private _assistantName?: string | undefined;
    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _birthday?: Date | undefined;
    /** The contact's business address.  */
    private _businessAddress?: PhysicalAddress | undefined;
    /** The business home page of the contact.  */
    private _businessHomePage?: string | undefined;
    /** The contact's business phone numbers.  */
    private _businessPhones?: string[] | undefined;
    /** The names of the contact's children.  */
    private _children?: string[] | undefined;
    /** The name of the contact's company.  */
    private _companyName?: string | undefined;
    /** The contact's department.  */
    private _department?: string | undefined;
    /** The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.  */
    private _displayName?: string | undefined;
    /** The contact's email addresses.  */
    private _emailAddresses?: EmailAddress[] | undefined;
    /** The collection of open extensions defined for the contact. Read-only. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** The name the contact is filed under.  */
    private _fileAs?: string | undefined;
    /** The contact's generation.  */
    private _generation?: string | undefined;
    /** The contact's given name.  */
    private _givenName?: string | undefined;
    /** The contact's home address.  */
    private _homeAddress?: PhysicalAddress | undefined;
    /** The contact's home phone numbers.  */
    private _homePhones?: string[] | undefined;
    private _imAddresses?: string[] | undefined;
    private _initials?: string | undefined;
    private _jobTitle?: string | undefined;
    private _manager?: string | undefined;
    private _middleName?: string | undefined;
    private _mobilePhone?: string | undefined;
    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    private _nickName?: string | undefined;
    private _officeLocation?: string | undefined;
    private _otherAddress?: PhysicalAddress | undefined;
    private _parentFolderId?: string | undefined;
    private _personalNotes?: string | undefined;
    /** Optional contact picture. You can get or set a photo for a contact.  */
    private _photo?: ProfilePhoto | undefined;
    private _profession?: string | undefined;
    /** The collection of single-value extended properties defined for the contact. Read-only. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    private _spouseName?: string | undefined;
    private _surname?: string | undefined;
    private _title?: string | undefined;
    private _yomiCompanyName?: string | undefined;
    private _yomiGivenName?: string | undefined;
    private _yomiSurname?: string | undefined;
    /**
     * Instantiates a new contact and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assistantName property value. The name of the contact's assistant.
     * @returns a string
     */
    public get assistantName() {
        return this._assistantName;
    };
    /**
     * Gets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Gets the businessAddress property value. The contact's business address.
     * @returns a physicalAddress
     */
    public get businessAddress() {
        return this._businessAddress;
    };
    /**
     * Gets the businessHomePage property value. The business home page of the contact.
     * @returns a string
     */
    public get businessHomePage() {
        return this._businessHomePage;
    };
    /**
     * Gets the businessPhones property value. The contact's business phone numbers.
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Gets the children property value. The names of the contact's children.
     * @returns a string
     */
    public get children() {
        return this._children;
    };
    /**
     * Gets the companyName property value. The name of the contact's company.
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Gets the department property value. The contact's department.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Gets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the emailAddresses property value. The contact's email addresses.
     * @returns a emailAddress
     */
    public get emailAddresses() {
        return this._emailAddresses;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the contact. Read-only. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the fileAs property value. The name the contact is filed under.
     * @returns a string
     */
    public get fileAs() {
        return this._fileAs;
    };
    /**
     * Gets the generation property value. The contact's generation.
     * @returns a string
     */
    public get generation() {
        return this._generation;
    };
    /**
     * Gets the givenName property value. The contact's given name.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Gets the homeAddress property value. The contact's home address.
     * @returns a physicalAddress
     */
    public get homeAddress() {
        return this._homeAddress;
    };
    /**
     * Gets the homePhones property value. The contact's home phone numbers.
     * @returns a string
     */
    public get homePhones() {
        return this._homePhones;
    };
    /**
     * Gets the imAddresses property value. 
     * @returns a string
     */
    public get imAddresses() {
        return this._imAddresses;
    };
    /**
     * Gets the initials property value. 
     * @returns a string
     */
    public get initials() {
        return this._initials;
    };
    /**
     * Gets the jobTitle property value. 
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Gets the manager property value. 
     * @returns a string
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Gets the middleName property value. 
     * @returns a string
     */
    public get middleName() {
        return this._middleName;
    };
    /**
     * Gets the mobilePhone property value. 
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Gets the nickName property value. 
     * @returns a string
     */
    public get nickName() {
        return this._nickName;
    };
    /**
     * Gets the officeLocation property value. 
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Gets the otherAddress property value. 
     * @returns a physicalAddress
     */
    public get otherAddress() {
        return this._otherAddress;
    };
    /**
     * Gets the parentFolderId property value. 
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Gets the personalNotes property value. 
     * @returns a string
     */
    public get personalNotes() {
        return this._personalNotes;
    };
    /**
     * Gets the photo property value. Optional contact picture. You can get or set a photo for a contact.
     * @returns a profilePhoto
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Gets the profession property value. 
     * @returns a string
     */
    public get profession() {
        return this._profession;
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Gets the spouseName property value. 
     * @returns a string
     */
    public get spouseName() {
        return this._spouseName;
    };
    /**
     * Gets the surname property value. 
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Gets the yomiCompanyName property value. 
     * @returns a string
     */
    public get yomiCompanyName() {
        return this._yomiCompanyName;
    };
    /**
     * Gets the yomiGivenName property value. 
     * @returns a string
     */
    public get yomiGivenName() {
        return this._yomiGivenName;
    };
    /**
     * Gets the yomiSurname property value. 
     * @returns a string
     */
    public get yomiSurname() {
        return this._yomiSurname;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assistantName", (o, n) => { (o as unknown as Contact).assistantName = n.getStringValue(); }],
            ["birthday", (o, n) => { (o as unknown as Contact).birthday = n.getDateValue(); }],
            ["businessAddress", (o, n) => { (o as unknown as Contact).businessAddress = n.getObjectValue<PhysicalAddress>(PhysicalAddress); }],
            ["businessHomePage", (o, n) => { (o as unknown as Contact).businessHomePage = n.getStringValue(); }],
            ["businessPhones", (o, n) => { (o as unknown as Contact).businessPhones = n.getCollectionOfPrimitiveValues<string>(); }],
            ["children", (o, n) => { (o as unknown as Contact).children = n.getCollectionOfPrimitiveValues<string>(); }],
            ["companyName", (o, n) => { (o as unknown as Contact).companyName = n.getStringValue(); }],
            ["department", (o, n) => { (o as unknown as Contact).department = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as Contact).displayName = n.getStringValue(); }],
            ["emailAddresses", (o, n) => { (o as unknown as Contact).emailAddresses = n.getCollectionOfObjectValues<EmailAddress>(EmailAddress); }],
            ["extensions", (o, n) => { (o as unknown as Contact).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["fileAs", (o, n) => { (o as unknown as Contact).fileAs = n.getStringValue(); }],
            ["generation", (o, n) => { (o as unknown as Contact).generation = n.getStringValue(); }],
            ["givenName", (o, n) => { (o as unknown as Contact).givenName = n.getStringValue(); }],
            ["homeAddress", (o, n) => { (o as unknown as Contact).homeAddress = n.getObjectValue<PhysicalAddress>(PhysicalAddress); }],
            ["homePhones", (o, n) => { (o as unknown as Contact).homePhones = n.getCollectionOfPrimitiveValues<string>(); }],
            ["imAddresses", (o, n) => { (o as unknown as Contact).imAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["initials", (o, n) => { (o as unknown as Contact).initials = n.getStringValue(); }],
            ["jobTitle", (o, n) => { (o as unknown as Contact).jobTitle = n.getStringValue(); }],
            ["manager", (o, n) => { (o as unknown as Contact).manager = n.getStringValue(); }],
            ["middleName", (o, n) => { (o as unknown as Contact).middleName = n.getStringValue(); }],
            ["mobilePhone", (o, n) => { (o as unknown as Contact).mobilePhone = n.getStringValue(); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as Contact).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(MultiValueLegacyExtendedProperty); }],
            ["nickName", (o, n) => { (o as unknown as Contact).nickName = n.getStringValue(); }],
            ["officeLocation", (o, n) => { (o as unknown as Contact).officeLocation = n.getStringValue(); }],
            ["otherAddress", (o, n) => { (o as unknown as Contact).otherAddress = n.getObjectValue<PhysicalAddress>(PhysicalAddress); }],
            ["parentFolderId", (o, n) => { (o as unknown as Contact).parentFolderId = n.getStringValue(); }],
            ["personalNotes", (o, n) => { (o as unknown as Contact).personalNotes = n.getStringValue(); }],
            ["photo", (o, n) => { (o as unknown as Contact).photo = n.getObjectValue<ProfilePhoto>(ProfilePhoto); }],
            ["profession", (o, n) => { (o as unknown as Contact).profession = n.getStringValue(); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as Contact).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(SingleValueLegacyExtendedProperty); }],
            ["spouseName", (o, n) => { (o as unknown as Contact).spouseName = n.getStringValue(); }],
            ["surname", (o, n) => { (o as unknown as Contact).surname = n.getStringValue(); }],
            ["title", (o, n) => { (o as unknown as Contact).title = n.getStringValue(); }],
            ["yomiCompanyName", (o, n) => { (o as unknown as Contact).yomiCompanyName = n.getStringValue(); }],
            ["yomiGivenName", (o, n) => { (o as unknown as Contact).yomiGivenName = n.getStringValue(); }],
            ["yomiSurname", (o, n) => { (o as unknown as Contact).yomiSurname = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assistantName", this.assistantName);
        writer.writeDateValue("birthday", this.birthday);
        writer.writeObjectValue<PhysicalAddress>("businessAddress", this.businessAddress);
        writer.writeStringValue("businessHomePage", this.businessHomePage);
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        writer.writeCollectionOfPrimitiveValues<string>("children", this.children);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<EmailAddress>("emailAddresses", this.emailAddresses);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeStringValue("fileAs", this.fileAs);
        writer.writeStringValue("generation", this.generation);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeObjectValue<PhysicalAddress>("homeAddress", this.homeAddress);
        writer.writeCollectionOfPrimitiveValues<string>("homePhones", this.homePhones);
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", this.imAddresses);
        writer.writeStringValue("initials", this.initials);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("manager", this.manager);
        writer.writeStringValue("middleName", this.middleName);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("nickName", this.nickName);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeObjectValue<PhysicalAddress>("otherAddress", this.otherAddress);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeStringValue("personalNotes", this.personalNotes);
        writer.writeObjectValue<ProfilePhoto>("photo", this.photo);
        writer.writeStringValue("profession", this.profession);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeStringValue("spouseName", this.spouseName);
        writer.writeStringValue("surname", this.surname);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("yomiCompanyName", this.yomiCompanyName);
        writer.writeStringValue("yomiGivenName", this.yomiGivenName);
        writer.writeStringValue("yomiSurname", this.yomiSurname);
    };
    /**
     * Sets the assistantName property value. The name of the contact's assistant.
     * @param value Value to set for the assistantName property.
     */
    public set assistantName(value: string | undefined) {
        this._assistantName = value;
    };
    /**
     * Sets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: Date | undefined) {
        this._birthday = value;
    };
    /**
     * Sets the businessAddress property value. The contact's business address.
     * @param value Value to set for the businessAddress property.
     */
    public set businessAddress(value: PhysicalAddress | undefined) {
        this._businessAddress = value;
    };
    /**
     * Sets the businessHomePage property value. The business home page of the contact.
     * @param value Value to set for the businessHomePage property.
     */
    public set businessHomePage(value: string | undefined) {
        this._businessHomePage = value;
    };
    /**
     * Sets the businessPhones property value. The contact's business phone numbers.
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        this._businessPhones = value;
    };
    /**
     * Sets the children property value. The names of the contact's children.
     * @param value Value to set for the children property.
     */
    public set children(value: string[] | undefined) {
        this._children = value;
    };
    /**
     * Sets the companyName property value. The name of the contact's company.
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Sets the department property value. The contact's department.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Sets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the emailAddresses property value. The contact's email addresses.
     * @param value Value to set for the emailAddresses property.
     */
    public set emailAddresses(value: EmailAddress[] | undefined) {
        this._emailAddresses = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the contact. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the fileAs property value. The name the contact is filed under.
     * @param value Value to set for the fileAs property.
     */
    public set fileAs(value: string | undefined) {
        this._fileAs = value;
    };
    /**
     * Sets the generation property value. The contact's generation.
     * @param value Value to set for the generation property.
     */
    public set generation(value: string | undefined) {
        this._generation = value;
    };
    /**
     * Sets the givenName property value. The contact's given name.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Sets the homeAddress property value. The contact's home address.
     * @param value Value to set for the homeAddress property.
     */
    public set homeAddress(value: PhysicalAddress | undefined) {
        this._homeAddress = value;
    };
    /**
     * Sets the homePhones property value. The contact's home phone numbers.
     * @param value Value to set for the homePhones property.
     */
    public set homePhones(value: string[] | undefined) {
        this._homePhones = value;
    };
    /**
     * Sets the imAddresses property value. 
     * @param value Value to set for the imAddresses property.
     */
    public set imAddresses(value: string[] | undefined) {
        this._imAddresses = value;
    };
    /**
     * Sets the initials property value. 
     * @param value Value to set for the initials property.
     */
    public set initials(value: string | undefined) {
        this._initials = value;
    };
    /**
     * Sets the jobTitle property value. 
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Sets the manager property value. 
     * @param value Value to set for the manager property.
     */
    public set manager(value: string | undefined) {
        this._manager = value;
    };
    /**
     * Sets the middleName property value. 
     * @param value Value to set for the middleName property.
     */
    public set middleName(value: string | undefined) {
        this._middleName = value;
    };
    /**
     * Sets the mobilePhone property value. 
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        this._mobilePhone = value;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Sets the nickName property value. 
     * @param value Value to set for the nickName property.
     */
    public set nickName(value: string | undefined) {
        this._nickName = value;
    };
    /**
     * Sets the officeLocation property value. 
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        this._officeLocation = value;
    };
    /**
     * Sets the otherAddress property value. 
     * @param value Value to set for the otherAddress property.
     */
    public set otherAddress(value: PhysicalAddress | undefined) {
        this._otherAddress = value;
    };
    /**
     * Sets the parentFolderId property value. 
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Sets the personalNotes property value. 
     * @param value Value to set for the personalNotes property.
     */
    public set personalNotes(value: string | undefined) {
        this._personalNotes = value;
    };
    /**
     * Sets the photo property value. Optional contact picture. You can get or set a photo for a contact.
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        this._photo = value;
    };
    /**
     * Sets the profession property value. 
     * @param value Value to set for the profession property.
     */
    public set profession(value: string | undefined) {
        this._profession = value;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Sets the spouseName property value. 
     * @param value Value to set for the spouseName property.
     */
    public set spouseName(value: string | undefined) {
        this._spouseName = value;
    };
    /**
     * Sets the surname property value. 
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Sets the yomiCompanyName property value. 
     * @param value Value to set for the yomiCompanyName property.
     */
    public set yomiCompanyName(value: string | undefined) {
        this._yomiCompanyName = value;
    };
    /**
     * Sets the yomiGivenName property value. 
     * @param value Value to set for the yomiGivenName property.
     */
    public set yomiGivenName(value: string | undefined) {
        this._yomiGivenName = value;
    };
    /**
     * Sets the yomiSurname property value. 
     * @param value Value to set for the yomiSurname property.
     */
    public set yomiSurname(value: string | undefined) {
        this._yomiSurname = value;
    };
}
