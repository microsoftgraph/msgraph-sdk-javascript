import {DirectoryObject, OnPremisesProvisioningError, Phone, PhysicalOfficeAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrgContact extends DirectoryObject implements Parsable {
    /** Postal addresses for this organizational contact. For now a contact can only have one physical address.  */
    private _addresses?: PhysicalOfficeAddress[] | undefined;
    /** Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _companyName?: string | undefined;
    /** The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _department?: string | undefined;
    /** The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.  */
    private _directReports?: DirectoryObject[] | undefined;
    /** Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.  */
    private _displayName?: string | undefined;
    /** First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _givenName?: string | undefined;
    /** Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _jobTitle?: string | undefined;
    /** The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _mail?: string | undefined;
    /** Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).  */
    private _mailNickname?: string | undefined;
    /** The user or contact that is this contact's manager. Read-only. Supports $expand.  */
    private _manager?: DirectoryObject | undefined;
    /** Groups that this contact is a member of. Read-only. Nullable. Supports $expand.  */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in).  */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).  */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values).  */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).  */
    private _phones?: Phone[] | undefined;
    /** For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith).  */
    private _proxyAddresses?: string[] | undefined;
    /** Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)  */
    private _surname?: string | undefined;
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new orgContact and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
     * @returns a physicalOfficeAddress
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Gets the companyName property value. Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Gets the department property value. The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Gets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get directReports() {
        return this._directReports;
    };
    /**
     * Gets the displayName property value. Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the givenName property value. First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Gets the jobTitle property value. Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Gets the mail property value. The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Gets the mailNickname property value. Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Gets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Gets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).
     * @returns a onPremisesProvisioningError
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Gets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Gets the proxyAddresses property value. For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Gets the surname property value. Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Gets the transitiveMemberOf property value. 
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["addresses", (o, n) => { (o as unknown as OrgContact).addresses = n.getCollectionOfObjectValues<PhysicalOfficeAddress>(PhysicalOfficeAddress); }],
            ["companyName", (o, n) => { (o as unknown as OrgContact).companyName = n.getStringValue(); }],
            ["department", (o, n) => { (o as unknown as OrgContact).department = n.getStringValue(); }],
            ["directReports", (o, n) => { (o as unknown as OrgContact).directReports = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["displayName", (o, n) => { (o as unknown as OrgContact).displayName = n.getStringValue(); }],
            ["givenName", (o, n) => { (o as unknown as OrgContact).givenName = n.getStringValue(); }],
            ["jobTitle", (o, n) => { (o as unknown as OrgContact).jobTitle = n.getStringValue(); }],
            ["mail", (o, n) => { (o as unknown as OrgContact).mail = n.getStringValue(); }],
            ["mailNickname", (o, n) => { (o as unknown as OrgContact).mailNickname = n.getStringValue(); }],
            ["manager", (o, n) => { (o as unknown as OrgContact).manager = n.getObjectValue<DirectoryObject>(DirectoryObject); }],
            ["memberOf", (o, n) => { (o as unknown as OrgContact).memberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["onPremisesLastSyncDateTime", (o, n) => { (o as unknown as OrgContact).onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesProvisioningErrors", (o, n) => { (o as unknown as OrgContact).onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(OnPremisesProvisioningError); }],
            ["onPremisesSyncEnabled", (o, n) => { (o as unknown as OrgContact).onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["phones", (o, n) => { (o as unknown as OrgContact).phones = n.getCollectionOfObjectValues<Phone>(Phone); }],
            ["proxyAddresses", (o, n) => { (o as unknown as OrgContact).proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); }],
            ["surname", (o, n) => { (o as unknown as OrgContact).surname = n.getStringValue(); }],
            ["transitiveMemberOf", (o, n) => { (o as unknown as OrgContact).transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PhysicalOfficeAddress>("addresses", this.addresses);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeCollectionOfObjectValues<DirectoryObject>("directReports", this.directReports);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("mail", this.mail);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeObjectValue<DirectoryObject>("manager", this.manager);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        writer.writeStringValue("surname", this.surname);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
    };
    /**
     * Sets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: PhysicalOfficeAddress[] | undefined) {
        this._addresses = value;
    };
    /**
     * Sets the companyName property value. Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Sets the department property value. The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Sets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
     * @param value Value to set for the directReports property.
     */
    public set directReports(value: DirectoryObject[] | undefined) {
        this._directReports = value;
    };
    /**
     * Sets the displayName property value. Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the givenName property value. First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Sets the jobTitle property value. Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Sets the mail property value. The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Sets the mailNickname property value. Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Sets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
     * @param value Value to set for the manager property.
     */
    public set manager(value: DirectoryObject | undefined) {
        this._manager = value;
    };
    /**
     * Sets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        this._onPremisesProvisioningErrors = value;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Sets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Sets the proxyAddresses property value. For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        this._proxyAddresses = value;
    };
    /**
     * Sets the surname property value. Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Sets the transitiveMemberOf property value. 
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
}
