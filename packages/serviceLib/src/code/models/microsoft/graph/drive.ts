import {BaseItem, DriveItem, IdentitySet, List, Quota, SharepointIds, SystemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Drive extends BaseItem implements Parsable {
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.  */
    private _bundles?: DriveItem[] | undefined;
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.  */
    private _driveType?: string | undefined;
    /** The list of items the user is following. Only in OneDrive for Business.  */
    private _following?: DriveItem[] | undefined;
    /** All items contained in the drive. Read-only. Nullable.  */
    private _items?: DriveItem[] | undefined;
    /** For drives in SharePoint, the underlying document library list. Read-only. Nullable.  */
    private _list?: List | undefined;
    /** Optional. The user account that owns the drive. Read-only.  */
    private _owner?: IdentitySet | undefined;
    /** Optional. Information about the drive's storage space quota. Read-only.  */
    private _quota?: Quota | undefined;
    /** The root folder of the drive. Read-only.  */
    private _root?: DriveItem | undefined;
    private _sharePointIds?: SharepointIds | undefined;
    /** Collection of common folders available in OneDrive. Read-only. Nullable.  */
    private _special?: DriveItem[] | undefined;
    /** If present, indicates that this is a system-managed drive. Read-only.  */
    private _system?: SystemFacet | undefined;
    /**
     * Instantiates a new drive and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the bundles property value. Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     * @returns a driveItem
     */
    public get bundles() {
        return this._bundles;
    };
    /**
     * Gets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     * @returns a string
     */
    public get driveType() {
        return this._driveType;
    };
    /**
     * Gets the following property value. The list of items the user is following. Only in OneDrive for Business.
     * @returns a driveItem
     */
    public get following() {
        return this._following;
    };
    /**
     * Gets the items property value. All items contained in the drive. Read-only. Nullable.
     * @returns a driveItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Gets the list property value. For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @returns a list
     */
    public get list() {
        return this._list;
    };
    /**
     * Gets the owner property value. Optional. The user account that owns the drive. Read-only.
     * @returns a identitySet
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Gets the quota property value. Optional. Information about the drive's storage space quota. Read-only.
     * @returns a quota
     */
    public get quota() {
        return this._quota;
    };
    /**
     * Gets the root property value. The root folder of the drive. Read-only.
     * @returns a driveItem
     */
    public get root() {
        return this._root;
    };
    /**
     * Gets the sharePointIds property value. 
     * @returns a sharepointIds
     */
    public get sharePointIds() {
        return this._sharePointIds;
    };
    /**
     * Gets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
     * @returns a driveItem
     */
    public get special() {
        return this._special;
    };
    /**
     * Gets the system property value. If present, indicates that this is a system-managed drive. Read-only.
     * @returns a systemFacet
     */
    public get system() {
        return this._system;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["bundles", (o, n) => { (o as unknown as Drive).bundles = n.getCollectionOfObjectValues<DriveItem>(DriveItem); }],
            ["driveType", (o, n) => { (o as unknown as Drive).driveType = n.getStringValue(); }],
            ["following", (o, n) => { (o as unknown as Drive).following = n.getCollectionOfObjectValues<DriveItem>(DriveItem); }],
            ["items", (o, n) => { (o as unknown as Drive).items = n.getCollectionOfObjectValues<DriveItem>(DriveItem); }],
            ["list", (o, n) => { (o as unknown as Drive).list = n.getObjectValue<List>(List); }],
            ["owner", (o, n) => { (o as unknown as Drive).owner = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["quota", (o, n) => { (o as unknown as Drive).quota = n.getObjectValue<Quota>(Quota); }],
            ["root", (o, n) => { (o as unknown as Drive).root = n.getObjectValue<DriveItem>(DriveItem); }],
            ["sharePointIds", (o, n) => { (o as unknown as Drive).sharePointIds = n.getObjectValue<SharepointIds>(SharepointIds); }],
            ["special", (o, n) => { (o as unknown as Drive).special = n.getCollectionOfObjectValues<DriveItem>(DriveItem); }],
            ["system", (o, n) => { (o as unknown as Drive).system = n.getObjectValue<SystemFacet>(SystemFacet); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DriveItem>("bundles", this.bundles);
        writer.writeStringValue("driveType", this.driveType);
        writer.writeCollectionOfObjectValues<DriveItem>("following", this.following);
        writer.writeCollectionOfObjectValues<DriveItem>("items", this.items);
        writer.writeObjectValue<List>("list", this.list);
        writer.writeObjectValue<IdentitySet>("owner", this.owner);
        writer.writeObjectValue<Quota>("quota", this.quota);
        writer.writeObjectValue<DriveItem>("root", this.root);
        writer.writeObjectValue<SharepointIds>("sharePointIds", this.sharePointIds);
        writer.writeCollectionOfObjectValues<DriveItem>("special", this.special);
        writer.writeObjectValue<SystemFacet>("system", this.system);
    };
    /**
     * Sets the bundles property value. Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     * @param value Value to set for the bundles property.
     */
    public set bundles(value: DriveItem[] | undefined) {
        this._bundles = value;
    };
    /**
     * Sets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     * @param value Value to set for the driveType property.
     */
    public set driveType(value: string | undefined) {
        this._driveType = value;
    };
    /**
     * Sets the following property value. The list of items the user is following. Only in OneDrive for Business.
     * @param value Value to set for the following property.
     */
    public set following(value: DriveItem[] | undefined) {
        this._following = value;
    };
    /**
     * Sets the items property value. All items contained in the drive. Read-only. Nullable.
     * @param value Value to set for the items property.
     */
    public set items(value: DriveItem[] | undefined) {
        this._items = value;
    };
    /**
     * Sets the list property value. For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param value Value to set for the list property.
     */
    public set list(value: List | undefined) {
        this._list = value;
    };
    /**
     * Sets the owner property value. Optional. The user account that owns the drive. Read-only.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        this._owner = value;
    };
    /**
     * Sets the quota property value. Optional. Information about the drive's storage space quota. Read-only.
     * @param value Value to set for the quota property.
     */
    public set quota(value: Quota | undefined) {
        this._quota = value;
    };
    /**
     * Sets the root property value. The root folder of the drive. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: DriveItem | undefined) {
        this._root = value;
    };
    /**
     * Sets the sharePointIds property value. 
     * @param value Value to set for the sharePointIds property.
     */
    public set sharePointIds(value: SharepointIds | undefined) {
        this._sharePointIds = value;
    };
    /**
     * Sets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
     * @param value Value to set for the special property.
     */
    public set special(value: DriveItem[] | undefined) {
        this._special = value;
    };
    /**
     * Sets the system property value. If present, indicates that this is a system-managed drive. Read-only.
     * @param value Value to set for the system property.
     */
    public set system(value: SystemFacet | undefined) {
        this._system = value;
    };
}
