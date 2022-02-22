import {Entity, IdentitySet, ItemReference, User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BaseItem extends Entity implements Parsable {
    /** Identity of the user, device, or application which created the item. Read-only.  */
    private _createdBy?: IdentitySet | undefined;
    /** Identity of the user who created the item. Read-only.  */
    private _createdByUser?: User | undefined;
    /** Date and time of item creation. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Provides a user-visible description of the item. Optional.  */
    private _description?: string | undefined;
    /** ETag for the item. Read-only.  */
    private _eTag?: string | undefined;
    /** Identity of the user, device, and application which last modified the item. Read-only.  */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Identity of the user who last modified the item. Read-only.  */
    private _lastModifiedByUser?: User | undefined;
    /** Date and time the item was last modified. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The name of the item. Read-write.  */
    private _name?: string | undefined;
    /** Parent information, if the item has a parent. Read-write.  */
    private _parentReference?: ItemReference | undefined;
    /** URL that displays the resource in the browser. Read-only.  */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new baseItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. Identity of the user, device, or application which created the item. Read-only.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdByUser property value. Identity of the user who created the item. Read-only.
     * @returns a user
     */
    public get createdByUser() {
        return this._createdByUser;
    };
    /**
     * Gets the createdDateTime property value. Date and time of item creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. Provides a user-visible description of the item. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the eTag property value. ETag for the item. Read-only.
     * @returns a string
     */
    public get eTag() {
        return this._eTag;
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Gets the lastModifiedByUser property value. Identity of the user who last modified the item. Read-only.
     * @returns a user
     */
    public get lastModifiedByUser() {
        return this._lastModifiedByUser;
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the name property value. The name of the item. Read-write.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the parentReference property value. Parent information, if the item has a parent. Read-write.
     * @returns a itemReference
     */
    public get parentReference() {
        return this._parentReference;
    };
    /**
     * Gets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdBy", (o, n) => { (o as unknown as BaseItem).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["createdByUser", (o, n) => { (o as unknown as BaseItem).createdByUser = n.getObjectValue<User>(User); }],
            ["createdDateTime", (o, n) => { (o as unknown as BaseItem).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as BaseItem).description = n.getStringValue(); }],
            ["eTag", (o, n) => { (o as unknown as BaseItem).eTag = n.getStringValue(); }],
            ["lastModifiedBy", (o, n) => { (o as unknown as BaseItem).lastModifiedBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["lastModifiedByUser", (o, n) => { (o as unknown as BaseItem).lastModifiedByUser = n.getObjectValue<User>(User); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as BaseItem).lastModifiedDateTime = n.getDateValue(); }],
            ["name", (o, n) => { (o as unknown as BaseItem).name = n.getStringValue(); }],
            ["parentReference", (o, n) => { (o as unknown as BaseItem).parentReference = n.getObjectValue<ItemReference>(ItemReference); }],
            ["webUrl", (o, n) => { (o as unknown as BaseItem).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeObjectValue<User>("createdByUser", this.createdByUser);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("eTag", this.eTag);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeObjectValue<User>("lastModifiedByUser", this.lastModifiedByUser);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<ItemReference>("parentReference", this.parentReference);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Sets the createdBy property value. Identity of the user, device, or application which created the item. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdByUser property value. Identity of the user who created the item. Read-only.
     * @param value Value to set for the createdByUser property.
     */
    public set createdByUser(value: User | undefined) {
        this._createdByUser = value;
    };
    /**
     * Sets the createdDateTime property value. Date and time of item creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. Provides a user-visible description of the item. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the eTag property value. ETag for the item. Read-only.
     * @param value Value to set for the eTag property.
     */
    public set eTag(value: string | undefined) {
        this._eTag = value;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Sets the lastModifiedByUser property value. Identity of the user who last modified the item. Read-only.
     * @param value Value to set for the lastModifiedByUser property.
     */
    public set lastModifiedByUser(value: User | undefined) {
        this._lastModifiedByUser = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the name property value. The name of the item. Read-write.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the parentReference property value. Parent information, if the item has a parent. Read-write.
     * @param value Value to set for the parentReference property.
     */
    public set parentReference(value: ItemReference | undefined) {
        this._parentReference = value;
    };
    /**
     * Sets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
