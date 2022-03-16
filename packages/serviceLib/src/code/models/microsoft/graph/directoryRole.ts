import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {DirectoryObject, ScopedRoleMembership} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryRole extends DirectoryObject implements Parsable {
    /** The description for the directory role. Read-only. Supports $filter (eq), $search, $select.  */
    private _description?: string | undefined;
    /** The display name for the directory role. Read-only. Supports $filter (eq), $search, $select.  */
    private _displayName?: string | undefined;
    /** Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.  */
    private _members?: DirectoryObject[] | undefined;
    /** The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select.  */
    private _roleTemplateId?: string | undefined;
    /** Members of this directory role that are scoped to administrative units. Read-only. Nullable.  */
    private _scopedMembers?: ScopedRoleMembership[] | undefined;
    /**
     * Instantiates a new directoryRole and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description for the directory role. Read-only. Supports $filter (eq), $search, $select.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description for the directory role. Read-only. Supports $filter (eq), $search, $select.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name for the directory role. Read-only. Supports $filter (eq), $search, $select.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the directory role. Read-only. Supports $filter (eq), $search, $select.
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
            ["description", (o, n) => { (o as unknown as DirectoryRole).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as DirectoryRole).displayName = n.getStringValue(); }],
            ["members", (o, n) => { (o as unknown as DirectoryRole).members = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["roleTemplateId", (o, n) => { (o as unknown as DirectoryRole).roleTemplateId = n.getStringValue(); }],
            ["scopedMembers", (o, n) => { (o as unknown as DirectoryRole).scopedMembers = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the members property value. Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the roleTemplateId property value. The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select.
     * @returns a string
     */
    public get roleTemplateId() {
        return this._roleTemplateId;
    };
    /**
     * Sets the roleTemplateId property value. The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select.
     * @param value Value to set for the roleTemplateId property.
     */
    public set roleTemplateId(value: string | undefined) {
        this._roleTemplateId = value;
    };
    /**
     * Gets the scopedMembers property value. Members of this directory role that are scoped to administrative units. Read-only. Nullable.
     * @returns a scopedRoleMembership
     */
    public get scopedMembers() {
        return this._scopedMembers;
    };
    /**
     * Sets the scopedMembers property value. Members of this directory role that are scoped to administrative units. Read-only. Nullable.
     * @param value Value to set for the scopedMembers property.
     */
    public set scopedMembers(value: ScopedRoleMembership[] | undefined) {
        this._scopedMembers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<DirectoryObject>("members", this.members);
        writer.writeStringValue("roleTemplateId", this.roleTemplateId);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedMembers", this.scopedMembers);
    };
}
