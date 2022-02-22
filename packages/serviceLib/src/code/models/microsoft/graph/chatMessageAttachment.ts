import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageAttachment implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This property and contentUrl are mutually exclusive.  */
    private _content?: string | undefined;
    /** The media type of the content attachment. It can have the following values: reference: Attachment is a link to another file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An announcement header.  */
    private _contentType?: string | undefined;
    /** URL for the content of the attachment. Supported protocols: http, https, file and data.  */
    private _contentUrl?: string | undefined;
    /** Read-only. Unique id of the attachment.  */
    private _id?: string | undefined;
    /** Name of the attachment.  */
    private _name?: string | undefined;
    /** URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word document, you might include a thumbnail image that represents the document. The channel could display the thumbnail image instead of the document. When the user clicks the image, the channel would open the document.  */
    private _thumbnailUrl?: string | undefined;
    /**
     * Instantiates a new chatMessageAttachment and sets the default values.
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
     * Gets the content property value. The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This property and contentUrl are mutually exclusive.
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Gets the contentType property value. The media type of the content attachment. It can have the following values: reference: Attachment is a link to another file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An announcement header.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the contentUrl property value. URL for the content of the attachment. Supported protocols: http, https, file and data.
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Gets the id property value. Read-only. Unique id of the attachment.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the name property value. Name of the attachment.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the thumbnailUrl property value. URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word document, you might include a thumbnail image that represents the document. The channel could display the thumbnail image instead of the document. When the user clicks the image, the channel would open the document.
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["content", (o, n) => { (o as unknown as ChatMessageAttachment).content = n.getStringValue(); }],
            ["contentType", (o, n) => { (o as unknown as ChatMessageAttachment).contentType = n.getStringValue(); }],
            ["contentUrl", (o, n) => { (o as unknown as ChatMessageAttachment).contentUrl = n.getStringValue(); }],
            ["id", (o, n) => { (o as unknown as ChatMessageAttachment).id = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as ChatMessageAttachment).name = n.getStringValue(); }],
            ["thumbnailUrl", (o, n) => { (o as unknown as ChatMessageAttachment).thumbnailUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
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
     * Sets the content property value. The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This property and contentUrl are mutually exclusive.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Sets the contentType property value. The media type of the content attachment. It can have the following values: reference: Attachment is a link to another file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An announcement header.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the contentUrl property value. URL for the content of the attachment. Supported protocols: http, https, file and data.
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * Sets the id property value. Read-only. Unique id of the attachment.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the name property value. Name of the attachment.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the thumbnailUrl property value. URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word document, you might include a thumbnail image that represents the document. The channel could display the thumbnail image instead of the document. When the user clicks the image, the channel would open the document.
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
}
