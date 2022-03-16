import {createAudioFromDiscriminatorValue} from './createAudioFromDiscriminatorValue';
import {createBundleFromDiscriminatorValue} from './createBundleFromDiscriminatorValue';
import {createDeletedFromDiscriminatorValue} from './createDeletedFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createDriveItemVersionFromDiscriminatorValue} from './createDriveItemVersionFromDiscriminatorValue';
import {createFileFromDiscriminatorValue} from './createFileFromDiscriminatorValue';
import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {createFolderFromDiscriminatorValue} from './createFolderFromDiscriminatorValue';
import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {createImageFromDiscriminatorValue} from './createImageFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createMalwareFromDiscriminatorValue} from './createMalwareFromDiscriminatorValue';
import {createPackageFromDiscriminatorValue} from './createPackageFromDiscriminatorValue';
import {createPendingOperationsFromDiscriminatorValue} from './createPendingOperationsFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createPhotoFromDiscriminatorValue} from './createPhotoFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {createRemoteItemFromDiscriminatorValue} from './createRemoteItemFromDiscriminatorValue';
import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {createSearchResultFromDiscriminatorValue} from './createSearchResultFromDiscriminatorValue';
import {createSharedFromDiscriminatorValue} from './createSharedFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSpecialFolderFromDiscriminatorValue} from './createSpecialFolderFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {createVideoFromDiscriminatorValue} from './createVideoFromDiscriminatorValue';
import {createWorkbookFromDiscriminatorValue} from './createWorkbookFromDiscriminatorValue';
import {Audio, BaseItem, Bundle, Deleted, DriveItemVersion, File, FileSystemInfo, Folder, GeoCoordinates, Image, ItemAnalytics, ListItem, Malware, Package, PendingOperations, Permission, Photo, PublicationFacet, RemoteItem, Root, SearchResult, Shared, SharepointIds, SpecialFolder, Subscription, ThumbnailSet, Video, Workbook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItem extends BaseItem implements Parsable {
    /** Analytics about the view activities that took place on this item.  */
    private _analytics?: ItemAnalytics | undefined;
    /** Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal.  */
    private _audio?: Audio | undefined;
    private _bundle?: Bundle | undefined;
    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.  */
    private _children?: DriveItem[] | undefined;
    /** The content stream, if the item represents a file.  */
    private _content?: string | undefined;
    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.  */
    private _cTag?: string | undefined;
    /** Information about the deleted state of the item. Read-only.  */
    private _deleted?: Deleted | undefined;
    /** File metadata, if the item is a file. Read-only.  */
    private _file?: File | undefined;
    /** File system information on client. Read-write.  */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** Folder metadata, if the item is a folder. Read-only.  */
    private _folder?: Folder | undefined;
    /** Image metadata, if the item is an image. Read-only.  */
    private _image?: Image | undefined;
    /** For drives in SharePoint, the associated document library list item. Read-only. Nullable.  */
    private _listItem?: ListItem | undefined;
    /** Location metadata, if the item has location data. Read-only.  */
    private _location?: GeoCoordinates | undefined;
    /** Malware metadata, if the item was detected to contain malware. Read-only.  */
    private _malware?: Malware | undefined;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.  */
    private _package?: Package | undefined;
    /** If present, indicates that one or more operations that might affect the state of the driveItem are pending completion. Read-only.  */
    private _pendingOperations?: PendingOperations | undefined;
    /** The set of permissions for the item. Read-only. Nullable.  */
    private _permissions?: Permission[] | undefined;
    /** Photo metadata, if the item is a photo. Read-only.  */
    private _photo?: Photo | undefined;
    /** Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.  */
    private _publication?: PublicationFacet | undefined;
    /** Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.  */
    private _remoteItem?: RemoteItem | undefined;
    /** If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.  */
    private _root?: Root | undefined;
    /** Search metadata, if the item is from a search result. Read-only.  */
    private _searchResult?: SearchResult | undefined;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.  */
    private _shared?: Shared | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only.  */
    private _sharepointIds?: SharepointIds | undefined;
    /** Size of the item in bytes. Read-only.  */
    private _size?: number | undefined;
    /** If the current item is also available as a special folder, this facet is returned. Read-only.  */
    private _specialFolder?: SpecialFolder | undefined;
    /** The set of subscriptions on the item. Only supported on the root of a drive.  */
    private _subscriptions?: Subscription[] | undefined;
    /** Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.  */
    private _thumbnails?: ThumbnailSet[] | undefined;
    /** The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.  */
    private _versions?: DriveItemVersion[] | undefined;
    /** Video metadata, if the item is a video. Read-only.  */
    private _video?: Video | undefined;
    /** WebDAV compatible URL for the item.  */
    private _webDavUrl?: string | undefined;
    /** For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.  */
    private _workbook?: Workbook | undefined;
    /**
     * Gets the analytics property value. Analytics about the view activities that took place on this item.
     * @returns a itemAnalytics
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. Analytics about the view activities that took place on this item.
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        this._analytics = value;
    };
    /**
     * Gets the audio property value. Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal.
     * @returns a audio
     */
    public get audio() {
        return this._audio;
    };
    /**
     * Sets the audio property value. Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal.
     * @param value Value to set for the audio property.
     */
    public set audio(value: Audio | undefined) {
        this._audio = value;
    };
    /**
     * Gets the bundle property value. 
     * @returns a bundle
     */
    public get bundle() {
        return this._bundle;
    };
    /**
     * Sets the bundle property value. 
     * @param value Value to set for the bundle property.
     */
    public set bundle(value: Bundle | undefined) {
        this._bundle = value;
    };
    /**
     * Gets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     * @returns a driveItem
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     * @param value Value to set for the children property.
     */
    public set children(value: DriveItem[] | undefined) {
        this._children = value;
    };
    /**
     * Instantiates a new driveItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content stream, if the item represents a file.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content stream, if the item represents a file.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     * @returns a string
     */
    public get cTag() {
        return this._cTag;
    };
    /**
     * Sets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     * @param value Value to set for the cTag property.
     */
    public set cTag(value: string | undefined) {
        this._cTag = value;
    };
    /**
     * Gets the deleted property value. Information about the deleted state of the item. Read-only.
     * @returns a deleted
     */
    public get deleted() {
        return this._deleted;
    };
    /**
     * Sets the deleted property value. Information about the deleted state of the item. Read-only.
     * @param value Value to set for the deleted property.
     */
    public set deleted(value: Deleted | undefined) {
        this._deleted = value;
    };
    /**
     * Gets the file property value. File metadata, if the item is a file. Read-only.
     * @returns a file
     */
    public get file() {
        return this._file;
    };
    /**
     * Sets the file property value. File metadata, if the item is a file. Read-only.
     * @param value Value to set for the file property.
     */
    public set file(value: File | undefined) {
        this._file = value;
    };
    /**
     * Gets the fileSystemInfo property value. File system information on client. Read-write.
     * @returns a fileSystemInfo
     */
    public get fileSystemInfo() {
        return this._fileSystemInfo;
    };
    /**
     * Sets the fileSystemInfo property value. File system information on client. Read-write.
     * @param value Value to set for the fileSystemInfo property.
     */
    public set fileSystemInfo(value: FileSystemInfo | undefined) {
        this._fileSystemInfo = value;
    };
    /**
     * Gets the folder property value. Folder metadata, if the item is a folder. Read-only.
     * @returns a folder
     */
    public get folder() {
        return this._folder;
    };
    /**
     * Sets the folder property value. Folder metadata, if the item is a folder. Read-only.
     * @param value Value to set for the folder property.
     */
    public set folder(value: Folder | undefined) {
        this._folder = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["analytics", (o, n) => { (o as unknown as DriveItem).analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); }],
            ["audio", (o, n) => { (o as unknown as DriveItem).audio = n.getObjectValue<Audio>(createAudioFromDiscriminatorValue); }],
            ["bundle", (o, n) => { (o as unknown as DriveItem).bundle = n.getObjectValue<Bundle>(createBundleFromDiscriminatorValue); }],
            ["children", (o, n) => { (o as unknown as DriveItem).children = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); }],
            ["content", (o, n) => { (o as unknown as DriveItem).content = n.getStringValue(); }],
            ["cTag", (o, n) => { (o as unknown as DriveItem).cTag = n.getStringValue(); }],
            ["deleted", (o, n) => { (o as unknown as DriveItem).deleted = n.getObjectValue<Deleted>(createDeletedFromDiscriminatorValue); }],
            ["file", (o, n) => { (o as unknown as DriveItem).file = n.getObjectValue<File>(createFileFromDiscriminatorValue); }],
            ["fileSystemInfo", (o, n) => { (o as unknown as DriveItem).fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); }],
            ["folder", (o, n) => { (o as unknown as DriveItem).folder = n.getObjectValue<Folder>(createFolderFromDiscriminatorValue); }],
            ["image", (o, n) => { (o as unknown as DriveItem).image = n.getObjectValue<Image>(createImageFromDiscriminatorValue); }],
            ["listItem", (o, n) => { (o as unknown as DriveItem).listItem = n.getObjectValue<ListItem>(createListItemFromDiscriminatorValue); }],
            ["location", (o, n) => { (o as unknown as DriveItem).location = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); }],
            ["malware", (o, n) => { (o as unknown as DriveItem).malware = n.getObjectValue<Malware>(createMalwareFromDiscriminatorValue); }],
            ["package", (o, n) => { (o as unknown as DriveItem).package = n.getObjectValue<Package>(createPackageFromDiscriminatorValue); }],
            ["pendingOperations", (o, n) => { (o as unknown as DriveItem).pendingOperations = n.getObjectValue<PendingOperations>(createPendingOperationsFromDiscriminatorValue); }],
            ["permissions", (o, n) => { (o as unknown as DriveItem).permissions = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); }],
            ["photo", (o, n) => { (o as unknown as DriveItem).photo = n.getObjectValue<Photo>(createPhotoFromDiscriminatorValue); }],
            ["publication", (o, n) => { (o as unknown as DriveItem).publication = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); }],
            ["remoteItem", (o, n) => { (o as unknown as DriveItem).remoteItem = n.getObjectValue<RemoteItem>(createRemoteItemFromDiscriminatorValue); }],
            ["root", (o, n) => { (o as unknown as DriveItem).root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); }],
            ["searchResult", (o, n) => { (o as unknown as DriveItem).searchResult = n.getObjectValue<SearchResult>(createSearchResultFromDiscriminatorValue); }],
            ["shared", (o, n) => { (o as unknown as DriveItem).shared = n.getObjectValue<Shared>(createSharedFromDiscriminatorValue); }],
            ["sharepointIds", (o, n) => { (o as unknown as DriveItem).sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); }],
            ["size", (o, n) => { (o as unknown as DriveItem).size = n.getNumberValue(); }],
            ["specialFolder", (o, n) => { (o as unknown as DriveItem).specialFolder = n.getObjectValue<SpecialFolder>(createSpecialFolderFromDiscriminatorValue); }],
            ["subscriptions", (o, n) => { (o as unknown as DriveItem).subscriptions = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); }],
            ["thumbnails", (o, n) => { (o as unknown as DriveItem).thumbnails = n.getCollectionOfObjectValues<ThumbnailSet>(createThumbnailSetFromDiscriminatorValue); }],
            ["versions", (o, n) => { (o as unknown as DriveItem).versions = n.getCollectionOfObjectValues<DriveItemVersion>(createDriveItemVersionFromDiscriminatorValue); }],
            ["video", (o, n) => { (o as unknown as DriveItem).video = n.getObjectValue<Video>(createVideoFromDiscriminatorValue); }],
            ["webDavUrl", (o, n) => { (o as unknown as DriveItem).webDavUrl = n.getStringValue(); }],
            ["workbook", (o, n) => { (o as unknown as DriveItem).workbook = n.getObjectValue<Workbook>(createWorkbookFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the image property value. Image metadata, if the item is an image. Read-only.
     * @returns a image
     */
    public get image() {
        return this._image;
    };
    /**
     * Sets the image property value. Image metadata, if the item is an image. Read-only.
     * @param value Value to set for the image property.
     */
    public set image(value: Image | undefined) {
        this._image = value;
    };
    /**
     * Gets the listItem property value. For drives in SharePoint, the associated document library list item. Read-only. Nullable.
     * @returns a listItem
     */
    public get listItem() {
        return this._listItem;
    };
    /**
     * Sets the listItem property value. For drives in SharePoint, the associated document library list item. Read-only. Nullable.
     * @param value Value to set for the listItem property.
     */
    public set listItem(value: ListItem | undefined) {
        this._listItem = value;
    };
    /**
     * Gets the location property value. Location metadata, if the item has location data. Read-only.
     * @returns a geoCoordinates
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Location metadata, if the item has location data. Read-only.
     * @param value Value to set for the location property.
     */
    public set location(value: GeoCoordinates | undefined) {
        this._location = value;
    };
    /**
     * Gets the malware property value. Malware metadata, if the item was detected to contain malware. Read-only.
     * @returns a malware
     */
    public get malware() {
        return this._malware;
    };
    /**
     * Sets the malware property value. Malware metadata, if the item was detected to contain malware. Read-only.
     * @param value Value to set for the malware property.
     */
    public set malware(value: Malware | undefined) {
        this._malware = value;
    };
    /**
     * Gets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     * @returns a package
     */
    public get package() {
        return this._package;
    };
    /**
     * Sets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     * @param value Value to set for the package property.
     */
    public set package(value: Package | undefined) {
        this._package = value;
    };
    /**
     * Gets the pendingOperations property value. If present, indicates that one or more operations that might affect the state of the driveItem are pending completion. Read-only.
     * @returns a pendingOperations
     */
    public get pendingOperations() {
        return this._pendingOperations;
    };
    /**
     * Sets the pendingOperations property value. If present, indicates that one or more operations that might affect the state of the driveItem are pending completion. Read-only.
     * @param value Value to set for the pendingOperations property.
     */
    public set pendingOperations(value: PendingOperations | undefined) {
        this._pendingOperations = value;
    };
    /**
     * Gets the permissions property value. The set of permissions for the item. Read-only. Nullable.
     * @returns a permission
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The set of permissions for the item. Read-only. Nullable.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: Permission[] | undefined) {
        this._permissions = value;
    };
    /**
     * Gets the photo property value. Photo metadata, if the item is a photo. Read-only.
     * @returns a photo
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. Photo metadata, if the item is a photo. Read-only.
     * @param value Value to set for the photo property.
     */
    public set photo(value: Photo | undefined) {
        this._photo = value;
    };
    /**
     * Gets the publication property value. Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
     * @returns a publicationFacet
     */
    public get publication() {
        return this._publication;
    };
    /**
     * Sets the publication property value. Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
     * @param value Value to set for the publication property.
     */
    public set publication(value: PublicationFacet | undefined) {
        this._publication = value;
    };
    /**
     * Gets the remoteItem property value. Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
     * @returns a remoteItem
     */
    public get remoteItem() {
        return this._remoteItem;
    };
    /**
     * Sets the remoteItem property value. Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
     * @param value Value to set for the remoteItem property.
     */
    public set remoteItem(value: RemoteItem | undefined) {
        this._remoteItem = value;
    };
    /**
     * Gets the root property value. If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
     * @returns a root
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        this._root = value;
    };
    /**
     * Gets the searchResult property value. Search metadata, if the item is from a search result. Read-only.
     * @returns a searchResult
     */
    public get searchResult() {
        return this._searchResult;
    };
    /**
     * Sets the searchResult property value. Search metadata, if the item is from a search result. Read-only.
     * @param value Value to set for the searchResult property.
     */
    public set searchResult(value: SearchResult | undefined) {
        this._searchResult = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemAnalytics>("analytics", this.analytics);
        writer.writeObjectValue<Audio>("audio", this.audio);
        writer.writeObjectValue<Bundle>("bundle", this.bundle);
        writer.writeCollectionOfObjectValues<DriveItem>("children", this.children);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("cTag", this.cTag);
        writer.writeObjectValue<Deleted>("deleted", this.deleted);
        writer.writeObjectValue<File>("file", this.file);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", this.fileSystemInfo);
        writer.writeObjectValue<Folder>("folder", this.folder);
        writer.writeObjectValue<Image>("image", this.image);
        writer.writeObjectValue<ListItem>("listItem", this.listItem);
        writer.writeObjectValue<GeoCoordinates>("location", this.location);
        writer.writeObjectValue<Malware>("malware", this.malware);
        writer.writeObjectValue<Package>("package", this.package);
        writer.writeObjectValue<PendingOperations>("pendingOperations", this.pendingOperations);
        writer.writeCollectionOfObjectValues<Permission>("permissions", this.permissions);
        writer.writeObjectValue<Photo>("photo", this.photo);
        writer.writeObjectValue<PublicationFacet>("publication", this.publication);
        writer.writeObjectValue<RemoteItem>("remoteItem", this.remoteItem);
        writer.writeObjectValue<Root>("root", this.root);
        writer.writeObjectValue<SearchResult>("searchResult", this.searchResult);
        writer.writeObjectValue<Shared>("shared", this.shared);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeNumberValue("size", this.size);
        writer.writeObjectValue<SpecialFolder>("specialFolder", this.specialFolder);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", this.subscriptions);
        writer.writeCollectionOfObjectValues<ThumbnailSet>("thumbnails", this.thumbnails);
        writer.writeCollectionOfObjectValues<DriveItemVersion>("versions", this.versions);
        writer.writeObjectValue<Video>("video", this.video);
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        writer.writeObjectValue<Workbook>("workbook", this.workbook);
    };
    /**
     * Gets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     * @returns a shared
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Sets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     * @param value Value to set for the shared property.
     */
    public set shared(value: Shared | undefined) {
        this._shared = value;
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
     * Gets the size property value. Size of the item in bytes. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Size of the item in bytes. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
     * @returns a specialFolder
     */
    public get specialFolder() {
        return this._specialFolder;
    };
    /**
     * Sets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
     * @param value Value to set for the specialFolder property.
     */
    public set specialFolder(value: SpecialFolder | undefined) {
        this._specialFolder = value;
    };
    /**
     * Gets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
     * @returns a subscription
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        this._subscriptions = value;
    };
    /**
     * Gets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     * @returns a thumbnailSet
     */
    public get thumbnails() {
        return this._thumbnails;
    };
    /**
     * Sets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     * @param value Value to set for the thumbnails property.
     */
    public set thumbnails(value: ThumbnailSet[] | undefined) {
        this._thumbnails = value;
    };
    /**
     * Gets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     * @returns a driveItemVersion
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     * @param value Value to set for the versions property.
     */
    public set versions(value: DriveItemVersion[] | undefined) {
        this._versions = value;
    };
    /**
     * Gets the video property value. Video metadata, if the item is a video. Read-only.
     * @returns a video
     */
    public get video() {
        return this._video;
    };
    /**
     * Sets the video property value. Video metadata, if the item is a video. Read-only.
     * @param value Value to set for the video property.
     */
    public set video(value: Video | undefined) {
        this._video = value;
    };
    /**
     * Gets the webDavUrl property value. WebDAV compatible URL for the item.
     * @returns a string
     */
    public get webDavUrl() {
        return this._webDavUrl;
    };
    /**
     * Sets the webDavUrl property value. WebDAV compatible URL for the item.
     * @param value Value to set for the webDavUrl property.
     */
    public set webDavUrl(value: string | undefined) {
        this._webDavUrl = value;
    };
    /**
     * Gets the workbook property value. For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @returns a workbook
     */
    public get workbook() {
        return this._workbook;
    };
    /**
     * Sets the workbook property value. For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param value Value to set for the workbook property.
     */
    public set workbook(value: Workbook | undefined) {
        this._workbook = value;
    };
}
