import {BaseItem, DriveItem, IdentitySet, List, ListItem, Permission, Site} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedDriveItem extends BaseItem implements Parsable {
    /** Used to access the underlying driveItem  */
    private _driveItem?: DriveItem | undefined;
    /** All driveItems contained in the sharing root. This collection cannot be enumerated.  */
    private _items?: DriveItem[] | undefined;
    /** Used to access the underlying list  */
    private _list?: List | undefined;
    /** Used to access the underlying listItem  */
    private _listItem?: ListItem | undefined;
    /** Information about the owner of the shared item being referenced.  */
    private _owner?: IdentitySet | undefined;
    /** Used to access the permission representing the underlying sharing link  */
    private _permission?: Permission | undefined;
    /** Used to access the underlying driveItem. Deprecated -- use driveItem instead.  */
    private _root?: DriveItem | undefined;
    /** Used to access the underlying site  */
    private _site?: Site | undefined;
    /**
     * Instantiates a new sharedDriveItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the driveItem property value. Used to access the underlying driveItem
     * @returns a driveItem
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Gets the items property value. All driveItems contained in the sharing root. This collection cannot be enumerated.
     * @returns a driveItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Gets the list property value. Used to access the underlying list
     * @returns a list
     */
    public get list() {
        return this._list;
    };
    /**
     * Gets the listItem property value. Used to access the underlying listItem
     * @returns a listItem
     */
    public get listItem() {
        return this._listItem;
    };
    /**
     * Gets the owner property value. Information about the owner of the shared item being referenced.
     * @returns a identitySet
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Gets the permission property value. Used to access the permission representing the underlying sharing link
     * @returns a permission
     */
    public get permission() {
        return this._permission;
    };
    /**
     * Gets the root property value. Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     * @returns a driveItem
     */
    public get root() {
        return this._root;
    };
    /**
     * Gets the site property value. Used to access the underlying site
     * @returns a site
     */
    public get site() {
        return this._site;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["driveItem", (o, n) => { (o as unknown as SharedDriveItem).driveItem = n.getObjectValue<DriveItem>(DriveItem); }],
            ["items", (o, n) => { (o as unknown as SharedDriveItem).items = n.getCollectionOfObjectValues<DriveItem>(DriveItem); }],
            ["list", (o, n) => { (o as unknown as SharedDriveItem).list = n.getObjectValue<List>(List); }],
            ["listItem", (o, n) => { (o as unknown as SharedDriveItem).listItem = n.getObjectValue<ListItem>(ListItem); }],
            ["owner", (o, n) => { (o as unknown as SharedDriveItem).owner = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["permission", (o, n) => { (o as unknown as SharedDriveItem).permission = n.getObjectValue<Permission>(Permission); }],
            ["root", (o, n) => { (o as unknown as SharedDriveItem).root = n.getObjectValue<DriveItem>(DriveItem); }],
            ["site", (o, n) => { (o as unknown as SharedDriveItem).site = n.getObjectValue<Site>(Site); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DriveItem>("driveItem", this.driveItem);
        writer.writeCollectionOfObjectValues<DriveItem>("items", this.items);
        writer.writeObjectValue<List>("list", this.list);
        writer.writeObjectValue<ListItem>("listItem", this.listItem);
        writer.writeObjectValue<IdentitySet>("owner", this.owner);
        writer.writeObjectValue<Permission>("permission", this.permission);
        writer.writeObjectValue<DriveItem>("root", this.root);
        writer.writeObjectValue<Site>("site", this.site);
    };
    /**
     * Sets the driveItem property value. Used to access the underlying driveItem
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        this._driveItem = value;
    };
    /**
     * Sets the items property value. All driveItems contained in the sharing root. This collection cannot be enumerated.
     * @param value Value to set for the items property.
     */
    public set items(value: DriveItem[] | undefined) {
        this._items = value;
    };
    /**
     * Sets the list property value. Used to access the underlying list
     * @param value Value to set for the list property.
     */
    public set list(value: List | undefined) {
        this._list = value;
    };
    /**
     * Sets the listItem property value. Used to access the underlying listItem
     * @param value Value to set for the listItem property.
     */
    public set listItem(value: ListItem | undefined) {
        this._listItem = value;
    };
    /**
     * Sets the owner property value. Information about the owner of the shared item being referenced.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        this._owner = value;
    };
    /**
     * Sets the permission property value. Used to access the permission representing the underlying sharing link
     * @param value Value to set for the permission property.
     */
    public set permission(value: Permission | undefined) {
        this._permission = value;
    };
    /**
     * Sets the root property value. Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     * @param value Value to set for the root property.
     */
    public set root(value: DriveItem | undefined) {
        this._root = value;
    };
    /**
     * Sets the site property value. Used to access the underlying site
     * @param value Value to set for the site property.
     */
    public set site(value: Site | undefined) {
        this._site = value;
    };
}
