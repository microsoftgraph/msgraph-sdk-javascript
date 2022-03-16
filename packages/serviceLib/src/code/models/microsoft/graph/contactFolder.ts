import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {Contact, Entity, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContactFolder extends Entity implements Parsable {
    /** The collection of child folders in the folder. Navigation property. Read-only. Nullable.  */
    private _childFolders?: ContactFolder[] | undefined;
    /** The contacts in the folder. Navigation property. Read-only. Nullable.  */
    private _contacts?: Contact[] | undefined;
    /** The folder's display name.  */
    private _displayName?: string | undefined;
    /** The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The ID of the folder's parent folder.  */
    private _parentFolderId?: string | undefined;
    /** The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the childFolders property value. The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     * @returns a contactFolder
     */
    public get childFolders() {
        return this._childFolders;
    };
    /**
     * Sets the childFolders property value. The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     * @param value Value to set for the childFolders property.
     */
    public set childFolders(value: ContactFolder[] | undefined) {
        this._childFolders = value;
    };
    /**
     * Instantiates a new contactFolder and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contacts property value. The contacts in the folder. Navigation property. Read-only. Nullable.
     * @returns a contact
     */
    public get contacts() {
        return this._contacts;
    };
    /**
     * Sets the contacts property value. The contacts in the folder. Navigation property. Read-only. Nullable.
     * @param value Value to set for the contacts property.
     */
    public set contacts(value: Contact[] | undefined) {
        this._contacts = value;
    };
    /**
     * Gets the displayName property value. The folder's display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The folder's display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["childFolders", (o, n) => { (o as unknown as ContactFolder).childFolders = n.getCollectionOfObjectValues<ContactFolder>(createContactFolderFromDiscriminatorValue); }],
            ["contacts", (o, n) => { (o as unknown as ContactFolder).contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as ContactFolder).displayName = n.getStringValue(); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as ContactFolder).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); }],
            ["parentFolderId", (o, n) => { (o as unknown as ContactFolder).parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as ContactFolder).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the parentFolderId property value. The ID of the folder's parent folder.
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Sets the parentFolderId property value. The ID of the folder's parent folder.
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ContactFolder>("childFolders", this.childFolders);
        writer.writeCollectionOfObjectValues<Contact>("contacts", this.contacts);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
}
