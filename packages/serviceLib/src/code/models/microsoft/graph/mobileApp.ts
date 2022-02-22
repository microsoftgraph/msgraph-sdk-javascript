import {Entity, MimeContent, MobileAppAssignment, MobileAppCategory, MobileAppPublishingState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileApp extends Entity implements Parsable {
    /** The list of group assignments for this mobile app.  */
    private _assignments?: MobileAppAssignment[] | undefined;
    /** The list of categories for this app.  */
    private _categories?: MobileAppCategory[] | undefined;
    /** The date and time the app was created.  */
    private _createdDateTime?: Date | undefined;
    /** The description of the app.  */
    private _description?: string | undefined;
    /** The developer of the app.  */
    private _developer?: string | undefined;
    /** The admin provided or imported title of the app.  */
    private _displayName?: string | undefined;
    /** The more information Url.  */
    private _informationUrl?: string | undefined;
    /** The value indicating whether the app is marked as featured by the admin.  */
    private _isFeatured?: boolean | undefined;
    /** The large icon, to be displayed in the app details and used for upload of the icon.  */
    private _largeIcon?: MimeContent | undefined;
    /** The date and time the app was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Notes for the app.  */
    private _notes?: string | undefined;
    /** The owner of the app.  */
    private _owner?: string | undefined;
    /** The privacy statement Url.  */
    private _privacyInformationUrl?: string | undefined;
    /** The publisher of the app.  */
    private _publisher?: string | undefined;
    /** The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.  */
    private _publishingState?: MobileAppPublishingState | undefined;
    /**
     * Instantiates a new mobileApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignments property value. The list of group assignments for this mobile app.
     * @returns a mobileAppAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the categories property value. The list of categories for this app.
     * @returns a mobileAppCategory
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Gets the createdDateTime property value. The date and time the app was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. The description of the app.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the developer property value. The developer of the app.
     * @returns a string
     */
    public get developer() {
        return this._developer;
    };
    /**
     * Gets the displayName property value. The admin provided or imported title of the app.
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
     * Gets the isFeatured property value. The value indicating whether the app is marked as featured by the admin.
     * @returns a boolean
     */
    public get isFeatured() {
        return this._isFeatured;
    };
    /**
     * Gets the largeIcon property value. The large icon, to be displayed in the app details and used for upload of the icon.
     * @returns a mimeContent
     */
    public get largeIcon() {
        return this._largeIcon;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time the app was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the notes property value. Notes for the app.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Gets the owner property value. The owner of the app.
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Gets the privacyInformationUrl property value. The privacy statement Url.
     * @returns a string
     */
    public get privacyInformationUrl() {
        return this._privacyInformationUrl;
    };
    /**
     * Gets the publisher property value. The publisher of the app.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Gets the publishingState property value. The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.
     * @returns a mobileAppPublishingState
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignments", (o, n) => { (o as unknown as MobileApp).assignments = n.getCollectionOfObjectValues<MobileAppAssignment>(MobileAppAssignment); }],
            ["categories", (o, n) => { (o as unknown as MobileApp).categories = n.getCollectionOfObjectValues<MobileAppCategory>(MobileAppCategory); }],
            ["createdDateTime", (o, n) => { (o as unknown as MobileApp).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as MobileApp).description = n.getStringValue(); }],
            ["developer", (o, n) => { (o as unknown as MobileApp).developer = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as MobileApp).displayName = n.getStringValue(); }],
            ["informationUrl", (o, n) => { (o as unknown as MobileApp).informationUrl = n.getStringValue(); }],
            ["isFeatured", (o, n) => { (o as unknown as MobileApp).isFeatured = n.getBooleanValue(); }],
            ["largeIcon", (o, n) => { (o as unknown as MobileApp).largeIcon = n.getObjectValue<MimeContent>(MimeContent); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as MobileApp).lastModifiedDateTime = n.getDateValue(); }],
            ["notes", (o, n) => { (o as unknown as MobileApp).notes = n.getStringValue(); }],
            ["owner", (o, n) => { (o as unknown as MobileApp).owner = n.getStringValue(); }],
            ["privacyInformationUrl", (o, n) => { (o as unknown as MobileApp).privacyInformationUrl = n.getStringValue(); }],
            ["publisher", (o, n) => { (o as unknown as MobileApp).publisher = n.getStringValue(); }],
            ["publishingState", (o, n) => { (o as unknown as MobileApp).publishingState = n.getEnumValue<MobileAppPublishingState>(MobileAppPublishingState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MobileAppAssignment>("assignments", this.assignments);
        writer.writeCollectionOfObjectValues<MobileAppCategory>("categories", this.categories);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("developer", this.developer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("informationUrl", this.informationUrl);
        writer.writeBooleanValue("isFeatured", this.isFeatured);
        writer.writeObjectValue<MimeContent>("largeIcon", this.largeIcon);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("notes", this.notes);
        writer.writeStringValue("owner", this.owner);
        writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeEnumValue<MobileAppPublishingState>("publishingState", this.publishingState);
    };
    /**
     * Sets the assignments property value. The list of group assignments for this mobile app.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: MobileAppAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the categories property value. The list of categories for this app.
     * @param value Value to set for the categories property.
     */
    public set categories(value: MobileAppCategory[] | undefined) {
        this._categories = value;
    };
    /**
     * Sets the createdDateTime property value. The date and time the app was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. The description of the app.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the developer property value. The developer of the app.
     * @param value Value to set for the developer property.
     */
    public set developer(value: string | undefined) {
        this._developer = value;
    };
    /**
     * Sets the displayName property value. The admin provided or imported title of the app.
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
     * Sets the isFeatured property value. The value indicating whether the app is marked as featured by the admin.
     * @param value Value to set for the isFeatured property.
     */
    public set isFeatured(value: boolean | undefined) {
        this._isFeatured = value;
    };
    /**
     * Sets the largeIcon property value. The large icon, to be displayed in the app details and used for upload of the icon.
     * @param value Value to set for the largeIcon property.
     */
    public set largeIcon(value: MimeContent | undefined) {
        this._largeIcon = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time the app was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the notes property value. Notes for the app.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Sets the owner property value. The owner of the app.
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        this._owner = value;
    };
    /**
     * Sets the privacyInformationUrl property value. The privacy statement Url.
     * @param value Value to set for the privacyInformationUrl property.
     */
    public set privacyInformationUrl(value: string | undefined) {
        this._privacyInformationUrl = value;
    };
    /**
     * Sets the publisher property value. The publisher of the app.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Sets the publishingState property value. The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: MobileAppPublishingState | undefined) {
        this._publishingState = value;
    };
}
