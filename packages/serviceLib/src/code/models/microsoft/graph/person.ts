import {Entity, Location, PersonType, Phone, ScoredEmailAddress, Website} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Person extends Entity implements Parsable {
    /** The person's birthday.  */
    private _birthday?: string | undefined;
    /** The name of the person's company.  */
    private _companyName?: string | undefined;
    /** The person's department.  */
    private _department?: string | undefined;
    /** The person's display name.  */
    private _displayName?: string | undefined;
    /** The person's given name.  */
    private _givenName?: string | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.  */
    private _imAddress?: string | undefined;
    /** true if the user has flagged this person as a favorite.  */
    private _isFavorite?: boolean | undefined;
    /** The person's job title.  */
    private _jobTitle?: string | undefined;
    /** The location of the person's office.  */
    private _officeLocation?: string | undefined;
    /** Free-form notes that the user has taken about this person.  */
    private _personNotes?: string | undefined;
    /** The type of person.  */
    private _personType?: PersonType | undefined;
    /** The person's phone numbers.  */
    private _phones?: Phone[] | undefined;
    /** The person's addresses.  */
    private _postalAddresses?: Location[] | undefined;
    /** The person's profession.  */
    private _profession?: string | undefined;
    /** The person's email addresses.  */
    private _scoredEmailAddresses?: ScoredEmailAddress[] | undefined;
    /** The person's surname.  */
    private _surname?: string | undefined;
    /** The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.  */
    private _userPrincipalName?: string | undefined;
    /** The person's websites.  */
    private _websites?: Website[] | undefined;
    /** The phonetic Japanese name of the person's company.  */
    private _yomiCompany?: string | undefined;
    /**
     * Instantiates a new person and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the birthday property value. The person's birthday.
     * @returns a string
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Gets the companyName property value. The name of the person's company.
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Gets the department property value. The person's department.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Gets the displayName property value. The person's display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the givenName property value. The person's given name.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Gets the imAddress property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
     * @returns a string
     */
    public get imAddress() {
        return this._imAddress;
    };
    /**
     * Gets the isFavorite property value. true if the user has flagged this person as a favorite.
     * @returns a boolean
     */
    public get isFavorite() {
        return this._isFavorite;
    };
    /**
     * Gets the jobTitle property value. The person's job title.
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Gets the officeLocation property value. The location of the person's office.
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Gets the personNotes property value. Free-form notes that the user has taken about this person.
     * @returns a string
     */
    public get personNotes() {
        return this._personNotes;
    };
    /**
     * Gets the personType property value. The type of person.
     * @returns a personType
     */
    public get personType() {
        return this._personType;
    };
    /**
     * Gets the phones property value. The person's phone numbers.
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Gets the postalAddresses property value. The person's addresses.
     * @returns a location
     */
    public get postalAddresses() {
        return this._postalAddresses;
    };
    /**
     * Gets the profession property value. The person's profession.
     * @returns a string
     */
    public get profession() {
        return this._profession;
    };
    /**
     * Gets the scoredEmailAddresses property value. The person's email addresses.
     * @returns a scoredEmailAddress
     */
    public get scoredEmailAddresses() {
        return this._scoredEmailAddresses;
    };
    /**
     * Gets the surname property value. The person's surname.
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Gets the websites property value. The person's websites.
     * @returns a website
     */
    public get websites() {
        return this._websites;
    };
    /**
     * Gets the yomiCompany property value. The phonetic Japanese name of the person's company.
     * @returns a string
     */
    public get yomiCompany() {
        return this._yomiCompany;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["birthday", (o, n) => { (o as unknown as Person).birthday = n.getStringValue(); }],
            ["companyName", (o, n) => { (o as unknown as Person).companyName = n.getStringValue(); }],
            ["department", (o, n) => { (o as unknown as Person).department = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as Person).displayName = n.getStringValue(); }],
            ["givenName", (o, n) => { (o as unknown as Person).givenName = n.getStringValue(); }],
            ["imAddress", (o, n) => { (o as unknown as Person).imAddress = n.getStringValue(); }],
            ["isFavorite", (o, n) => { (o as unknown as Person).isFavorite = n.getBooleanValue(); }],
            ["jobTitle", (o, n) => { (o as unknown as Person).jobTitle = n.getStringValue(); }],
            ["officeLocation", (o, n) => { (o as unknown as Person).officeLocation = n.getStringValue(); }],
            ["personNotes", (o, n) => { (o as unknown as Person).personNotes = n.getStringValue(); }],
            ["personType", (o, n) => { (o as unknown as Person).personType = n.getObjectValue<PersonType>(PersonType); }],
            ["phones", (o, n) => { (o as unknown as Person).phones = n.getCollectionOfObjectValues<Phone>(Phone); }],
            ["postalAddresses", (o, n) => { (o as unknown as Person).postalAddresses = n.getCollectionOfObjectValues<Location>(Location); }],
            ["profession", (o, n) => { (o as unknown as Person).profession = n.getStringValue(); }],
            ["scoredEmailAddresses", (o, n) => { (o as unknown as Person).scoredEmailAddresses = n.getCollectionOfObjectValues<ScoredEmailAddress>(ScoredEmailAddress); }],
            ["surname", (o, n) => { (o as unknown as Person).surname = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as Person).userPrincipalName = n.getStringValue(); }],
            ["websites", (o, n) => { (o as unknown as Person).websites = n.getCollectionOfObjectValues<Website>(Website); }],
            ["yomiCompany", (o, n) => { (o as unknown as Person).yomiCompany = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("birthday", this.birthday);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("imAddress", this.imAddress);
        writer.writeBooleanValue("isFavorite", this.isFavorite);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeStringValue("personNotes", this.personNotes);
        writer.writeObjectValue<PersonType>("personType", this.personType);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
        writer.writeCollectionOfObjectValues<Location>("postalAddresses", this.postalAddresses);
        writer.writeStringValue("profession", this.profession);
        writer.writeCollectionOfObjectValues<ScoredEmailAddress>("scoredEmailAddresses", this.scoredEmailAddresses);
        writer.writeStringValue("surname", this.surname);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeCollectionOfObjectValues<Website>("websites", this.websites);
        writer.writeStringValue("yomiCompany", this.yomiCompany);
    };
    /**
     * Sets the birthday property value. The person's birthday.
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: string | undefined) {
        this._birthday = value;
    };
    /**
     * Sets the companyName property value. The name of the person's company.
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Sets the department property value. The person's department.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Sets the displayName property value. The person's display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the givenName property value. The person's given name.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Sets the imAddress property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
     * @param value Value to set for the imAddress property.
     */
    public set imAddress(value: string | undefined) {
        this._imAddress = value;
    };
    /**
     * Sets the isFavorite property value. true if the user has flagged this person as a favorite.
     * @param value Value to set for the isFavorite property.
     */
    public set isFavorite(value: boolean | undefined) {
        this._isFavorite = value;
    };
    /**
     * Sets the jobTitle property value. The person's job title.
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Sets the officeLocation property value. The location of the person's office.
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        this._officeLocation = value;
    };
    /**
     * Sets the personNotes property value. Free-form notes that the user has taken about this person.
     * @param value Value to set for the personNotes property.
     */
    public set personNotes(value: string | undefined) {
        this._personNotes = value;
    };
    /**
     * Sets the personType property value. The type of person.
     * @param value Value to set for the personType property.
     */
    public set personType(value: PersonType | undefined) {
        this._personType = value;
    };
    /**
     * Sets the phones property value. The person's phone numbers.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Sets the postalAddresses property value. The person's addresses.
     * @param value Value to set for the postalAddresses property.
     */
    public set postalAddresses(value: Location[] | undefined) {
        this._postalAddresses = value;
    };
    /**
     * Sets the profession property value. The person's profession.
     * @param value Value to set for the profession property.
     */
    public set profession(value: string | undefined) {
        this._profession = value;
    };
    /**
     * Sets the scoredEmailAddresses property value. The person's email addresses.
     * @param value Value to set for the scoredEmailAddresses property.
     */
    public set scoredEmailAddresses(value: ScoredEmailAddress[] | undefined) {
        this._scoredEmailAddresses = value;
    };
    /**
     * Sets the surname property value. The person's surname.
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Sets the websites property value. The person's websites.
     * @param value Value to set for the websites property.
     */
    public set websites(value: Website[] | undefined) {
        this._websites = value;
    };
    /**
     * Sets the yomiCompany property value. The phonetic Japanese name of the person's company.
     * @param value Value to set for the yomiCompany property.
     */
    public set yomiCompany(value: string | undefined) {
        this._yomiCompany = value;
    };
}
