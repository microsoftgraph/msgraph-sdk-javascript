import {SharepointIds} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemReference implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Unique identifier of the drive instance that contains the item. Read-only.  */
    private _driveId?: string | undefined;
    /** Identifies the type of drive. See [drive][] resource for values.  */
    private _driveType?: string | undefined;
    /** Unique identifier of the item in the drive. Read-only.  */
    private _id?: string | undefined;
    /** The name of the item being referenced. Read-only.  */
    private _name?: string | undefined;
    /** Path that can be used to navigate to the item. Read-only.  */
    private _path?: string | undefined;
    /** A unique identifier for a shared resource that can be accessed via the [Shares][] API.  */
    private _shareId?: string | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only.  */
    private _sharepointIds?: SharepointIds | undefined;
    /** For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated.  */
    private _siteId?: string | undefined;
    /**
     * Instantiates a new itemReference and sets the default values.
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
     * Gets the driveId property value. Unique identifier of the drive instance that contains the item. Read-only.
     * @returns a string
     */
    public get driveId() {
        return this._driveId;
    };
    /**
     * Gets the driveType property value. Identifies the type of drive. See [drive][] resource for values.
     * @returns a string
     */
    public get driveType() {
        return this._driveType;
    };
    /**
     * Gets the id property value. Unique identifier of the item in the drive. Read-only.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the name property value. The name of the item being referenced. Read-only.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the path property value. Path that can be used to navigate to the item. Read-only.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Gets the shareId property value. A unique identifier for a shared resource that can be accessed via the [Shares][] API.
     * @returns a string
     */
    public get shareId() {
        return this._shareId;
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Gets the siteId property value. For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated.
     * @returns a string
     */
    public get siteId() {
        return this._siteId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["driveId", (o, n) => { (o as unknown as ItemReference).driveId = n.getStringValue(); }],
            ["driveType", (o, n) => { (o as unknown as ItemReference).driveType = n.getStringValue(); }],
            ["id", (o, n) => { (o as unknown as ItemReference).id = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as ItemReference).name = n.getStringValue(); }],
            ["path", (o, n) => { (o as unknown as ItemReference).path = n.getStringValue(); }],
            ["shareId", (o, n) => { (o as unknown as ItemReference).shareId = n.getStringValue(); }],
            ["sharepointIds", (o, n) => { (o as unknown as ItemReference).sharepointIds = n.getObjectValue<SharepointIds>(SharepointIds); }],
            ["siteId", (o, n) => { (o as unknown as ItemReference).siteId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("driveId", this.driveId);
        writer.writeStringValue("driveType", this.driveType);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("shareId", this.shareId);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeStringValue("siteId", this.siteId);
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
     * Sets the driveId property value. Unique identifier of the drive instance that contains the item. Read-only.
     * @param value Value to set for the driveId property.
     */
    public set driveId(value: string | undefined) {
        this._driveId = value;
    };
    /**
     * Sets the driveType property value. Identifies the type of drive. See [drive][] resource for values.
     * @param value Value to set for the driveType property.
     */
    public set driveType(value: string | undefined) {
        this._driveType = value;
    };
    /**
     * Sets the id property value. Unique identifier of the item in the drive. Read-only.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the name property value. The name of the item being referenced. Read-only.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the path property value. Path that can be used to navigate to the item. Read-only.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Sets the shareId property value. A unique identifier for a shared resource that can be accessed via the [Shares][] API.
     * @param value Value to set for the shareId property.
     */
    public set shareId(value: string | undefined) {
        this._shareId = value;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Sets the siteId property value. For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated.
     * @param value Value to set for the siteId property.
     */
    public set siteId(value: string | undefined) {
        this._siteId = value;
    };
}
