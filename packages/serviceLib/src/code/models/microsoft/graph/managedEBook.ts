import {DeviceInstallState, EBookInstallSummary, Entity, ManagedEBookAssignment, MimeContent, UserInstallStateSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedEBook extends Entity implements Parsable {
    /** The list of assignments for this eBook.  */
    private _assignments?: ManagedEBookAssignment[] | undefined;
    /** The date and time when the eBook file was created.  */
    private _createdDateTime?: Date | undefined;
    /** Description.  */
    private _description?: string | undefined;
    /** The list of installation states for this eBook.  */
    private _deviceStates?: DeviceInstallState[] | undefined;
    /** Name of the eBook.  */
    private _displayName?: string | undefined;
    /** The more information Url.  */
    private _informationUrl?: string | undefined;
    /** Mobile App Install Summary.  */
    private _installSummary?: EBookInstallSummary | undefined;
    /** Book cover.  */
    private _largeCover?: MimeContent | undefined;
    /** The date and time when the eBook was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The privacy statement Url.  */
    private _privacyInformationUrl?: string | undefined;
    /** The date and time when the eBook was published.  */
    private _publishedDateTime?: Date | undefined;
    /** Publisher.  */
    private _publisher?: string | undefined;
    /** The list of installation states for this eBook.  */
    private _userStateSummary?: UserInstallStateSummary[] | undefined;
    /**
     * Instantiates a new managedEBook and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignments property value. The list of assignments for this eBook.
     * @returns a managedEBookAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the createdDateTime property value. The date and time when the eBook file was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. Description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the deviceStates property value. The list of installation states for this eBook.
     * @returns a deviceInstallState
     */
    public get deviceStates() {
        return this._deviceStates;
    };
    /**
     * Gets the displayName property value. Name of the eBook.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the informationUrl property value. The more information Url.
     * @returns a string
     */
    public get informationUrl() {
        return this._informationUrl;
    };
    /**
     * Gets the installSummary property value. Mobile App Install Summary.
     * @returns a eBookInstallSummary
     */
    public get installSummary() {
        return this._installSummary;
    };
    /**
     * Gets the largeCover property value. Book cover.
     * @returns a mimeContent
     */
    public get largeCover() {
        return this._largeCover;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the eBook was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the privacyInformationUrl property value. The privacy statement Url.
     * @returns a string
     */
    public get privacyInformationUrl() {
        return this._privacyInformationUrl;
    };
    /**
     * Gets the publishedDateTime property value. The date and time when the eBook was published.
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Gets the publisher property value. Publisher.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Gets the userStateSummary property value. The list of installation states for this eBook.
     * @returns a userInstallStateSummary
     */
    public get userStateSummary() {
        return this._userStateSummary;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignments", (o, n) => { (o as unknown as ManagedEBook).assignments = n.getCollectionOfObjectValues<ManagedEBookAssignment>(ManagedEBookAssignment); }],
            ["createdDateTime", (o, n) => { (o as unknown as ManagedEBook).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as ManagedEBook).description = n.getStringValue(); }],
            ["deviceStates", (o, n) => { (o as unknown as ManagedEBook).deviceStates = n.getCollectionOfObjectValues<DeviceInstallState>(DeviceInstallState); }],
            ["displayName", (o, n) => { (o as unknown as ManagedEBook).displayName = n.getStringValue(); }],
            ["informationUrl", (o, n) => { (o as unknown as ManagedEBook).informationUrl = n.getStringValue(); }],
            ["installSummary", (o, n) => { (o as unknown as ManagedEBook).installSummary = n.getObjectValue<EBookInstallSummary>(EBookInstallSummary); }],
            ["largeCover", (o, n) => { (o as unknown as ManagedEBook).largeCover = n.getObjectValue<MimeContent>(MimeContent); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ManagedEBook).lastModifiedDateTime = n.getDateValue(); }],
            ["privacyInformationUrl", (o, n) => { (o as unknown as ManagedEBook).privacyInformationUrl = n.getStringValue(); }],
            ["publishedDateTime", (o, n) => { (o as unknown as ManagedEBook).publishedDateTime = n.getDateValue(); }],
            ["publisher", (o, n) => { (o as unknown as ManagedEBook).publisher = n.getStringValue(); }],
            ["userStateSummary", (o, n) => { (o as unknown as ManagedEBook).userStateSummary = n.getCollectionOfObjectValues<UserInstallStateSummary>(UserInstallStateSummary); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<DeviceInstallState>("deviceStates", this.deviceStates);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("informationUrl", this.informationUrl);
        writer.writeObjectValue<EBookInstallSummary>("installSummary", this.installSummary);
        writer.writeObjectValue<MimeContent>("largeCover", this.largeCover);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeCollectionOfObjectValues<UserInstallStateSummary>("userStateSummary", this.userStateSummary);
    };
    /**
     * Sets the assignments property value. The list of assignments for this eBook.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: ManagedEBookAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the eBook file was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. Description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the deviceStates property value. The list of installation states for this eBook.
     * @param value Value to set for the deviceStates property.
     */
    public set deviceStates(value: DeviceInstallState[] | undefined) {
        this._deviceStates = value;
    };
    /**
     * Sets the displayName property value. Name of the eBook.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the informationUrl property value. The more information Url.
     * @param value Value to set for the informationUrl property.
     */
    public set informationUrl(value: string | undefined) {
        this._informationUrl = value;
    };
    /**
     * Sets the installSummary property value. Mobile App Install Summary.
     * @param value Value to set for the installSummary property.
     */
    public set installSummary(value: EBookInstallSummary | undefined) {
        this._installSummary = value;
    };
    /**
     * Sets the largeCover property value. Book cover.
     * @param value Value to set for the largeCover property.
     */
    public set largeCover(value: MimeContent | undefined) {
        this._largeCover = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the eBook was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the privacyInformationUrl property value. The privacy statement Url.
     * @param value Value to set for the privacyInformationUrl property.
     */
    public set privacyInformationUrl(value: string | undefined) {
        this._privacyInformationUrl = value;
    };
    /**
     * Sets the publishedDateTime property value. The date and time when the eBook was published.
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        this._publishedDateTime = value;
    };
    /**
     * Sets the publisher property value. Publisher.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Sets the userStateSummary property value. The list of installation states for this eBook.
     * @param value Value to set for the userStateSummary property.
     */
    public set userStateSummary(value: UserInstallStateSummary[] | undefined) {
        this._userStateSummary = value;
    };
}
