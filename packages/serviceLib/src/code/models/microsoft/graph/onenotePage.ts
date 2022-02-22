import {Notebook, OnenoteEntitySchemaObjectModel, OnenoteSection, PageLinks} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePage extends OnenoteEntitySchemaObjectModel implements Parsable {
    /** The page's HTML content.  */
    private _content?: string | undefined;
    /** The URL for the page's HTML content.  Read-only.  */
    private _contentUrl?: string | undefined;
    /** The unique identifier of the application that created the page. Read-only.  */
    private _createdByAppId?: string | undefined;
    /** The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The indentation level of the page. Read-only.  */
    private _level?: number | undefined;
    /** Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.  */
    private _links?: PageLinks | undefined;
    /** The order of the page within its parent section. Read-only.  */
    private _order?: number | undefined;
    /** The notebook that contains the page.  Read-only.  */
    private _parentNotebook?: Notebook | undefined;
    /** The section that contains the page. Read-only.  */
    private _parentSection?: OnenoteSection | undefined;
    /** The title of the page.  */
    private _title?: string | undefined;
    private _userTags?: string[] | undefined;
    /**
     * Instantiates a new onenotePage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The page's HTML content.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Gets the contentUrl property value. The URL for the page's HTML content.  Read-only.
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Gets the createdByAppId property value. The unique identifier of the application that created the page. Read-only.
     * @returns a string
     */
    public get createdByAppId() {
        return this._createdByAppId;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the level property value. The indentation level of the page. Read-only.
     * @returns a integer
     */
    public get level() {
        return this._level;
    };
    /**
     * Gets the links property value. Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     * @returns a pageLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Gets the order property value. The order of the page within its parent section. Read-only.
     * @returns a integer
     */
    public get order() {
        return this._order;
    };
    /**
     * Gets the parentNotebook property value. The notebook that contains the page.  Read-only.
     * @returns a notebook
     */
    public get parentNotebook() {
        return this._parentNotebook;
    };
    /**
     * Gets the parentSection property value. The section that contains the page. Read-only.
     * @returns a onenoteSection
     */
    public get parentSection() {
        return this._parentSection;
    };
    /**
     * Gets the title property value. The title of the page.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Gets the userTags property value. 
     * @returns a string
     */
    public get userTags() {
        return this._userTags;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["content", (o, n) => { (o as unknown as OnenotePage).content = n.getStringValue(); }],
            ["contentUrl", (o, n) => { (o as unknown as OnenotePage).contentUrl = n.getStringValue(); }],
            ["createdByAppId", (o, n) => { (o as unknown as OnenotePage).createdByAppId = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as OnenotePage).lastModifiedDateTime = n.getDateValue(); }],
            ["level", (o, n) => { (o as unknown as OnenotePage).level = n.getNumberValue(); }],
            ["links", (o, n) => { (o as unknown as OnenotePage).links = n.getObjectValue<PageLinks>(PageLinks); }],
            ["order", (o, n) => { (o as unknown as OnenotePage).order = n.getNumberValue(); }],
            ["parentNotebook", (o, n) => { (o as unknown as OnenotePage).parentNotebook = n.getObjectValue<Notebook>(Notebook); }],
            ["parentSection", (o, n) => { (o as unknown as OnenotePage).parentSection = n.getObjectValue<OnenoteSection>(OnenoteSection); }],
            ["title", (o, n) => { (o as unknown as OnenotePage).title = n.getStringValue(); }],
            ["userTags", (o, n) => { (o as unknown as OnenotePage).userTags = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeStringValue("createdByAppId", this.createdByAppId);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("level", this.level);
        writer.writeObjectValue<PageLinks>("links", this.links);
        writer.writeNumberValue("order", this.order);
        writer.writeObjectValue<Notebook>("parentNotebook", this.parentNotebook);
        writer.writeObjectValue<OnenoteSection>("parentSection", this.parentSection);
        writer.writeStringValue("title", this.title);
        writer.writeCollectionOfPrimitiveValues<string>("userTags", this.userTags);
    };
    /**
     * Sets the content property value. The page's HTML content.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Sets the contentUrl property value. The URL for the page's HTML content.  Read-only.
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * Sets the createdByAppId property value. The unique identifier of the application that created the page. Read-only.
     * @param value Value to set for the createdByAppId property.
     */
    public set createdByAppId(value: string | undefined) {
        this._createdByAppId = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the level property value. The indentation level of the page. Read-only.
     * @param value Value to set for the level property.
     */
    public set level(value: number | undefined) {
        this._level = value;
    };
    /**
     * Sets the links property value. Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     * @param value Value to set for the links property.
     */
    public set links(value: PageLinks | undefined) {
        this._links = value;
    };
    /**
     * Sets the order property value. The order of the page within its parent section. Read-only.
     * @param value Value to set for the order property.
     */
    public set order(value: number | undefined) {
        this._order = value;
    };
    /**
     * Sets the parentNotebook property value. The notebook that contains the page.  Read-only.
     * @param value Value to set for the parentNotebook property.
     */
    public set parentNotebook(value: Notebook | undefined) {
        this._parentNotebook = value;
    };
    /**
     * Sets the parentSection property value. The section that contains the page. Read-only.
     * @param value Value to set for the parentSection property.
     */
    public set parentSection(value: OnenoteSection | undefined) {
        this._parentSection = value;
    };
    /**
     * Sets the title property value. The title of the page.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Sets the userTags property value. 
     * @param value Value to set for the userTags property.
     */
    public set userTags(value: string[] | undefined) {
        this._userTags = value;
    };
}
