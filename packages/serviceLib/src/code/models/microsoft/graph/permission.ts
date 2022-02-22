import {Entity, IdentitySet, ItemReference, SharePointIdentitySet, SharingInvitation, SharingLink} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Permission extends Entity implements Parsable {
    /** A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.  */
    private _expirationDateTime?: Date | undefined;
    private _grantedTo?: IdentitySet | undefined;
    private _grantedToIdentities?: IdentitySet[] | undefined;
    /** For link type permissions, the details of the users to whom permission was granted. Read-only.  */
    private _grantedToIdentitiesV2?: SharePointIdentitySet[] | undefined;
    /** For user type permissions, the details of the users and applications for this permission. Read-only.  */
    private _grantedToV2?: SharePointIdentitySet | undefined;
    /** Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only..  */
    private _hasPassword?: boolean | undefined;
    /** Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.  */
    private _inheritedFrom?: ItemReference | undefined;
    /** Details of any associated sharing invitation for this permission. Read-only.  */
    private _invitation?: SharingInvitation | undefined;
    /** Provides the link details of the current permission, if it is a link type permissions. Read-only.  */
    private _link?: SharingLink | undefined;
    /** The type of permission, for example, read. See below for the full list of roles. Read-only.  */
    private _roles?: string[] | undefined;
    /** A unique token that can be used to access this shared item via the **shares** API. Read-only.  */
    private _shareId?: string | undefined;
    /**
     * Instantiates a new permission and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the expirationDateTime property value. A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Gets the grantedTo property value. 
     * @returns a identitySet
     */
    public get grantedTo() {
        return this._grantedTo;
    };
    /**
     * Gets the grantedToIdentities property value. 
     * @returns a identitySet
     */
    public get grantedToIdentities() {
        return this._grantedToIdentities;
    };
    /**
     * Gets the grantedToIdentitiesV2 property value. For link type permissions, the details of the users to whom permission was granted. Read-only.
     * @returns a sharePointIdentitySet
     */
    public get grantedToIdentitiesV2() {
        return this._grantedToIdentitiesV2;
    };
    /**
     * Gets the grantedToV2 property value. For user type permissions, the details of the users and applications for this permission. Read-only.
     * @returns a sharePointIdentitySet
     */
    public get grantedToV2() {
        return this._grantedToV2;
    };
    /**
     * Gets the hasPassword property value. Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only..
     * @returns a boolean
     */
    public get hasPassword() {
        return this._hasPassword;
    };
    /**
     * Gets the inheritedFrom property value. Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
     * @returns a itemReference
     */
    public get inheritedFrom() {
        return this._inheritedFrom;
    };
    /**
     * Gets the invitation property value. Details of any associated sharing invitation for this permission. Read-only.
     * @returns a sharingInvitation
     */
    public get invitation() {
        return this._invitation;
    };
    /**
     * Gets the link property value. Provides the link details of the current permission, if it is a link type permissions. Read-only.
     * @returns a sharingLink
     */
    public get link() {
        return this._link;
    };
    /**
     * Gets the roles property value. The type of permission, for example, read. See below for the full list of roles. Read-only.
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Gets the shareId property value. A unique token that can be used to access this shared item via the **shares** API. Read-only.
     * @returns a string
     */
    public get shareId() {
        return this._shareId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["expirationDateTime", (o, n) => { (o as unknown as Permission).expirationDateTime = n.getDateValue(); }],
            ["grantedTo", (o, n) => { (o as unknown as Permission).grantedTo = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["grantedToIdentities", (o, n) => { (o as unknown as Permission).grantedToIdentities = n.getCollectionOfObjectValues<IdentitySet>(IdentitySet); }],
            ["grantedToIdentitiesV2", (o, n) => { (o as unknown as Permission).grantedToIdentitiesV2 = n.getCollectionOfObjectValues<SharePointIdentitySet>(SharePointIdentitySet); }],
            ["grantedToV2", (o, n) => { (o as unknown as Permission).grantedToV2 = n.getObjectValue<SharePointIdentitySet>(SharePointIdentitySet); }],
            ["hasPassword", (o, n) => { (o as unknown as Permission).hasPassword = n.getBooleanValue(); }],
            ["inheritedFrom", (o, n) => { (o as unknown as Permission).inheritedFrom = n.getObjectValue<ItemReference>(ItemReference); }],
            ["invitation", (o, n) => { (o as unknown as Permission).invitation = n.getObjectValue<SharingInvitation>(SharingInvitation); }],
            ["link", (o, n) => { (o as unknown as Permission).link = n.getObjectValue<SharingLink>(SharingLink); }],
            ["roles", (o, n) => { (o as unknown as Permission).roles = n.getCollectionOfPrimitiveValues<string>(); }],
            ["shareId", (o, n) => { (o as unknown as Permission).shareId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeObjectValue<IdentitySet>("grantedTo", this.grantedTo);
        writer.writeCollectionOfObjectValues<IdentitySet>("grantedToIdentities", this.grantedToIdentities);
        writer.writeCollectionOfObjectValues<SharePointIdentitySet>("grantedToIdentitiesV2", this.grantedToIdentitiesV2);
        writer.writeObjectValue<SharePointIdentitySet>("grantedToV2", this.grantedToV2);
        writer.writeBooleanValue("hasPassword", this.hasPassword);
        writer.writeObjectValue<ItemReference>("inheritedFrom", this.inheritedFrom);
        writer.writeObjectValue<SharingInvitation>("invitation", this.invitation);
        writer.writeObjectValue<SharingLink>("link", this.link);
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        writer.writeStringValue("shareId", this.shareId);
    };
    /**
     * Sets the expirationDateTime property value. A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Sets the grantedTo property value. 
     * @param value Value to set for the grantedTo property.
     */
    public set grantedTo(value: IdentitySet | undefined) {
        this._grantedTo = value;
    };
    /**
     * Sets the grantedToIdentities property value. 
     * @param value Value to set for the grantedToIdentities property.
     */
    public set grantedToIdentities(value: IdentitySet[] | undefined) {
        this._grantedToIdentities = value;
    };
    /**
     * Sets the grantedToIdentitiesV2 property value. For link type permissions, the details of the users to whom permission was granted. Read-only.
     * @param value Value to set for the grantedToIdentitiesV2 property.
     */
    public set grantedToIdentitiesV2(value: SharePointIdentitySet[] | undefined) {
        this._grantedToIdentitiesV2 = value;
    };
    /**
     * Sets the grantedToV2 property value. For user type permissions, the details of the users and applications for this permission. Read-only.
     * @param value Value to set for the grantedToV2 property.
     */
    public set grantedToV2(value: SharePointIdentitySet | undefined) {
        this._grantedToV2 = value;
    };
    /**
     * Sets the hasPassword property value. Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only..
     * @param value Value to set for the hasPassword property.
     */
    public set hasPassword(value: boolean | undefined) {
        this._hasPassword = value;
    };
    /**
     * Sets the inheritedFrom property value. Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
     * @param value Value to set for the inheritedFrom property.
     */
    public set inheritedFrom(value: ItemReference | undefined) {
        this._inheritedFrom = value;
    };
    /**
     * Sets the invitation property value. Details of any associated sharing invitation for this permission. Read-only.
     * @param value Value to set for the invitation property.
     */
    public set invitation(value: SharingInvitation | undefined) {
        this._invitation = value;
    };
    /**
     * Sets the link property value. Provides the link details of the current permission, if it is a link type permissions. Read-only.
     * @param value Value to set for the link property.
     */
    public set link(value: SharingLink | undefined) {
        this._link = value;
    };
    /**
     * Sets the roles property value. The type of permission, for example, read. See below for the full list of roles. Read-only.
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        this._roles = value;
    };
    /**
     * Sets the shareId property value. A unique token that can be used to access this shared item via the **shares** API. Read-only.
     * @param value Value to set for the shareId property.
     */
    public set shareId(value: string | undefined) {
        this._shareId = value;
    };
}
