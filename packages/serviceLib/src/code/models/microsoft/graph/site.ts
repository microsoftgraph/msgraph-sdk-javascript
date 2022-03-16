import {createBaseItemFromDiscriminatorValue} from './createBaseItemFromDiscriminatorValue';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSiteCollectionFromDiscriminatorValue} from './createSiteCollectionFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {BaseItem, ColumnDefinition, ContentType, Drive, ItemAnalytics, List, Onenote, Permission, PublicError, Root, SharepointIds, SiteCollection} from './index';
import {Store} from './termStore/';
import {createStoreFromDiscriminatorValue} from './termStore/createStoreFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Site extends BaseItem implements Parsable {
    /** Analytics about the view activities that took place in this site.  */
    private _analytics?: ItemAnalytics | undefined;
    /** The collection of column definitions reusable across lists under this site.  */
    private _columns?: ColumnDefinition[] | undefined;
    /** The collection of content types defined for this site.  */
    private _contentTypes?: ContentType[] | undefined;
    /** The full title for the site. Read-only.  */
    private _displayName?: string | undefined;
    /** The default drive (document library) for this site.  */
    private _drive?: Drive | undefined;
    /** The collection of drives (document libraries) under this site.  */
    private _drives?: Drive[] | undefined;
    private _error_escaped?: PublicError | undefined;
    /** The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.  */
    private _externalColumns?: ColumnDefinition[] | undefined;
    /** Used to address any item contained in this site. This collection can't be enumerated.  */
    private _items?: BaseItem[] | undefined;
    /** The collection of lists under this site.  */
    private _lists?: List[] | undefined;
    /** Calls the OneNote service for notebook related operations.  */
    private _onenote?: Onenote | undefined;
    /** The permissions associated with the site. Nullable.  */
    private _permissions?: Permission[] | undefined;
    /** If present, indicates that this is the root site in the site collection. Read-only.  */
    private _root?: Root | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only.  */
    private _sharepointIds?: SharepointIds | undefined;
    /** Provides details about the site's site collection. Available only on the root site. Read-only.  */
    private _siteCollection?: SiteCollection | undefined;
    /** The collection of the sub-sites under this site.  */
    private _sites?: Site[] | undefined;
    /** The default termStore under this site.  */
    private _termStore?: Store | undefined;
    /** The collection of termStores under this site.  */
    private _termStores?: Store[] | undefined;
    /**
     * Gets the analytics property value. Analytics about the view activities that took place in this site.
     * @returns a itemAnalytics
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. Analytics about the view activities that took place in this site.
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        this._analytics = value;
    };
    /**
     * Gets the columns property value. The collection of column definitions reusable across lists under this site.
     * @returns a columnDefinition
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The collection of column definitions reusable across lists under this site.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        this._columns = value;
    };
    /**
     * Instantiates a new site and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentTypes property value. The collection of content types defined for this site.
     * @returns a contentType
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. The collection of content types defined for this site.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: ContentType[] | undefined) {
        this._contentTypes = value;
    };
    /**
     * Gets the displayName property value. The full title for the site. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The full title for the site. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the drive property value. The default drive (document library) for this site.
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The default drive (document library) for this site.
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * Gets the drives property value. The collection of drives (document libraries) under this site.
     * @returns a drive
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. The collection of drives (document libraries) under this site.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        this._drives = value;
    };
    /**
     * Gets the error property value. 
     * @returns a publicError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. 
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        this._error_escaped = value;
    };
    /**
     * Gets the externalColumns property value. The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.
     * @returns a columnDefinition
     */
    public get externalColumns() {
        return this._externalColumns;
    };
    /**
     * Sets the externalColumns property value. The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.
     * @param value Value to set for the externalColumns property.
     */
    public set externalColumns(value: ColumnDefinition[] | undefined) {
        this._externalColumns = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["analytics", (o, n) => { (o as unknown as Site).analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); }],
            ["columns", (o, n) => { (o as unknown as Site).columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); }],
            ["contentTypes", (o, n) => { (o as unknown as Site).contentTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as Site).displayName = n.getStringValue(); }],
            ["drive", (o, n) => { (o as unknown as Site).drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); }],
            ["drives", (o, n) => { (o as unknown as Site).drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); }],
            ["error", (o, n) => { (o as unknown as Site).error_escaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); }],
            ["externalColumns", (o, n) => { (o as unknown as Site).externalColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); }],
            ["items", (o, n) => { (o as unknown as Site).items = n.getCollectionOfObjectValues<BaseItem>(createBaseItemFromDiscriminatorValue); }],
            ["lists", (o, n) => { (o as unknown as Site).lists = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); }],
            ["onenote", (o, n) => { (o as unknown as Site).onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); }],
            ["permissions", (o, n) => { (o as unknown as Site).permissions = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); }],
            ["root", (o, n) => { (o as unknown as Site).root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); }],
            ["sharepointIds", (o, n) => { (o as unknown as Site).sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); }],
            ["siteCollection", (o, n) => { (o as unknown as Site).siteCollection = n.getObjectValue<SiteCollection>(createSiteCollectionFromDiscriminatorValue); }],
            ["sites", (o, n) => { (o as unknown as Site).sites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); }],
            ["termStore", (o, n) => { (o as unknown as Site).termStore = n.getObjectValue<Store>(createStoreFromDiscriminatorValue); }],
            ["termStores", (o, n) => { (o as unknown as Site).termStores = n.getCollectionOfObjectValues<Store>(createStoreFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the items property value. Used to address any item contained in this site. This collection can't be enumerated.
     * @returns a baseItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. Used to address any item contained in this site. This collection can't be enumerated.
     * @param value Value to set for the items property.
     */
    public set items(value: BaseItem[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the lists property value. The collection of lists under this site.
     * @returns a list
     */
    public get lists() {
        return this._lists;
    };
    /**
     * Sets the lists property value. The collection of lists under this site.
     * @param value Value to set for the lists property.
     */
    public set lists(value: List[] | undefined) {
        this._lists = value;
    };
    /**
     * Gets the onenote property value. Calls the OneNote service for notebook related operations.
     * @returns a onenote
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. Calls the OneNote service for notebook related operations.
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        this._onenote = value;
    };
    /**
     * Gets the permissions property value. The permissions associated with the site. Nullable.
     * @returns a permission
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The permissions associated with the site. Nullable.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: Permission[] | undefined) {
        this._permissions = value;
    };
    /**
     * Gets the root property value. If present, indicates that this is the root site in the site collection. Read-only.
     * @returns a root
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If present, indicates that this is the root site in the site collection. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        this._root = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemAnalytics>("analytics", this.analytics);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", this.columns);
        writer.writeCollectionOfObjectValues<ContentType>("contentTypes", this.contentTypes);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<Drive>("drives", this.drives);
        writer.writeObjectValue<PublicError>("error", this.error_escaped);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("externalColumns", this.externalColumns);
        writer.writeCollectionOfObjectValues<BaseItem>("items", this.items);
        writer.writeCollectionOfObjectValues<List>("lists", this.lists);
        writer.writeObjectValue<Onenote>("onenote", this.onenote);
        writer.writeCollectionOfObjectValues<Permission>("permissions", this.permissions);
        writer.writeObjectValue<Root>("root", this.root);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeObjectValue<SiteCollection>("siteCollection", this.siteCollection);
        writer.writeCollectionOfObjectValues<Site>("sites", this.sites);
        writer.writeObjectValue<Store>("termStore", this.termStore);
        writer.writeCollectionOfObjectValues<Store>("termStores", this.termStores);
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Gets the siteCollection property value. Provides details about the site's site collection. Available only on the root site. Read-only.
     * @returns a siteCollection
     */
    public get siteCollection() {
        return this._siteCollection;
    };
    /**
     * Sets the siteCollection property value. Provides details about the site's site collection. Available only on the root site. Read-only.
     * @param value Value to set for the siteCollection property.
     */
    public set siteCollection(value: SiteCollection | undefined) {
        this._siteCollection = value;
    };
    /**
     * Gets the sites property value. The collection of the sub-sites under this site.
     * @returns a site
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. The collection of the sub-sites under this site.
     * @param value Value to set for the sites property.
     */
    public set sites(value: Site[] | undefined) {
        this._sites = value;
    };
    /**
     * Gets the termStore property value. The default termStore under this site.
     * @returns a store
     */
    public get termStore() {
        return this._termStore;
    };
    /**
     * Sets the termStore property value. The default termStore under this site.
     * @param value Value to set for the termStore property.
     */
    public set termStore(value: Store | undefined) {
        this._termStore = value;
    };
    /**
     * Gets the termStores property value. The collection of termStores under this site.
     * @returns a store
     */
    public get termStores() {
        return this._termStores;
    };
    /**
     * Sets the termStores property value. The collection of termStores under this site.
     * @param value Value to set for the termStores property.
     */
    public set termStores(value: Store[] | undefined) {
        this._termStores = value;
    };
}
