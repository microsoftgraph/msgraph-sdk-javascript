import {BaseItem, ContentTypeInfo, DriveItem, FieldValueSet, ItemAnalytics, ListItemVersion, SharepointIds} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListItem extends BaseItem implements Parsable {
    /** Analytics about the view activities that took place on this item.  */
    private _analytics?: ItemAnalytics | undefined;
    /** The content type of this list item  */
    private _contentType?: ContentTypeInfo | undefined;
    /** For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]  */
    private _driveItem?: DriveItem | undefined;
    /** The values of the columns set on this list item.  */
    private _fields?: FieldValueSet | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only.  */
    private _sharepointIds?: SharepointIds | undefined;
    /** The list of previous versions of the list item.  */
    private _versions?: ListItemVersion[] | undefined;
    /**
     * Instantiates a new listItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the analytics property value. Analytics about the view activities that took place on this item.
     * @returns a itemAnalytics
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Gets the contentType property value. The content type of this list item
     * @returns a contentTypeInfo
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     * @returns a driveItem
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Gets the fields property value. The values of the columns set on this list item.
     * @returns a fieldValueSet
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Gets the versions property value. The list of previous versions of the list item.
     * @returns a listItemVersion
     */
    public get versions() {
        return this._versions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["analytics", (o, n) => { (o as unknown as ListItem).analytics = n.getObjectValue<ItemAnalytics>(ItemAnalytics); }],
            ["contentType", (o, n) => { (o as unknown as ListItem).contentType = n.getObjectValue<ContentTypeInfo>(ContentTypeInfo); }],
            ["driveItem", (o, n) => { (o as unknown as ListItem).driveItem = n.getObjectValue<DriveItem>(DriveItem); }],
            ["fields", (o, n) => { (o as unknown as ListItem).fields = n.getObjectValue<FieldValueSet>(FieldValueSet); }],
            ["sharepointIds", (o, n) => { (o as unknown as ListItem).sharepointIds = n.getObjectValue<SharepointIds>(SharepointIds); }],
            ["versions", (o, n) => { (o as unknown as ListItem).versions = n.getCollectionOfObjectValues<ListItemVersion>(ListItemVersion); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemAnalytics>("analytics", this.analytics);
        writer.writeObjectValue<ContentTypeInfo>("contentType", this.contentType);
        writer.writeObjectValue<DriveItem>("driveItem", this.driveItem);
        writer.writeObjectValue<FieldValueSet>("fields", this.fields);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeCollectionOfObjectValues<ListItemVersion>("versions", this.versions);
    };
    /**
     * Sets the analytics property value. Analytics about the view activities that took place on this item.
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        this._analytics = value;
    };
    /**
     * Sets the contentType property value. The content type of this list item
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        this._driveItem = value;
    };
    /**
     * Sets the fields property value. The values of the columns set on this list item.
     * @param value Value to set for the fields property.
     */
    public set fields(value: FieldValueSet | undefined) {
        this._fields = value;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Sets the versions property value. The list of previous versions of the list item.
     * @param value Value to set for the versions property.
     */
    public set versions(value: ListItemVersion[] | undefined) {
        this._versions = value;
    };
}
