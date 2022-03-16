import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListItemVersionFromDiscriminatorValue} from './createListItemVersionFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
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
     * Instantiates a new listItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentType property value. The content type of this list item
     * @returns a contentTypeInfo
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The content type of this list item
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        this._contentType = value;
    };
    /**
     * Gets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     * @returns a driveItem
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Sets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        this._driveItem = value;
    };
    /**
     * Gets the fields property value. The values of the columns set on this list item.
     * @returns a fieldValueSet
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The values of the columns set on this list item.
     * @param value Value to set for the fields property.
     */
    public set fields(value: FieldValueSet | undefined) {
        this._fields = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["analytics", (o, n) => { (o as unknown as ListItem).analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); }],
            ["contentType", (o, n) => { (o as unknown as ListItem).contentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); }],
            ["driveItem", (o, n) => { (o as unknown as ListItem).driveItem = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); }],
            ["fields", (o, n) => { (o as unknown as ListItem).fields = n.getObjectValue<FieldValueSet>(createFieldValueSetFromDiscriminatorValue); }],
            ["sharepointIds", (o, n) => { (o as unknown as ListItem).sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); }],
            ["versions", (o, n) => { (o as unknown as ListItem).versions = n.getCollectionOfObjectValues<ListItemVersion>(createListItemVersionFromDiscriminatorValue); }],
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
     * Gets the versions property value. The list of previous versions of the list item.
     * @returns a listItemVersion
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. The list of previous versions of the list item.
     * @param value Value to set for the versions property.
     */
    public set versions(value: ListItemVersion[] | undefined) {
        this._versions = value;
    };
}
