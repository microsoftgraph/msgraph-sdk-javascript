import {File, FileSystemInfo, Folder, IdentitySet, Image, ItemReference, Package, Shared, SharepointIds, SpecialFolder, Video} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoteItem implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Identity of the user, device, and application which created the item. Read-only.  */
    private _createdBy?: IdentitySet | undefined;
    /** Date and time of item creation. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Indicates that the remote item is a file. Read-only.  */
    private _file?: File | undefined;
    /** Information about the remote item from the local file system. Read-only.  */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** Indicates that the remote item is a folder. Read-only.  */
    private _folder?: Folder | undefined;
    /** Unique identifier for the remote item in its drive. Read-only.  */
    private _id?: string | undefined;
    /** Image metadata, if the item is an image. Read-only.  */
    private _image?: Image | undefined;
    /** Identity of the user, device, and application which last modified the item. Read-only.  */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the item was last modified. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Optional. Filename of the remote item. Read-only.  */
    private _name?: string | undefined;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.  */
    private _package?: Package | undefined;
    /** Properties of the parent of the remote item. Read-only.  */
    private _parentReference?: ItemReference | undefined;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.  */
    private _shared?: Shared | undefined;
    /** Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only.  */
    private _sharepointIds?: SharepointIds | undefined;
    /** Size of the remote item. Read-only.  */
    private _size?: number | undefined;
    /** If the current item is also available as a special folder, this facet is returned. Read-only.  */
    private _specialFolder?: SpecialFolder | undefined;
    /** Video metadata, if the item is a video. Read-only.  */
    private _video?: Video | undefined;
    /** DAV compatible URL for the item.  */
    private _webDavUrl?: string | undefined;
    /** URL that displays the resource in the browser. Read-only.  */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new remoteItem and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the createdBy property value. Identity of the user, device, and application which created the item. Read-only.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdDateTime property value. Date and time of item creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the file property value. Indicates that the remote item is a file. Read-only.
     * @returns a file
     */
    public get file() {
        return this._file;
    };
    /**
     * Gets the fileSystemInfo property value. Information about the remote item from the local file system. Read-only.
     * @returns a fileSystemInfo
     */
    public get fileSystemInfo() {
        return this._fileSystemInfo;
    };
    /**
     * Gets the folder property value. Indicates that the remote item is a folder. Read-only.
     * @returns a folder
     */
    public get folder() {
        return this._folder;
    };
    /**
     * Gets the id property value. Unique identifier for the remote item in its drive. Read-only.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the image property value. Image metadata, if the item is an image. Read-only.
     * @returns a image
     */
    public get image() {
        return this._image;
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the name property value. Optional. Filename of the remote item. Read-only.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     * @returns a package
     */
    public get package() {
        return this._package;
    };
    /**
     * Gets the parentReference property value. Properties of the parent of the remote item. Read-only.
     * @returns a itemReference
     */
    public get parentReference() {
        return this._parentReference;
    };
    /**
     * Gets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     * @returns a shared
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Gets the sharepointIds property value. Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only.
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Gets the size property value. Size of the remote item. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Gets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
     * @returns a specialFolder
     */
    public get specialFolder() {
        return this._specialFolder;
    };
    /**
     * Gets the video property value. Video metadata, if the item is a video. Read-only.
     * @returns a video
     */
    public get video() {
        return this._video;
    };
    /**
     * Gets the webDavUrl property value. DAV compatible URL for the item.
     * @returns a string
     */
    public get webDavUrl() {
        return this._webDavUrl;
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
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["createdBy", (o, n) => { (o as unknown as RemoteItem).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["createdDateTime", (o, n) => { (o as unknown as RemoteItem).createdDateTime = n.getDateValue(); }],
            ["file", (o, n) => { (o as unknown as RemoteItem).file = n.getObjectValue<File>(File); }],
            ["fileSystemInfo", (o, n) => { (o as unknown as RemoteItem).fileSystemInfo = n.getObjectValue<FileSystemInfo>(FileSystemInfo); }],
            ["folder", (o, n) => { (o as unknown as RemoteItem).folder = n.getObjectValue<Folder>(Folder); }],
            ["id", (o, n) => { (o as unknown as RemoteItem).id = n.getStringValue(); }],
            ["image", (o, n) => { (o as unknown as RemoteItem).image = n.getObjectValue<Image>(Image); }],
            ["lastModifiedBy", (o, n) => { (o as unknown as RemoteItem).lastModifiedBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as RemoteItem).lastModifiedDateTime = n.getDateValue(); }],
            ["name", (o, n) => { (o as unknown as RemoteItem).name = n.getStringValue(); }],
            ["package", (o, n) => { (o as unknown as RemoteItem).package = n.getObjectValue<Package>(Package); }],
            ["parentReference", (o, n) => { (o as unknown as RemoteItem).parentReference = n.getObjectValue<ItemReference>(ItemReference); }],
            ["shared", (o, n) => { (o as unknown as RemoteItem).shared = n.getObjectValue<Shared>(Shared); }],
            ["sharepointIds", (o, n) => { (o as unknown as RemoteItem).sharepointIds = n.getObjectValue<SharepointIds>(SharepointIds); }],
            ["size", (o, n) => { (o as unknown as RemoteItem).size = n.getNumberValue(); }],
            ["specialFolder", (o, n) => { (o as unknown as RemoteItem).specialFolder = n.getObjectValue<SpecialFolder>(SpecialFolder); }],
            ["video", (o, n) => { (o as unknown as RemoteItem).video = n.getObjectValue<Video>(Video); }],
            ["webDavUrl", (o, n) => { (o as unknown as RemoteItem).webDavUrl = n.getStringValue(); }],
            ["webUrl", (o, n) => { (o as unknown as RemoteItem).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<File>("file", this.file);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", this.fileSystemInfo);
        writer.writeObjectValue<Folder>("folder", this.folder);
        writer.writeStringValue("id", this.id);
        writer.writeObjectValue<Image>("image", this.image);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Package>("package", this.package);
        writer.writeObjectValue<ItemReference>("parentReference", this.parentReference);
        writer.writeObjectValue<Shared>("shared", this.shared);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeNumberValue("size", this.size);
        writer.writeObjectValue<SpecialFolder>("specialFolder", this.specialFolder);
        writer.writeObjectValue<Video>("video", this.video);
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the createdBy property value. Identity of the user, device, and application which created the item. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdDateTime property value. Date and time of item creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the file property value. Indicates that the remote item is a file. Read-only.
     * @param value Value to set for the file property.
     */
    public set file(value: File | undefined) {
        this._file = value;
    };
    /**
     * Sets the fileSystemInfo property value. Information about the remote item from the local file system. Read-only.
     * @param value Value to set for the fileSystemInfo property.
     */
    public set fileSystemInfo(value: FileSystemInfo | undefined) {
        this._fileSystemInfo = value;
    };
    /**
     * Sets the folder property value. Indicates that the remote item is a folder. Read-only.
     * @param value Value to set for the folder property.
     */
    public set folder(value: Folder | undefined) {
        this._folder = value;
    };
    /**
     * Sets the id property value. Unique identifier for the remote item in its drive. Read-only.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the image property value. Image metadata, if the item is an image. Read-only.
     * @param value Value to set for the image property.
     */
    public set image(value: Image | undefined) {
        this._image = value;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the name property value. Optional. Filename of the remote item. Read-only.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     * @param value Value to set for the package property.
     */
    public set package(value: Package | undefined) {
        this._package = value;
    };
    /**
     * Sets the parentReference property value. Properties of the parent of the remote item. Read-only.
     * @param value Value to set for the parentReference property.
     */
    public set parentReference(value: ItemReference | undefined) {
        this._parentReference = value;
    };
    /**
     * Sets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     * @param value Value to set for the shared property.
     */
    public set shared(value: Shared | undefined) {
        this._shared = value;
    };
    /**
     * Sets the sharepointIds property value. Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Sets the size property value. Size of the remote item. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Sets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
     * @param value Value to set for the specialFolder property.
     */
    public set specialFolder(value: SpecialFolder | undefined) {
        this._specialFolder = value;
    };
    /**
     * Sets the video property value. Video metadata, if the item is a video. Read-only.
     * @param value Value to set for the video property.
     */
    public set video(value: Video | undefined) {
        this._video = value;
    };
    /**
     * Sets the webDavUrl property value. DAV compatible URL for the item.
     * @param value Value to set for the webDavUrl property.
     */
    public set webDavUrl(value: string | undefined) {
        this._webDavUrl = value;
    };
    /**
     * Sets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
